<template>
    <b-container class="about-us-wrapper">
        <b-row class="detail-about-us my-5">
            <b-col class="left-box">
                <b-row class="title mb-3">
                    <h2>About Us</h2>
                </b-row>
                <b-row class="description mb-5">
                    <p>
                    Browse our selection of free online games and have a great time without leaving the site! 
                    Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. 
                    We have exclusive free downloads, videos, and articles as well. 
                    Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. 
                    Explore a whole new world of gaming on Etech.
                    </p>
                </b-row>
                <b-row class="count mb-5">
                    <b-row class="block-line">
                        <h2>
                            <span>600</span>
                            <span class="small-character">M</span>
                            <span>+</span>
                        </h2>
                    </b-row>
                    <b-row class="block-line">
                        <span class="count-unit">User</span>
                    </b-row>
                </b-row>
                <b-row class="count mb-5">
                    <b-row class="block-line">
                        <h2>135+</h2>
                    </b-row>
                    <b-row class="block-line">
                        <span class="count-unit">Games</span>
                    </b-row>
                </b-row>
            </b-col>
            <b-col class="right-box">
                <b-row>
                    <b-col class="icon" sm="2">
                        <b-avatar src="./../assets/images/icons/calendar.png"></b-avatar>
                    </b-col>
                    <b-col class="content" sm="10">
                        <b-row class="title">
                            <h3>24 - Hour</h3>
                        </b-row>
                        <b-row class="description">
                            <p>24/7 access ensures operators' businesses runs smoothly all year long.</p>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="icon" sm="2">
                        <b-avatar src="./../assets/images/icons/icon-design.png"></b-avatar>
                    </b-col>
                    <b-col class="content" sm="10">
                        <b-row class="title">
                            <h3>Design</h3>
                        </b-row>
                        <b-row class="description">
                            <p>Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.</p>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="icon" sm="2">
                        <b-avatar src="./../assets/images/icons/icon-team.png"></b-avatar>
                    </b-col>
                    <b-col class="content" sm="10">
                        <b-row class="title">
                            <h3>Team</h3>
                        </b-row>
                        <b-row class="description">
                            <p>Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games. </p>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row >
            <div class="witch-image-wrapper">
                <img class="witch-image" src="./../assets/images/images/witch.png" />
                <img class="pin-map-image" src="./../assets/images/images/pin-map.png"/>
            </div>
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
.about-us-wrapper .left-box .title h2 {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 60px;
    /* or 100% */
    
    letter-spacing: 3.6px;
    
    /* Neutral/Black */
    
    color: #000000;
}
.about-us-wrapper .left-box .description p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    /* or 20px */


    /* Neutral/N500 */

    color: #757575;

}
.about-us-wrapper .left-box .count {
    margin-left: 10px;
}
.about-us-wrapper .left-box .count h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 30px;
    letter-spacing: -1px;
    color: #079BEE;
    margin-bottom: 0px;
}
.left-box .count .small-character {
    font-size: 40px;
}
.left-box .count .block-line {
    width: 100%;
    margin-top: 10px;
    height: 45px;
}
.left-box .count .count-unit {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
}
.about-us-wrapper .right-box {
    background: #EEEEEE;
    padding: 80px 30px;
}
.about-us-wrapper .witch-image-wrapper {
    position: relative;
    width: 100%;
    height: 40vw;
}
.witch-image-wrapper .witch-image {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 18vw;
}
.witch-image-wrapper .pin-map-image {
    position: absolute;
    top: 20vw;
}
</style>