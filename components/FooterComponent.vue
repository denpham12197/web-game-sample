<template>
    <b-container fluid class="footer-wrapper">
        <b-row class="info-summary" align-h="center">
            <b-col class="info-item" xl="4" lg="12">
                <div class="contact-wrapper">
                    <div class="logo">
                        <img src="./../assets/images/logos/footer-logo.png"/>
                    </div>
                    <div class="contact-types">
                        <div>
                            <img src="./../assets/images/logos/logo-twitter.png"/>
                        </div>
                        <div>
                            <img src="./../assets/images/logos/logo-facebook.png"/>
                        </div>
                        <div>
                            <img src="./../assets/images/logos/logo-instagram.png"/>
                        </div>
                    </div>

                </div>
            </b-col>
            <b-col xl="4" class="info-item address-wrapper" lg="12">
                <b-col cols="12" md="10" class="mx-auto">
                    <b-row>
                        <h2>Address</h2>
                    </b-row>
                    <b-row class="info-detail">
                        <b-col class="icon" cols="2" lg="3">
                            <img src="./../assets/images/icons/location.png"/>
                        </b-col>
                        <b-col class="content" cols="10" lg="9">
                            <b-row>
                                <p>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</p>
                            </b-row>
                            <b-row>
                                <p>20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</p>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="icon" cols="2" lg="3">
                            <img src="./../assets/images/icons/mobile.png"/>
                        </b-col>
                        <b-col class="content" cols="10" lg="9">
                            <b-row class="description">
                                <p>(+1) 555-0108-000 or (+236) 555-0108</p>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-col>
            <b-col xl="4" class="info-item" lg="12">
                <b-col col class="subcribe-wrapper mx-auto" cols="12" md="10">
                    <b-row class="w-100">
                        <h2>Subcribe</h2>
                    </b-row>
                    <b-row class="info-detail w-100">
                        <b-row class="info-subscribe">
                            <p>Subscribe to our newsletter and be the first to know about our updates</p>
                        </b-row>
                        <b-row class="info-subscribe">
                            <b-form-input size="lg" placeholder="Enter your email" class="input-subscribe" />
                        </b-row>
                    </b-row>
                </b-col>
                
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
    background-size: cover;
    width: 100%;
    margin: 0;
    padding-bottom: 3rem;
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
    flex-basis: auto;
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
.contact-wrapper {
    margin: auto;
}
.contact-wrapper, .contact-wrapper .logo {
    display: block;
    max-width: fit-content;
}
.contact-wrapper .contact-types {
    display: flex;
}
.contact-types div {
    flex-grow: 1;
    text-align: center;
}
@media only screen and (max-width: 992px) {
    .footer-wrapper .info-summary {
        background-size: cover
    }
    .info-summary .network-wrapper .logo-network {
        flex-basis: content !important;
    }
    .copy-right {
        padding: 2rem 0;
    }
}
</style>
