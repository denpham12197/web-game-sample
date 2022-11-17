<template>
    <b-container id="games" fluid class="component-wrapper">
        <!-- Product summary -->
        <b-container class="product-summary">
            <!-- Title -->
            <b-row class="title justify-content-center">
                <h2>{{$t('Our Games')}}</h2>
            </b-row>
            <!-- Description -->
            <b-row class="description justify-content-center">
                <b-col lg="8" md="12">
                    <p>
                        {{$t('As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.')}}
                    </p>
                 </b-col>
            </b-row>
        </b-container>
        <!-- List product -->
        <b-container fluid class="products-container">
            <b-row align-content="start">
                <b-col v-for="(game, index) in data" :key="index" class="product-box" lg="3" cols="6">
                    <ProductComponent
                    :src=game.src
                    :title=game.title
                    :description=game.description
                />
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>
<script>
import data from '~/static/list-product.json'
export default {
    name: "ListProductComponent",
    data() {
        return {
            data
        }
    }
}
</script>
<style scoped>
.component-wrapper {
    margin-top: 10vw;
    padding: 0 3vw;
}
.product-summary .title h2 {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    font-size: 4rem;
    line-height: 60px;
}
.product-summary .description p {
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #757575;
}
.products-container {
    margin-top: 7vw;
}
.product-box {
    padding: 1vw;
}
.product-box:nth-child(2n+1) {
    margin-top: -5rem;
}
/*Responsive css*/
@media only screen and (max-width: 992px) {
    .component-wrapper {
        padding: 0 5vw;
    }
    .products-container {
        margin-top: 15vw;
    }
    .product-box {
        padding: 2vw;
    }
    .product-box:nth-child(2n+1) {
        margin-top: -2rem;
    }
    .product-summary .title h2 {
        font-size: 3rem;
    }
}
</style>
