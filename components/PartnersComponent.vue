<template>
    <b-container fluid class="component-wrapper">
        <b-row class="title">
            <h2 id="partners">{{$t('Our Partners')}}</h2>
        </b-row>
        <div class="carousel-image-container">
            <div class="carousel-wrapper">
                <VueSlickCarousel v-bind="slickOptions">
                    <div v-for="(image, index) in listPartnersImg" :key="index">
                        <b-img class="carousel-img" :src="require(`~/assets/images/logos/${image}`)"/>
                    </div>
                </VueSlickCarousel>
              </div>
        </div>
    </b-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: "ListPartnersComponent",
    components: { VueSlickCarousel },
    data() {
      return {
        slickOptions: {
            slidesToShow: 5,
            centerMode: true,
            slidesToScroll: 1,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        centerMode: true,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        
                    }
                },
        ]},
        listPartnersImg: [
            'eagames.png',
            'game.png',
            'first-power-up.png',
            'walt-disney.png',
            'book-pro.png'
        ]
      }
    }
}
</script>
<style scoped>
.carousel-image-container {
    position: relative;
    max-width: 100%;
}
.component-wrapper {
    padding: 5rem 0;
    background: #F6F6F6;
    margin-top: 5rem;
}
.component-wrapper .title {
    justify-content: center;
    margin-bottom: 30px;
}
.title h2 {
    font-size: 60px;
}
/*Responsive css*/
@media only screen and (max-width: 992px) {
    .title h2 {
        font-size: 3rem;
    }
    .carousel-img {
        margin: auto;
        scale: 1;
    }
}
</style>
<style>
.slick-arrow {
    position: absolute;
    scale: 1.5;
    opacity: 1;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    z-index: 1;
}
.slick-prev {
    left: 7vw;
}
.slick-next {
    right: 7vw;
}
</style>
