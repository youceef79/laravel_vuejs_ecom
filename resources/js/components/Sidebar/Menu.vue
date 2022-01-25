<template>
	<div class="card">
	<article class="card-group-item">
		<header style="color:blue;" class="card-header"><h3> Categories </h3></header>
		<div class="filter-content">
			<div v-for="cat in categories" class="trans list-group list-group-flush list-group-item">
			  <a style="font-size:20px;color:lightgreen;cursor:pointer" @click="filterByCat(cat)"> {{ cat.name }} 
			  </a>        <!-- 'active': (sub.parent_id == cat.id)  -->
			  <transition name="slide-fade">
               <div v-for="sub in subCategories" 
                  class="subcat" 
                  :class="{'active': (sub.parent_id == cat.id) , 'ml-4': true}"> 
			   <a style="font-size:15px;cursor:pointer" @click="filterByCat(sub)"> {{ sub.name }} </a>  
			  </div>
			  </transition> 
			  <span class="badge badge-light round"
		      @click="subCat(cat)" style="font-size:15px">+</span> 
			</div>  <!-- list-group .// -->
		</div>
	</article> <!-- card-group-item.// -->
	<!--
	<article class="card-group-item">
		<header class="card-header"><h6 class="title">Color check</h6></header>
		<div class="filter-content">
			<div class="card-body">
				<label class="btn btn-danger">
				  <input class="" type="checkbox" name="myradio" value="">
				  <span class="form-check-label">Red</span>
				</label>
				<label class="btn btn-success">
				  <input class="" type="checkbox" name="myradio" value="">
				  <span class="form-check-label">Green</span>
				</label>
				<label class="btn btn-primary">
				  <input class="" type="checkbox" name="myradio" value="">
				  <span class="form-check-label">Blue</span>
				</label>
			</div>    card-body.//
		</div>
	</article> card-group-item. 
   -->
</div> <!-- card.// -->
</template>


<script>
    import { mapGetters } from "vuex";
    import { mapActions } from "vuex";

 export default {
     name: "Menu",
      methods: {
        ...mapActions(["filterByCat" , "subCat"])  
        },
      computed: mapGetters(["categories","subCategories"])  
    };

</script>

<style>
 @import url(http://fonts.googleapis.com/css?family=Calibri:400,300,700);
span {
  	 cursor: pointer;
  	 position: absolute;
  	 right: 2px;
  	 top: 15px;
  }

  .subcat {
  	visibility: hidden;
  	display: none;
  	height: 0;
    }

   .active {
  	visibility: visible;
  	display: block;
  	height: auto;
  	/*
  	-webkit-animation: fadeIn 2s ease;
    animation: fadeIn 2s ease; */
  }


  article {
     font-family: 'Calibri', sans-serif !important;
     font-weight: 10;
   }

   @-webkit-keyframes fadeIn {
    from {  height: 0; }
      to {  height: auto; }
   }

   @keyframes fadeIn {
      from {  height: 0; }
      to {  height: auto; }
   }
     .slide-fade-enter-active {
         transition: all 2s ease;
   }

   .slide-fade-enter, .slide-fade-leave-to
   {
        animation: fadeIn 2s ease linear;
        opacity: 1;
    }

</style>