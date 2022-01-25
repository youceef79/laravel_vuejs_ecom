<template>
    <div class="root">
    <!--              section1                   -->
<div v-if="cartItems.length>0" class="container main-section mt-5">
    <div class="row">  
            <div class="col-lg-12 pb-2">
                <h4>Shoping Cart Design :</h4>
            </div>
            <div class="col-lg-12 pl-3 pt-3">
                <table class="table table-hover border bg-white">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th >Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th style="width:5%;">new Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartItems">
                            <td>
                                <div class="row">
                                    <div class="col-lg-2 Product-img">
                                        <img :src="`/assets/products/medium/${item.product.image}`" class="img-responsive"/>
                                    </div>
                                    <div class="col-lg-10">
                                        <h4 class="nomargin"> {{ item.p_name }} </h4>
                                        <p>{{ item.description }}</p>
                                    </div>
                                </div>
                            </td>
                            <td> {{ item.attr.size }} </td>
                            <td> {{ item.attr.price }} </td>
                            <td> {{ item.quant }} </td>
                            <td data-th="Quantity">
                                <input type="number" v-model="refreshQuant" class="form-control text-center" min="0">
                            </td>
                            <td> {{ item.attr.price*item.quant }} </td>
                            <td class="actions" data-th="" style="width:10%;">
                                <button @click="refreshItem(item)" class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
                                <button @click="deleteItem(item)" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>                                
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><a href="#" class="btn btn-warning text-white"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
                            <td colspan="2" class="hidden-xs"></td>
                            <td class="hidden-xs text-center" style="width:10%;"><strong>Total : ${{totalPrice}}</strong></td>
                            <td @click="updateCheckout(true)"><button class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
         <hr />
        <div class="coup-card mb-3 mt-2">
              <div class="coup-card-body">
                     <div v-if="coupon.status==1&&coupon.expiry==0" class="alert alert-success">
                    <span> Your coupon is successfully applied with discount of {{coupon.amount}}% !</span>
                     </div>
                    <div v-if="coupon.status==1&&coupon.expiry==1" class="alert alert-danger">
                    <span> Your coupon is expired !</span>
                    </div>
                    <div v-if="coupon.status==-1" class="alert alert-danger">
                    <span> No coupon available with this name </span>
                    </div>
                        <form @submit.prevent="applyCoupon(cp)">
                            <div class="form-group"> <label>Have coupon?</label>
                                <div class="input-group"> <input type="text" class="form-control coupon" v-model="cp" placeholder="Coupon code"> <span class="input-group-append"> <button type="submit" class="btn btn-primary btn-apply coupon" :disabled="cp==''">Apply</button> </span> </div>
                            </div>
                        </form>
                    </div>
         </div>
    </div>
   <!--                section 2         -->
   <div class="container-fluid" v-else>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5>Cart</h5>
                </div>
                <div class="card-body cart">
                    <div class="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3">
                        <h3><strong>Your Cart is Empty</strong></h3>
                        <h4>Add something to make me happy :)</h4> <a href="/" class="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
   import { mapGetters } from 'vuex'
   import { mapActions } from 'vuex'
   export default {
           name: "CartItems",
         mounted() {
           this.initCoupon();
          },
            computed: { 
            ...mapGetters(["totalPrice" ,"coupon" , "cartItems", "refreshQuantity", "checkoutPanel"]),
         refreshQuant: {
                    get() {
                    return this.refreshQuantity;
                    },
                   set (value) {
                    this.updateRefreshQuant(value);
                     }
                }
            },
         methods: {
            ...mapActions(["initCoupon","deleteItem","applyCoupon","refreshItem","updateRefreshQuant","updateCheckout"]),
         },
         data() {
            return {
                cp: ''
            }
         } 
    };
</script>

<style>

@import url(http://fonts.googleapis.com/css?family=Calibri:400,300,700);

.mt-100 {
    margin-top: 100px
}

.card {
    margin-bottom: 30px;
    border: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    letter-spacing: .5px;
    border-radius: 8px;
    -webkit-box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05);
    box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05)
}

.card .card-header {
    background-color: #fff;
    border-bottom: none;
    padding: 24px;
    border-bottom: 1px solid #f6f7fb;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px
}

.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
}

.card .card-body {
    padding: 30px;
    background-color: transparent
}

.btn-primary,
.btn-primary.disabled,
.btn-primary:disabled {
    background-color: #4466f2 !important;
    border-color: #4466f2 !important
}
.Product-img img{
    width: 100%;
}
.main-section{
    font-family: 'Roboto Condensed', sans-serif;
    margin-top:100px;
}
 .coup-card {
     position: relative;
     display: -ms-flexbox;
     display: flex;
     -ms-flex-direction: column;
     flex-direction: column;
     min-width: 0;
     width: 60%;
     word-wrap: break-word;
     background-color: #fff;
     background-clip: border-box;
     border: 1px solid rgba(0, 0, 0, .125);
     border-radius: 0px
 }
.coup-card-body {
     padding: 1.40rem
 }
.coupon {
     border-radius: 1px
 }
.btn-apply {
     font-size: 11px
 }
    
</style>