<template>
    <b-container class="about-us-wrapper">
        <b-row class="detail-about-us mb-5">
            <b-col class="left-box" cols="12" lg="6">
                <b-row class="title mb-3">
                    <h2>{{$t('About Us')}}</h2>
                </b-row>
                <b-row class="description mb-5">
                    <p>
                        {{$t('Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.')}}
                    </p>
                </b-row>
                <b-row class="statistic" cols="2">
                    <b-col cols="6" sm="12">
                        <b-row>
                            <h2 >
                                <span>600</span>
                                <sub>M</sub>
                                <span>+</span>
                            </h2>
                        </b-row>
                        <b-row>
                            <span class="count-unit">{{$t('Users')}}</span>
                        </b-row>
                    </b-col>
                    <b-col cols="6" sm="12">
                        <b-row>
                            <h2>135+</h2>
                        </b-row>
                        <b-row>
                            <span class="count-unit">{{$t('Games')}}</span>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col class="right-box" cols="12" lg="6">
                <b-row>
                    <b-col cols="3" sm="2">
                        <b-avatar variant="info" icon="calendar2-day-fill" class="right-box-icon mr-3"></b-avatar>
                    </b-col>
                    <b-col class="content" scale="2" cols="9" sm="10">
                        <b-row class="title">
                            <h3>{{$t('24 - Hour')}}</h3>
                        </b-row>
                        <b-row class="description">
                            <p>{{$t("24/7 access ensures operators' businesses runs smoothly all year long.")}}</p>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3" sm="2">
                        <b-avatar variant="info" icon="stack" class="right-box-icon mr-3"></b-avatar>
                    </b-col>
                    <b-col class="content" cols="9" sm="10">
                        <b-row class="title">
                            <h3>{{$t('Design')}}</h3>
                        </b-row>
                        <b-row class="description">
                            <p>{{$t('Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.')}}</p>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="icon" cols="3" sm="2">
                        <b-avatar variant="info" icon="people-fill" class="right-box-icon mr-3"></b-avatar>
                    </b-col>
                    <b-col class="content" cols="9" sm="10">
                        <b-row class="title">
                            <h3>{{$t('Team')}}</h3>
                        </b-row>
                        <b-row class="description">
                            <p>{{$t('Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.')}}</p>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="w-100 witch-image-wrapper" no-gutters>
            <b-row class="w-100">
                <img class="w-100 witch-image" src="./../assets/images/images/witch.png" />
            </b-row>
            <b-row class="w-100">
                <img class="w-100 pin-map-image " src="./../assets/images/images/pin-map.png"/>
            </b-row>
        </b-row>
    </b-container>
</template>
<script>
export default {
    "name": "AboutUsComponent"
}
</script>
<style>
.about-us-wrapper .left-box {
    padding: 0px 30px;
}
.left-box .title h2 {
    font-family: 'Playfair Display';
    font-weight: 900;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 3.6px;
    color: #000000;
}
.left-box .statistic h2 {
    font-family: 'Montserrat';
    font-weight: 700;
    color: #079BEE;
    font-size: 4vw;
}
.left-box .description p,
.right-box .description p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #757575;
}
.right-box-icon {
    color: #000000;
}
.count-unit {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
}
.about-us-wrapper .right-box {
    background: #EEEEEE;
    padding: 80px 30px;
}
.witch-image-wrapper {
    justify-content: center;
    margin-top: -10vw;
}
.witch-image {
    scale: 0.5;
    min-width: 25rem;
    min-height: 20rem;
}
.pin-map-image {
    min-width: 25rem;
    min-height: 8rem;
    margin-top: -20vw;
}
.statistic sub {
    font-size: 50%;
}

@media only screen and (max-width: 992px) {
    .left-box {
        margin-bottom: 5rem;
    }
    .left-box .statistic h2 {
        font-size: 3rem;
    }
    .pin-map-image {
        margin-top: -25vw;
    }
    .witch-image-wrapper {
        margin-top: -15vw;
    }
}
</style>
