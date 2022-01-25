<template>
	<div>
	<carousel :per-page="3" :navigate-to="0" :mouse-drag="false">
       <slide v-for="i in 12" :key="i">
       	 <img src="/assets/products/1544063712.jpg" class="img-fluid" alt="">
       </slide>
  </carousel>
</div>
</template>

<script>
   import { Carousel, Slide } from 'vue-carousel';
	export default {
	 name: 'relatedProducts',
	 components: {
       Carousel, Slide
     }
	};
</script>

<style>
.carousel {
	margin: 50px auto;
	padding: 0 70px;
}
  .carousel-item {
	min-height: 330px;
	text-align: center;
	overflow: hidden;
}
.img-box {
	height: 160px;
	width: 100%;
	position: relative;
}
.thumb-wrapper {
	text-align: center;
}
.thumb-content {
	padding: 15px;
}
.item-price {
	font-size: 13px;
	padding: 2px 0;
}
.item-price strike {
	color: #999;
	margin-right: 5px;
}
.item-price span {
	color: #86bd57;
	font-size: 110%;
}	
.star-rating li {
	padding: 0;
}
.star-rating i {
	font-size: 14px;
	color: #ffc000;
}
</style>