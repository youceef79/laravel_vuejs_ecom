<template>
      <div>
        <div v-if="checkoutPanel">
        <Checkout/>
        </div>
        <loading :active="isLoading" 
        :can-cancel="false" :opacity="0.8" 
        :is-full-page="true"></loading> 
      <Nav />
            <div class="justify-content-center">
                <router-view></router-view>       
            </div>
            <footer-section />
        </div>
</template>

<script>
  import { mapActions } from "vuex"
  import { mapGetters } from "vuex"
  import Nav from './Header/Nav.vue'
  import Test from './Test.vue'
  import VueRouter from 'vue-router'
  import FooterSection from './FooterSec/FooterSection.vue'
  import Checkout from './CheckoutSec/Checkout.vue'
  //import loading from './uiTools/loading.vue'
  import Loading from 'vue-loading-overlay';
    // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css';
     // :on-cancel="onCancel"
    export default {
       name: 'App',     
       components: {
          Test , Nav, FooterSection, Loading, Checkout
        },
        computed: {
          ...mapGetters(['isLoading', 'checkoutPanel', 'cartItems']),
        } ,
      mounted() {
          this.upIsLoading(true);
          document.onreadystatechange = () => {
             if (document.readyState == "complete") {
               this.upIsLoading(false);    
             }
          }
        },
          methods: {
            ...mapActions(["upIsLoading"]),
        }
     };
</script>
<style>
</style>