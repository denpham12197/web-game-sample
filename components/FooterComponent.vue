<template>
    <b-container fluid class="footer-wrapper">
        <b-row class="info-summary" align-h="center">
            <b-col class="info-item" cols="3">
                <b-col cols="8">
                    <b-row>
                        <img src="./../assets/images/logos/footer-logo.png"/>
                    </b-row>
                    <b-row class="network-wrapper">
                        <b-col cols="3" class="logo-network">
                            <img src="./../assets/images/logos/logo-twitter.png"/>
                        </b-col>
                        <b-col cols="3" class="logo-network">
                            <img src="./../assets/images/logos/logo-facebook.png"/>
                        </b-col>
                        <b-col cols="3" class="logo-network">
                            <img src="./../assets/images/logos/logo-instagram.png"/>
                        </b-col>
                    </b-row>
                </b-col>
            </b-col>
            <b-col cols="3" class="info-item">
                <b-row>
                    <h2>Address</h2>
                </b-row>
                <b-row class="info-detail">
                    <b-col class="icon" sm="2">
                        <img src="./../assets/images/icons/location.png"/>
                    </b-col>
                    <b-col class="content" sm="10">
                        <b-row>
                            <p>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</p>
                        </b-row>
                        <b-row>
                            <p>20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</p>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="icon" sm="2">
                        <img src="./../assets/images/icons/mobile.png"/>
                    </b-col>
                    <b-col class="content" sm="10">
                        <b-row class="description">
                            <p>(+1) 555-0108-000 or (+236) 555-0108</p>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="3" class="info-item">
                <b-row>
                    <h2>Subcribe</h2>
                </b-row>
                <b-row class="info-detail">
                    <b-row class="info-subscribe">
                        <p>Subscribe to our newsletter and be the first to know about our updates</p>
                    </b-row>
                    <b-row class="info-subscribe">
                        <b-form-input size="lg" placeholder="Enter your email" class="input-subscribe" />
                    </b-row>
                </b-row>
                
            </b-col>
        </b-row>
        <b-row class="copy-right">
            <p>2017 Copyright. Policy.</p>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: "FooterComponent"
    }
</script>
<style>
.footer-wrapper {
    padding: 0;
}
.footer-wrapper .info-summary {
    background-image: url('./../assets/images/backgrounds/footer-background.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 23vw;
    margin: 0;
}
.footer-wrapper .copy-right {
    justify-content: center;
    background: #000000;
}
.footer-wrapper .copy-right p {
    padding: 1vw 0;
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 126%;
    /* identical to box height, or 23px */

    text-align: center;

    /* Neutral/White */

    color: #FFFFFF;
}
.info-summary .info-item {
    margin-top: 100px;
}
.info-summary .network-wrapper {
    margin-top: 30px;
}
.info-summary .network-wrapper .logo-network {
    padding: 0;
}
.footer-wrapper h2, .footer-wrapper p {
    color: #FFFFFF;
}
.footer-wrapper h2{margin-left: 15px;}
.info-item .info-detail {
    margin-top: 20px;
}
.footer-wrapper .info-subscribe {
    margin-left: 15px;
    width: 100%;
}
.footer-wrapper .input-subscribe {
    width: 100%;
    background: transparent;
}
.footer-wrapper .input-subscribe::placeholder {
    color: #FFFFFF;
}
</style>