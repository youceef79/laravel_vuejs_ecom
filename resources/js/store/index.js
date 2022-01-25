import Vuex from 'vuex';
import Vue from 'vue';
import product from './modules/product';
import cart from './modules/cart';
import User from './modules/User';
import checkout from './modules/checkout';
import createPersistedState from 'vuex-persistedstate'; 

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    product, cart, User, checkout
  },
  plugins: [createPersistedState()]
});
