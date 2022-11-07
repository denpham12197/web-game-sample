<template>
    <b-container fluid class="our-partner-wrapper">
        <b-row class="title">
            <h2>Our Partners</h2>
        </b-row>
        <b-row class="mx-5 justify-content-md-center logo-slider-wrapper">
            <b-col class="button-previous" align-self="center" cols="1">
                <b-button class="button-slide"><b-icon class="icon-slide" icon="chevron-left" aria-hidden="true"></b-icon></b-button>
            </b-col>
            <b-col class="logo-slider" cols="9">
                <b-img src="./../assets/images/logos/eagames.png"/>
                <b-img src="./../assets/images/logos/game.png"/>
                <b-img src="./../assets/images/logos/first-power-up.png"/>
                <b-img src="./../assets/images/logos/walt-disney.png"/>
                <b-img src="./../assets/images/logos/book-pro.png"/>
            </b-col>
            <b-col class="button-next" align-self="center" cols="1">
                <b-button class="button-slide"><b-icon class="icon-slide" icon="chevron-right" aria-hidden="true"></b-icon></b-button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: "ListPartnersComponent"
    }
</script>
<style>
.our-partner-wrapper {
    padding: 5rem 0;
    background: #F6F6F6;
    margin-top: 5rem;
}
.our-partner-wrapper .title {
    justify-content: center;
}
.our-partner-wrapper .button-slide {
    background-color: #FFFFFF;
    border: none;
    border-radius: 5px;
}
.our-partner-wrapper .icon-slide {
    color: #c5c5c5;
}
.our-partner-wrapper .button-previous {
    text-align: end;
}
.our-partner-wrapper .button-next {
    text-align: start;
}
.our-partner-wrapper .logo-slider {
    display: flex;
    overflow: hidden;
}
</style>