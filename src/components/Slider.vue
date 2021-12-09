<template>
    <div class="carrousel">
        <carousel
        :per-page="1" 
        :mouse-drag="false"
        :autoplay="true"
        :autoplayTimeout="2500">

            <slide class="slide">
                <img src="../assets/img/carrousel/img-2.jpg" alt="">
            </slide>
            <slide class="slide">
                <img src="../assets/img/carrousel/img-2.jpg" alt="">
            </slide>
            <slide class="slide">
                <img src="../assets/img/carrousel/img-2.jpg" alt="">
            </slide>

        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>

.carrousel {

    box-sizing: border-box;

    margin: .8rem 2.6rem;

    background-color: #fff;


    
}


.carrousel .slide img{

    width: 100%;
    height: 550px;
    overflow: hidden;
}




</style>
