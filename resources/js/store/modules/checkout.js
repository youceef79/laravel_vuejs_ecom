import axios from 'axios';


const state = {
   order: null,
   successCheckout: '',
   checkoutPanel: false 
};

const getters = {
  order: state => state.order,
  successCheckout: state => state.successCheckout,
  checkoutPanel: state => state.checkoutPanel
};

const actions = {

  async setOrder({ commit , state , rootState }, obj) {
      //rootState.product.isLoading = true;
      //await new Promise(r => setTimeout(r, 1000));
          /*
       if (localStorage.getItem('user')) {
          var cartItem = {
             products_id: obj.product.id,
             size: obj.attr.size,
             price: obj.attr.price,
             quantity: obj.quant,
             user_email: rootState.User.user.email 
        }; */
         state.errorCheckout = '';
       await axios.post('/api/order', obj).then((res) => {
                   if (res.data.result == "failure") {
                    state.successCheckout = "payment successfully completed!";
                   }
                   console.log("result :"+res.data.input.stripeToken);
              }).catch((error) => { console.log(error.message); });
            rootState.cart.cartItems = [];
            rootState.cart.totalPrice = 0;
            rootState.cart.count_cart = 0;
                commit('setOrder', obj);  
         },

    initCheck({commit, state, rootState}){
       state.successCheckout = ''; 
    },
    updateCheckout({ commit } , val) {
      commit('updateCheckout' , val);
   }  
};

const mutations = {

    setOrder: (state, obj) => {
      
    },
    updateCheckout(state, val){
      state.checkoutPanel = val;
      console.log("check :"+ state.checkoutPanel);
    }
};

export default {
  root: true,
  state,
  getters,
  actions,
  mutations
};
