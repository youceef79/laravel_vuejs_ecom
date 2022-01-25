import axios from 'axios';
import VueRouter from 'vue-router'
import Router from 'vue-router' 
const state = {
  user: null,
  userCartItems : [],
  errors: [],
  result: ''
};

const getters = {
  user: state => state.user,
  userCartItems: state => state.userCartItems,
  errors: state => state.errors,
  result: state => state.result
};

const actions = {
    async login({ commit, rootState, dispatch } , obj) {
      //const res = await axios.get(`/api/product-attrs/${prodId}`);
         rootState.product.isLoading = true;
      //await new Promise(r => setTimeout(r, 5000));
       await axios.post('/api/login',
               obj ).then((res) => {
              if (res.data.token) { 
              console.log("token: "+ res.data.token);
              commit('login', {status: 1, res: res.data, rootState: rootState});
              dispatch('updateCarts');  
              } else {
             commit('login', {status: 0, res: res.data});
              }
            }).catch((error) => { console.log(error.message); });
            await new Promise(r => setTimeout(r, 2000));  
           rootState.product.isLoading = false;    
         },
      async register({ commit } , obj) {
      //const res = await axios.get(`/api/product-attrs/${prodId}`);
        await axios.post('/api/register',
               { 
                name: obj.name,
                email: obj.email,
                password: obj.password }
            ).then((res) => {
                window.location.href="/";  
            }).catch(error => {
               commit('register', error.response.data.message);
                console.log(error.response.data);
            });
               return false;
     },
    init( { commit }){

      commit('init');
   },
     async logout({ commit, rootState }) {
       rootState.product.isLoading = true;
      //await new Promise(r => setTimeout(r, 5000));
       localStorage.removeItem('user');
      //const res = await axios.get(`/api/product-attrs/${prodId}`);
       await axios.get('/api/logout').then((res) => {
              //console.log("logout: "+ res.data.class);
              }).catch((error) => { console.log(error.message); });
              await commit('logoutFromUser' , {root: true});  
                    commit('logout');
          await new Promise(r => setTimeout(r, 2000));          
          rootState.product.isLoading = false;
     },
      async updateCarts({ commit, rootState, state}) {
           if ( state.user != null) {
             const res = await axios.get(`/api/usercarts/${state.user.email}`);
             commit('updateCartsFromUser', res.data , {root: true});
            } 
      }
};
const mutations = {
    
    login(state , obj){ 
      if (obj.status == 0) {
            state.errors.push('email or password is incorrect, please verify your credentials !');
          } else {
            //state.result = 'welcome to your profile '+ obj.res.user.name;
          state.user = obj.res.user;
          localStorage.setItem('user' , 'loggedin');
          //window.location.href="/";
      }
    },
    
     register(state , error){ 
        state.errors.push(error);
    },
    
     init(state) { state.errors= []; state.result='';},
    
     logout: (state) => { 
      state.user = new Object(); state.userCartItems =[];
      window.location.href="/";
    },
    
    addToUserCart(state , obj){ 
           state.userCartItems.unshift(obj);
           console.log("userItems :"+ state.userCartItems[0].attr.size);
           state.userCartItems = [];
    }
};

export default {
  root: true,
  state,
  getters,
  actions,
  mutations
};
