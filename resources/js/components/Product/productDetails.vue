<template>
	<!--   Section: Block Content   -->
<div class="container">
 <section class="mb-5" style="padding-top: 50px;">

  <div class="row">
    <div class="col-md-6 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div class="mdb-lightbox">

        <div class="row product-gallery mx-1">

          <div class="allfigures col-12 mb-0">
            <figure class="allimages view overlay rounded z-depth-1 main-img">
              <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                data-size="710x823">
                <img id="mainImage" width="80%" height="80%" style="border-radius: 5%" :src="`/assets/products/medium/${productItem.image}`"
                  class="img-fluid z-depth-1">
              </a>
            </figure>
          </div>
          <div class="col-12">
            <div class="row">
              <div v-for="pImage in productImages" class="col-3">
                <div class="view overlay rounded z-depth-1 gallery-item">
                  <img id="srcimage" @click="switchImage($event)" :src="`/assets/products/small/${pImage.image}`"
                   style="border-radius: 30%" class="srcimage img-fluid">
                </div>
            </div>
        </div>
          </div>
        </div>

      </div>

    </div>
    <div class="col-md-6">

      <h3>{{ productItem.p_name }}</h3>
      <!-- <p class="mb-2 text-muted text-uppercase small">Shirts</p> -->
      <!--
      <ul class="rating">
        <li>
          <i class="fas fa-star fa-sm text-primary"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-primary"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-primary"></i>
        </li>
        <li>
          <i class="fas fa-star fa-sm text-primary"></i>
        </li>
        <li>
          <i class="far fa-star fa-sm text-primary"></i>
        </li>
      </ul> -->
      <p class="pt-1"> {{ productItem.description }}</p>
      <div class="table-responsive">
        <table class="table table-sm table-borderless mb-0">
         <tbody>
          <!--
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
              <td>Shirt 5407X</td>
            </tr>
          -->
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
              <td>{{ productItem.p_color }}</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
              <td>USA, Europe</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Availabe in Stock</strong></th>
              <td>yes</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Main Price</strong></th>
              <td> ${{ productItem.price }} </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr>
      <div class="table-responsive mb-2">
        <table class="table table-sm table-borderless">
          <tbody>
            <tr>
              <td class="pl-0 pb-0 w-25">Quantity</td>
              <td class="pb-0">Select size</td>
               <td class="pl-0 pb-0 w-25"> Price </td>
            </tr>
            <tr>
              <td class="pl-0">
                <div class="flex form-check-inline mb-0 ml-0">
                  <button @click="quant--"
                    class="minus btn btn-default mr-3"></button>
                  <input type="number" name="quant" v-model="quant" style="width: 50px;" min="0" 
                  value="1">
                  <button @click="quant++"
                    class="plus btn btn-default ml-3"></button>
                </div>
              </td>
              <td>
                <div class="mt-2">
                  <div v-for="attr in productAttrs" class="form-check form-check-inline pl-0">
                    <input type="radio" class="form-check-input" :value="attr" name="materialExampleRadios" v-model="picked">
                    <label class="form-check-label small text-uppercase card-link-secondary"
                      for="small">{{ attr.size }}</label>
                  </div>
                  </div>
              </td>
              <td> 
                <div v-if="adProduct.attr != 0">
                <div class="mt-2" v-if="productAttrs.filter(o => o.price == adProduct.attr.price)">${{adProduct.attr.price}}</div>
                </div>
                 <div class="mt-2" v-else>
                   ${{productItem.price}}
                  </div> 
                 </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
      <CartAddButton/>
    </div>
  </div>
    <hr/>
</section>
 <relatedProducts />
</div>
<!--Section: Block Content-->

</template>

 <script>
  import Router from 'vue-router'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import  CartAddButton  from '../Buttons/CartAddButton.vue'
  import relatedProducts from './relatedProducts.vue'
  export default {
  	 name: "productDetails",
     components: { CartAddButton, relatedProducts },
     computed: { 
     ...mapGetters(["productImages" , "productItem" , "productAttrs", "adProduct"]),
       quant: {
         get () { 
          return this.adProduct.quant;
         },
        set (value) {
            this.updateQuant(value);
         }
      }, 
      picked: {
         get () {
          return this.adProduct.attr;
         },
        set (value) {
            this.updateAttr(value); 
          }
         }
      },
      /*
      created() {
          this.upIsLoading(true); 
          document.onreadystatechange = () => {
             if (document.readyState == "complete") {
               this.upIsLoading(false);    
             }
          } 
        }*/
     methods: {
     	switchImage(event) {
        var mainImage = document.getElementById("mainImage");
        var srcImage = event.target;
        var mainImageId = mainImage.src.split("/")[mainImage.src.split("/").length-1];
        var srcImageId = srcImage.src.split("/")[srcImage.src.split("/").length-1];
        mainImage.src = "/assets/products/medium/"+srcImageId;        
        srcImage.src = "/assets/products/small/"+mainImageId;
     	},
      ...mapActions(["updateQuant", "updateAttr", "upIsLoading"]) 
    }
  };
 	
 </script>
 <style>
    .srcimage {
      cursor: pointer;
    }
    .minus::after {
       content: '-';
       font-size: 15px;
       padding: 0px;
    }
    .plus::after {
       content: '+';
       font-size: 15px;
       padding: 0px;
    }
 </style>
