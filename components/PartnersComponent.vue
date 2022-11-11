<template>
    <b-container fluid class="our-partner-wrapper">
        <b-row class="title">
            <h2>{{$t('Our Partners')}}</h2>
        </b-row>
        <div class="carousel-image">
            <div class="position-relative">
                <div class="carousel-scroller">
                    <div class="image">
                        <b-img src="./../assets/images/logos/eagames.png"/>
                    </div>
                    <div class="image">
                        <b-img src="./../assets/images/logos/game.png"/>
                    </div>
                    <div class="image">
                        <b-img src="./../assets/images/logos/first-power-up.png"/>
                    </div>
                    <div class="image">
                        <b-img src="./../assets/images/logos/walt-disney.png"/>
                    </div>
                    <div class="image">
                        <b-img src="./../assets/images/logos/book-pro.png"/>
                    </div>
                </div>
            </div>
            <span class="icon-slide btn-slide-left">
                <div class="position-relative">
                    <b-icon class="btn-icon" icon="chevron-left" aria-hidden="true"/>
                </div>
            </span>
            <span class="icon-slide btn-slide-right">
                <div class="position-relative">
                    <b-icon class="btn-icon" icon="chevron-right" aria-hidden="true"/>
                </div>
            </span>
        </div>
    </b-container>
</template>
<script>
    export default {
        name: "ListPartnersComponent"
    }
</script>
<style>
.carousel-image {
    position: relative;
    max-width: 100%;
}
.carousel-scroller {
    scroll-snap-type: x mandatory;
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    max-width: 80%;
    margin: auto;
}
.image {
    scroll-snap-align: center;
    flex: 1;
}
.btn-icon {
    position: absolute;
    top: 25%;
    left: 20%;
}
.our-partner-wrapper {
    padding: 5rem 0;
    background: #F6F6F6;
    margin-top: 5rem;
}
.btn-slide-left {
    left: 5rem;
}
.btn-slide-right {
    right: 5rem;
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
    position: absolute;
    top: 45%;
    transform: translateY(-45%);
    height: 30px;
    width: 30px;
    background-color: #FFFFFF;
    border-radius: 5px;
}
.icon-slide div {
    width: 100%;
    height: 100%;
}
.our-partner-wrapper .button-previous {
    text-align: right;
}
.our-partner-wrapper .button-next {
    text-align: start;
}
.our-partner-wrapper .logo-slider {
    display: flex;
    overflow: hidden;
}
.logo-slider .slider {
    flex-wrap: nowrap;
}
@media only screen and (max-width: 992px) {
    .carousel-scroller {
        max-width: 95%
    }
    .btn-slide-left {
        left: 1.5rem;
    }
    .btn-slide-right {
        right: 1.5rem;
    }
}
</style>
