import Vue from 'vue'
import VueRouter from 'vue-router'
import CartItems from '../components/Cart/CartItems.vue'
import allProductsItems from '../components/Product/allProductsItems.vue'
import productDetails from '../components/Product/productDetails.vue'
import Login from '../components/User/Login.vue'
import Register from '../components/User/Register.vue'


Vue.use(VueRouter);
const routes = [
      { 
       path: '/cart',
       component: CartItems 
       },
       { 
       path: '/',
       component: allProductsItems
       },
       { 
        path: '/product-details/:id',
        name: 'product-details',
        component: productDetails
       },
       { 
        path: '/user/login',
        name: 'user-login',
        component: Login
       },
       { 
        path: '/user/register',
        name: 'user-register',
        component: Register
       }
   ]; 

export default new VueRouter({
   routes: routes
});