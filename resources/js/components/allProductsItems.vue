<template>
   <div class="row">     
                  <div class="col-md-3">
                      <Menu style="margin-top: 30px;" /> 
                  </div>
                    <div class="card-body col-md-9" 
                    style="display: flex;flex-wrap:wrap">
                      <div v-if="products.length>0" style="display: flex;flex-wrap:wrap;" class="col-md-12">
                      <productItem v-for="p in products" :key="p.id" :prod="p" />
                      </div>
                      <div v-else>
                         <p> No Products with these mentions </p>
                      </div>
                    </div>   
  </div>  
</template>

<script>
  import { mapGetters } from "vuex";
  import productItem from './productItem.vue'
  import Menu from './Sidebar/Menu.vue'
  import jwPagination from './pagination/jwPagination.vue'
    export default {
       name: 'allproductsItems',
       props: ["msg"],
       components: {
           productItem, Menu, jwPagination
       },
       computed: mapGetters(["products"])
    };
</script>
<style>
</style>