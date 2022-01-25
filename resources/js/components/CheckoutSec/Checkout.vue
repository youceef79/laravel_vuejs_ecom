<template>
 <div class="Box">
 	<div class="overlay"></div> 
 	<div class="checkout">
<p style="display: none;">Resize the browser window to see the effect. When the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other.</p>
 <span @click="function(){updateCheckout(false); this.movePay=false;}" class="cancel_icon"><i class="fa fa-times fa-2x" aria-hidden="true"></i></span>
<div class="row">
  <div class="col-75">
    <div class="container">
    	<div v-if="successCheckout" style="margin-bottom: 1rem;" class="alert alert-success" id="card-errors">  
            	{{successCheckout}}
         </div>
      <form @submit.prevent="move" action="/">
        <div class="row">
          <div class="col-100" v-if="!movePay">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
             <div v-if="authenticated">
             <input type="text" :value="user.name" id="fname" name="firstname" disabled="true"> </div>
             <div  v-else>
            <input type="text" v-model="form.name" id="fname" name="firstname" placeholder="full name">
              </div>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
             <div v-if="authenticated">
            <input :value="user.email" type="text" id="email" name="email" disabled="true"></div>
            <div  v-else>
            	<input v-model="form.email" type="email" id="email" name="email" placeholder="email" 
            	 required>
            </div>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input  v-model="form.address" type="text" id="adr" name="address" placeholder="542 W. 15th Street">
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input v-model="form.city" type="text" id="city" name="city" placeholder="New York">

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input v-model="form.state" type="text" id="state" name="state" placeholder="NY">
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input v-model="form.zip" oninput="if(this.value.length>5) {this.value = this.value.slice(0,5); return false;}" type="number" id="zip" name="zip" placeholder="10001">
              </div>
            </div>
          </div>
        </div>
         <input type="submit" v-if="!movePay" value="Continue to checkout" class="checkbtn">
        <div class="col-100" v-if="movePay" >
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            <div v-if="errors" style="margin-bottom: 1rem;" class="alert alert-danger" id="card-errors">  
            	{{errors}}
            </div>
            <div class="icon-container">
             <div class="row">
              <div class="col-50">
              	<img src="/assets/cards/stripe64.png">
              	<input style="display:block;" type="radio" id="stripe" value="st" v-model="picked"/>
               </div>
               <div class="col-50">
               	<img src="/assets/cards/paypal64.png">
               	<input style="display:block;" type="radio" id="paypal" value="py" v-model="picked"/>
                </div>
              </div>
            </div>
            <div v-if="picked=='st'">
            <stripeCard /> 
            </div>
            <div v-if="picked=='py'">
             <paypalCard />
            </div>

            <!--
            <label for="cname">Name on Card</label>
            <input class="col-50" v-model="cname" type="text" id="cname" name="cardname" placeholder="John More Doe"> <br/>
            <label for="ccnum">Credit card number</label>
            <input v-model="cnumber" type="number" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"> <br/>
            <label for="expmonth">Exp Month</label>
            <input v-model="cmonth" type="month" id="expmonth" name="expmonth" placeholder="September">
             <br/>
            <div class="row">
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input v-model="cvv" type="number" oninput="if(this.value.length>3) {this.value = this.value.slice(0,3); return false;}" id="cvv" name="cvv" placeholder="352"
                 required>
              </div>
            </div>
              -->

       <!-- <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label> --> 
        <input type="button" @click="pay" v-if="movePay&&picked=='st'" value="Confirm payment" class="checkbtn">
       </div>
       
    </form>
    </div>
  </div>
  <div class="col-25">
    <div class="container">
      <h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b>{{cartItems.length}}</b></span></h4>
      <p v-if="cartItems.length>0" v-for="item in cartItems"><a href="#">{{item.product.p_name}}</a> <span class="price">${{ item.attr.price }}*{{ item.quant }}</span></p>
      <hr>
      <p>Total <span class="price" style="color:black"><b>${{totalPrice}}</b></span></p>
    </div>
  </div>
