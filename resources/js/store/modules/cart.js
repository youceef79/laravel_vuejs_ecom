import axios from 'axios';
import { mapActions } from 'vuex'

const state = {
  cartItems: [], 
  count_cart: 0,
  totalPrice: 0,
  refreshQuantity: 1,
  adProduct: {
    product: 0,
    attr: 0,
    quant: 0,
  },
  coupon:  {
  amount: 0,
  status: 0,
  expiry: -1
 }
};

const getters = {
  cartItems: state => state.cartItems,
  count_cart: state => state.count_cart,
  adProduct: state => state.adProduct,
  totalPrice: state => state.totalPrice,
  refreshQuantity: state => state.refreshQuantity,
  coupon: state => state.coupon
};

const actions = {

  async addtocart({ commit , state , rootState }) {
      rootState.product.isLoading = true;
      await new Promise(r => setTimeout(r, 1000));
      var obj;
      if (state.adProduct.attr == 0 && state.adProduct.quant == 0) {       
            obj= { product: state.adProduct.product ,
            attr : {size: "casual", price: state.adProduct.product.price }, 
            quant: 1
          };
       } else if(state.adProduct.attr == 0 && state.adProduct.quant != 0) {
            obj =  {
             product: state.adProduct.product,
             attr: {size: "casual", price: state.adProduct.product.price },
             quant: state.adProduct.quant
            };           
       } else {
            obj =  {
             product: state.adProduct.product,
             attr:   state.adProduct.attr,
             quant: state.adProduct.quant
            };
       }

       if (localStorage.getItem('user')) {
          var cartItem = {
             products_id: obj.product.id,
             size: obj.attr.size,
             price: obj.attr.price,
             quantity: obj.quant,
             user_email: rootState.User.user.email 
        };
       await axios.post('/api/addtocart', cartItem).then((res) => {
                   console.log("result :"+res.data.size);
                   commit('addToUserCart' , obj);
              }).catch((error) => { console.log(error.message); });  
         }
         rootState.product.isLoading = false;
        commit('addtocart', obj);  
   },

   async updateQuant({ commit } , val) {
      commit('updateQuant' , val);
   },

   async updateAttr({ commit } , obj) {
      commit('updateAttr' , obj);
   },

   async deleteItem({ commit, rootState }, obj ){
       rootState.product.isLoading = true;
       await new Promise(r => setTimeout(r, 1000));
      if (localStorage.getItem('user')) {
          var data = {
             products_id: obj.product.id,
             user_email: rootState.User.user.email 
           };
       await axios.delete('/api/deletecart', { data: data} ).then((res) => {
                   console.log("id :"+res.data.products_id+"user: "+res.data.user_email);
              }).catch((error) => { console.log(error.message); });  
         }
         rootState.product.isLoading = false;
       commit('deleteItem', obj );   
   },

  async refreshItem( { commit, state, rootState }, obj ){
       rootState.product.isLoading = true;
       await new Promise(r => setTimeout(r, 1000));
       if (obj.quant != 0) {
         if (localStorage.getItem('user')) {
          var data = {
             products_id: obj.product.id,
             user_email: rootState.User.user.email,
             quantity: state.refreshQuantity 
           };
       await axios.post('/api/updateusercart', data ).then((res) => {
                   console.log("out :"+res.data.quantity);
              }).catch((error) => { console.log(error.message); });  
         }
      }
      rootState.product.isLoading = false;
      commit('refreshItem', obj );
   },

   updateRefreshQuant({ commit }, val){
      commit('updateRefreshQuant' , val);
   },

  async applyCoupon({commit, state}, cp) {
      console.log("cp :"+ cp);
      commit('initCoupon');
       var data = {
           coupon: cp
        };
        //state.totalPrice += 1.25;
      await axios.post('/api/coupon', data ).then((res) => {
                   console.log("st :"+res.data.status+" am: "+res.data.amount+" ex:"+res.data.ex);
             if(res.data.status) {
                  state.coupon.status = 1;
                  state.coupon.amount = res.data.amount;
                  if(res.data.ex) {
                   state.coupon.expiry = 1;    
                  } else { 
                   state.coupon.expiry = 0;
                   commit('applyCoupon',state.coupon.amount)  
                   }
              } else {
                 state.coupon.status = -1;      
              }
        }).catch((error) => { console.log(error.message); });
    
    },
     initCoupon({commit}) {
        commit('initCoupon');
     } 
};

const mutations = {

    addtocart: (state, obj) => {
        state.cartItems.unshift(obj);
        state.count_cart++;
        state.totalPrice += obj.quant*obj.attr.price;
        state.adProduct.product = 0;
        state.adProduct.attr = 0;
        state.adProduct.quant = 1;
    },
    updateQuant: (state , val) => {
         state.adProduct.quant = val;
         console.log("quantity :" + state.adProduct.quant);
     },
     updateAttr: (state , obj) => {
         state.adProduct.attr = obj;
         console.log("size :" + state.adProduct.attr.size);
         console.log("quantity :" + state.adProduct.quant);
     }
     ,
    deleteItem(state, obj){
       console.log(state.cartItems);
       state.cartItems = state.cartItems.filter(c => c.product.id != obj.product.id);
       state.count_cart--;
       state.totalPrice -= obj.attr.price*obj.quant;
       if (state.cartItems.length==0) {
           state.totalPrice = 0;
           state.count_cart = 0;
       }
       console.log(state.cartItems);
    },
    refreshItem(state, obj){
       if (state.refreshQuantity != 0) {
         state.totalPrice -= obj.attr.price*obj.quant; 
         var item = state.cartItems.find(c => c.product.id == obj.product.id);
         item.quant = state.refreshQuantity;
         state.totalPrice += item.attr.price*item.quant;   
       } 
       state.refreshQuantity = 0;
    },
    updateCartsFromUser(state, obj){
            state.cartItems = [];
            state.totalPrice = 0;
            state.totalPrice = 0;
            obj.forEach(c => {
             state.cartItems.unshift({product: c.product,
             attr: {size: c.size, price: c.price}, quant: c.quantity});
             state.totalPrice += c.quantity*c.price; 
           });
            state.count_cart = obj.length;
            window.location.href="/"; 
    },
     updateRefreshQuant(state, val) {
      state.refreshQuantity = val; 
     }
     ,
    logoutFromUser(state) {
           state.cartItems = [];
           state.totalPrice = 0;
           state.count_cart = 0;
    },
    updateCheckout(state, val){
      state.checkoutPanel = val;
      console.log("check :"+ state.checkoutPanel);
    },
    applyCoupon(state, am){
      state.totalPrice -= state.totalPrice*(am/100);
    },
     initCoupon(state) {
      state.coupon.status = 0;
      state.coupon.amount = 0;
      state.coupon.expiry = -1;
     }
};

export default {
  root: true,
  state,
  getters,
  actions,
  mutations
};
