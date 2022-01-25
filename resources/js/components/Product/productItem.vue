<template>
<div class="col-sm-6 col-md-4 item" :class="{'list-group-item': false}">
  <div class="thumbnail card">
    <div class="img-event intrinsic">
      <div :class="{'heart-line': this.wishListItems.find(w => w.id == this.prod.id), 'heart1': true }" id="heart" @click="addToWishList($event)"></div>
      <img :src="image" alt="" class="grow thumbnail-image card-img-top intrinsic-item p-3">
    </div>
    <div class="card-body">
      <!--
      <router-link :to="/product/" tag="h5" class="card-title">To product</router-link> -->
      <h6 class="card-subtitle mb-2 remain">40 left in stock</h6>
       <h6 class="card-subtitle mb-2 remain" style="color:green">{{ short }} ...</h6>
      <p class="card-text truncate">{{ prod.p_name }}</p>

      <div class="row">
        <p class="col-6 lead">${{ prod.price }}</p>
        <p class="col-6">
      <button @click="loadProdDetails(prod.id)" style="font-size: 10px;"  class="btn btn-success pull-right" :disabled="false">          View Product 
          </button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
 import Router from 'vue-router'
 import VueRouter from 'vue-router'
 import { mapGetters } from "vuex";
 import { mapActions } from 'vuex';

export default {
  name: 'productItem',
  props: ['prod', 'item', 'displayList'],
  data() {
      return {
        short: this.prod.description.substring(0, 20),
        image: "/assets/products/medium/"+this.prod.image
      }
  },
   computed: { ...mapGetters(["wishListItems"]) }
   ,
    methods: {
     loadProdDetails(id) {
         this.upIsLoading(true);
        //return new Promise(r => setTimeout(r, 1000));
         this.$router.push("/product-details/"+id);
         this.prodDetails(id);
      } ,
     ...mapActions(['prodDetails', 'upIsLoading' , 'wishListAction']),
      addToWishList(event){
        var heart = event.target;
        if(!this.onWish){
            heart.classList.add("heart-line");
            this.wishListAction(this.prod);
        } else {
            heart.classList.remove("heart-line");
            this.wishListAction(this.prod);
        } 
     }
  }

  /*
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
    }
  },
  filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      } else {
        return value;
      }
    }
  }
  */
};
</script>

<style scoped>
div.card {
  height: 100%;
}

.card-text {
  font-size: 0.875rem;
}

.remain {
  color: #d17581;
}

.grow {
  transition: all .2s ease-in-out;
}
 .img-event{
  transition: all .2s ease-in-out;
 }

.img-event:hover {
  transform: scale(1.1);
}
.grow:hover > .heart1 {
    transform: scale(1.3);
  }
 .thumbnail-image {
    position: static;
  }

  .card-body {
    float: left;
    width: 80%;
    margin: 0;
   }
 /*
.list-group-item {
  float: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 1rem;
  border: 0;
  .thumbnail {
    display: inline-block;
    width: 100%;
  }
  .img-event {
    width: 20%;
    float: left;
    padding: 0 !important;
    margin: 0;
    height: auto;
  }
    */
  @media (max-width: 767.98px) {
    .img-event {
      width: 30%;
      float: left;
      padding: 0 !important;
      margin: 0;
    }

    .card-body {
      float: left;
      width: 70%;
      margin: 0;
    }
  }


.heart1 {
  width: 130px;
  height: 130px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url(/assets/wishList/heart.png) no-repeat;
  background-position: 0 0;
  z-index: 2;
  cursor: pointer;
}
.heart-line {
  background-position: -3628px 0;
  transition: background 1s steps(28);
}
.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item:after {
  clear: both;
}
</style>