</div>
 </div>
 </div>
</template>

<script>
   import { mapActions } from 'vuex'
   import { mapGetters } from 'vuex'
   import  stripeCard from './stripeCard.vue'
   import  paypalCard from './paypalCard.vue'
   import { createToken } from 'vue-stripe-elements-plus'
	export default {
		/*
		mounted: function(){
			const script = document.createElement("script");
			script.src = "https://js.stripe.com/v3/";
			document.body.appendChild(script);
		},*/
		name: 'Checkout',
		mounted: function() {
                 this.initCheck();
           /*     
            const script = document.createElement("script");
           script.src ="https://www.paypal.com/sdk/js?client-id=AfzjWhH5v_lpBmVcmHu6dcOJSMSpqwoHLnuWuFcbBjIsRhU4r5Da_h2b6kIjSjfo8h15mo0aKUmoiddg";
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script); */
         },
		components: { stripeCard, paypalCard },
		computed: {
			...mapGetters(["cartItems", "totalPrice", "user", "count_cart" , "successCheckout"]),
		authenticated: {
            get () {
           return localStorage.getItem('user');     
              }
         }

		},
	  data() {
	   return {
	  form: {
         name: '',
         email: '',
         address: '',
         city: '',
         zip: '',
         state: ''
          },
         errors: '',
         picked: 'st',
         movePay: false
       }
     },
		methods: {
	...mapActions(["updateCheckout" , "setOrder", "initCheck"]),
			  move () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
         //this.errors = data.error.message;
         this.movePay = true;
    
       },
       pay() {
           createToken().then(data => {
      	   if (data.error) {
      // Inform the customer that there was an error.
            this.errors = data.error.message;
            return false;
          } else {
           console.log("token :"+ JSON.stringify(data.token.id));
           this.stripeTokenHandler(data.token);
           }
         })
       },
      stripeTokenHandler: function(token) {
		  if (localStorage.getItem('user')) {
              this.form.name = this.user.name;
              this.form.email = this.user.email;  
		  }
		  var obj = {
              name : this.form.name,
              email: this.form.email,
              address: this.form.address,
              city: this.form.city,
              state: this.form.state,
              stripeToken: token.id,
              price: this.totalPrice,
              desc: "Quantity of "+this.count_cart+" products have been successfully payed!"
		  }
		  this.setOrder(obj);
		  this.initForm();
		},
		initForm() {
			 this.form.name = "";
			 this.form.email = "";
			 this.form.address = "";
			 this.form.state = "";
			 this.form.city = "";
		}/*
		setLoaded(){
         const PayPalButton = window.paypal.Buttons.driver("vue", window.Vue);
         var ele = document.getElementById('paypal-sec');
         ele.appendChild(PayPalButton);
	    }*/
	 }
	};
</script>


<style scoped>
 .Box{
 	position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    width: 80%;
 }
 .cancel_icon{
 	position: absolute;
 	right: 2px;
 	top: 0;
 	cursor: pointer; 
 }
  .fa-times{
  	position: relative;
    right: 0;
    color: red;
  }
  .overlay{
    background: #000000;
    position: fixed;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  }
 .checkout{
     width: 100%;
     opacity: 1;
     z-index: 999;
     background: #ffffff;
     padding: 40px 20px;
     margin-left: 15rem; 
 } 


* {
  box-sizing: border-box;
}

  
  .row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  argin: 0 -16px;
}

.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}
.col-100 {
  -ms-flex: 100%; /* IE10 */
  flex: 100%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75, .col-100{
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
}

input[type=text], input[type=number], input[type=month], input[type=email]  {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
}

.checkbtn {
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.checkbtn:hover {
  background-color: #45a049;
}

a {
  color: #000000;
  text-decoration: none;
}

hr {
  border: 1px solid lightgrey;
}

 span.price {
  float: right;
  color: grey;
  position: relative;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
  .checkout {
  	margin-left: 5rem;
  }
}
</style>