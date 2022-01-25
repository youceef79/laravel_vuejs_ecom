<template>
   <div class="row">     
                  <div class="col-md-3">
                      <Menu style="margin-top: 30px;" /> 
                  </div>
                    <div class="card-body col-md-9" 
                    style="display: flex;flex-wrap:wrap">
                      <div v-if="pageOfItems.length>0" style="display: flex;flex-wrap:wrap;" class="col-md-12">
                      <productItem v-for="p in pageOfItems" :key="p.id" :prod="p" />    
                     </div>
                      <div v-else>
                         <p> No Products with these mentions </p>
                      </div> 
                   <div v-if="products.length>0" class="col-12">
                      <div class="card text-center m-3">
                      <div class="card-footer pb-0 pt-3">
                      <jw-pagination
                      :pageSize="5"
                      :items="products"
                      @changePage="onChangePage"
                      ></jw-pagination>
                      </div>
                      </div>
                   </div>     
  </div>
  </div>  
</template>

<script>
  import { mapGetters } from "vuex";
  import { mapActions } from "vuex";
  import productItem from './productItem.vue'
  import Menu from '../Sidebar/Menu.vue'
  //import jwPagination from '../pagination/jwPagination.vue'
  import JwPagination from 'jw-vue-pagination';


    export default {
       name: 'allproductsItems',
       computed:  mapGetters(["products"]),
       props: ["msg"],
       data() {
       return {
        pageOfItems: []
       }
       },
       components: {
           productItem, Menu, JwPagination
       }
       //computed: mapGetters(["products"])
       ,methods: {
      ...mapActions(["filterByPage"])
        ,
      onChangePage(pageOfItems) {
      console.log(pageOfItems);
      // update page of items
      this.pageOfItems = pageOfItems;
        //this.filterByPage(pageOfItems);
        },
      }
    };
</script>
<style>
</style>