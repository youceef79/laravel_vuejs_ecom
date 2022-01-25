<template>
	<div style="display: inline-block">		
	 <div v-if="cartItems.find(o => o.product.id == productItem.id)">
	   <button id="cartButt" type="button" class="btn btn-success btn-md mr-1 mb-2" :disabled="true"><i class='fas fa-check pr-2'></i>Already in cart</button>
	</div>
	<div v-else>
	  <button id="cartButt" @click="addToCart" type="button" class="btn btn-light btn-md mr-1 mb-2" :disabled="false"><i class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
	</div>
     </div>
</template>

<script>
  import Router from 'vue-router'
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
 export default {
 	name: 'CartAddButton',
 	computed: { 
 		...mapGetters(["adProduct", "cartItems" , "productItem"]),
 	},
 	methods: {
 		...mapActions(['addtocart','updateProduct']),
 		 addToCart() {
        this.adProduct.product = this.productItem;
        this.addtocart();
      }
    } 
 };	
</script>