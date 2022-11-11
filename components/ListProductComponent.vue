<template>
    <b-container fluid class="products-wrapper">
        <b-container class="products-header">
            <b-row class="title justify-content-center">
                <h2>{{$t('Our Games')}}</h2>
            </b-row>
            <b-row class="description justify-content-center">
                <b-col lg="8" md="12">
                    <p>
                        {{$t('As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.')}}
                    </p>
                 </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="products-container">
            <b-row align-content="start">
                <b-col v-for="(game, index) in data" :key="index" class="game-item-wrapper" lg="3" cols="6">
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
<style>
.products-wrapper {
    margin-top: 10vw;
    padding: 0 3vw;
}
.products-header .title h2 {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    font-size: 4rem;
    line-height: 60px;
}
.products-header .description p {
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

.products-container .game-item {
    border-radius: 20px;
}
.image-game {
    position: absolute;
}
.game-intro-text {
    position: absolute;
    bottom: 0;
    max-width: 20rem;
}
.game-item-wrapper {
    padding: 1vw;
}
.game-item-wrapper:nth-child(2n) {
    margin-top: 5rem;
}

.game-intro-text h2 {
    font-size: 3vw;
}
.game-intro-text p {
    font-size: 14px;
}


@media only screen and (max-width: 992px) {
    .products-wrapper {
        padding: 0 5vw;
    }
    .game-item-wrapper {
        padding: 2vw;
    }
    .game-intro-text h2 {
        font-size: 3vw;
    }
    .game-intro-text p {
        font-size: 12px;
    }
    .game-item-wrapper:nth-child(2n) {
        margin-top: 2rem;
    }
}
</style>
