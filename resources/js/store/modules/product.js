import axios from 'axios'
import VueRouter from 'vue-router'
import cart from './cart'

const state = {
  allProducts: window.products, // all Products
  allCategories: window.allCategories, // subCat + mainCat
  products: window.products,    // products showed in the interface
  categories: window.categories,  // mainCat
  subCategories: [],            // subCat
  imagesGalleries: window.imagesGalleries, // all images
  productImages: [],       // product images
  productItem: new Object(),
  productAttrs: [],
  related_products: [],
  isLoading: false,
  wishListItems: []
};

const getters = {
  products: state => state.products,
  categories: state => state.categories,
  subCategories: state => state.subCategories,
  productImages: state => state.productImages,
  productItem: state => state.productItem,
  productAttrs: state => state.productAttrs,
  addtocart: state => state.addtocart,
  related_products: state => state.related_products,
  isLoading: state => state.isLoading,
  wishListItems: state => state.wishListItems
};

const actions = {
  
  async filterByCat({ commit }, cat) {
     commit('filterByCat', cat);
  },
   async filterByPage({ commit }, prods){
     commit('filterByPage', prods);
   },  
  async subCat({ commit }, cat) {
     commit('subCat', cat);
  },
  async prodDetails({ commit } , prodId) {
       var x,y;
       await axios.get(`/api/product-attrs/${prodId}`).then(res => {
        //console.log("data :"+ res.data.relatedProducts[0].p_name);
         x = res.data.productAttrs;
         y = res.data.relatedProducts;
      }).catch(errors => console.log("errors :"+ errors));
       if (y == null) {
            y = [];
        }
      commit('prodDetails', [ prodId, x, y ] );  
  },
   home({ commit }) {
        commit('home');  
  },
    upIsLoading({ commit }, val){
      commit('upIsLoading', val);
    },
    updateProdFromSer({ commit, state }, ser) {
         state.products = state.allProducts.filter(p => { var rgxp = new RegExp(ser, "gi"); return (p.p_name.match(rgxp) || p.description.match(rgxp)); });
         console.log("pro :"+ state.products);
    },
    wishListAction ({ commit }, prod) {
       commit('wishListAction', prod); 
    }
};

const mutations = {/*
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
*/ 
   home: (state) => { state.products = state.allProducts; },
   filterByCat: (state, cat) => { 
         state.products = state.allProducts;
         state.products = state.products.filter(p => p.categories_id === cat.id);
    },
    filterByPage: (state, prods) => { 
         state.products = prods;
    },
   subCat: (state, cat) => {
         //let old = []; 
         //state.subCategories != [] ? old = state.subCategories : old = [];
         var index = (state.subCategories.length > 0) ? state.subCategories.find(e => e).parent_id : null;
         if ( index == cat.id ) {
             state.subCategories = [];
          } else {
         state.subCategories = state.allCategories.filter(c => c.parent_id == cat.id);
           }
    },
    prodDetails: (state , obj ) => {
        state.related_products = [];
        state.productItem = state.allProducts.find(e => e.id == obj[0]);
        state.productImages = state.imagesGalleries.filter(i => i.products_id == obj[0]);
        state.productAttrs = obj[1];
        state.related_products = obj[2];
        //console.log("coco :"+ state.related_products);
        state.isLoading = false;
    },
    upIsLoading(state, val){
      state.isLoading = val;
    },
    wishListAction(state, prod) {
          let exist = state.wishListItems.find(w => w.id == prod.id);
          if(!exist) {
            state.wishListItems.push(prod);
          } else { 
            state.wishListItems = state.wishListItems.filter(w => w.id != prod.id ); 
          } 
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};
