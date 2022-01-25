<template>
  <div class="card text-center m-3">
    <div class="card-footer pb-0 pt-3">
      <JwPagination
        :pageSize="3"
        :items="products"
        @changePage="onChangePage"
      ></JwPagination>
    </div>
  </div>
</template>

<script>
// an example array of items to be paged
 import { mapGetters } from "vuex";
 import { mapActions } from "vuex";
 import JwPagination from 'jw-vue-pagination';


const exampleItems = [...Array(40).keys()].map((i) => ({
  id: i + 1,
  name: "Item " + (i + 1),
}));

export default {
  name: 'jwPagination',
  components: { JwPagination },
  data() {
    return {
      pageOfItems: [],
    };
  },
  computed: mapGetters(["products"])
  ,
  methods: {
    ...mapActions(["filterByPage"])
    ,
    onChangePage(pageOfItems) {
      console.log(pageOfItems);
      // update page of items
      this.pageOfItems = pageOfItems;
      filterByPage(this.pageOfItems);
    },
  },
};
</script>