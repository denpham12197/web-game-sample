<template>
    <b-container id="contact-us" fluid class="component-wrapper">
        <!-- Main footer -->
        <b-row class="main-footer-container" align-h="center">
            <!-- Logos group -->
            <b-col class="footer-col" xl="4" lg="12">
                <div class="logo-container">
                    <div class="logo">
                        <img src="./../assets/images/logos/footer-logo.png"/>
                    </div>
                    <div class="logo-group">
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
            <!-- Address -->
            <b-col xl="4" class="footer-col" lg="12">
                <b-col cols="12" md="10" class="mx-auto">
                    <b-row>
                        <h2>{{$t('Address')}}</h2>
                    </b-row>
                    <b-row class="mt-5">
                        <b-col class="icon" cols="2" lg="3">
                            <img src="./../assets/images/icons/location.png"/>
                        </b-col>
                        <b-col cols="10" lg="9">
                            <b-row>
                                <p>{{$t('Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US')}}</p>
                            </b-row>
                            <b-row>
                                <p>{{$t('20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam')}}</p>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="icon" cols="2" lg="3">
                            <img src="./../assets/images/icons/mobile.png"/>
                        </b-col>
                        <b-col cols="10" lg="9">
                            <b-row class="description">
                                <p>{{$t('(+1) 555-0108-000 or (+236) 555-0108')}}</p>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-col>
            <!-- Subscribe -->
            <b-col xl="4" class="footer-col" lg="12">
                <b-col col class="mx-auto" cols="12" md="10">
                    <b-row class="w-100">
                        <h2>{{$t('Subscribe')}}</h2>
                    </b-row>
                    <b-row class="mt-5 w-100">
                        <b-row class="w-100 ml-3">
                            <p>{{$t('Subscribe to our newsletter and be the first to know about our updates')}}</p>
                        </b-row>
                        <b-row class="w-100 ml-3">
                            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                                <b-form-input size="lg" :placeholder="$t('Enter your email')" class="form-input" />
                                <b-icon class="input-icon-arrow" icon="arrow-right" />
                            </b-input-group>
                        </b-row>
                    </b-row>
                </b-col>
                
            </b-col>
        </b-row>
        <!-- Copy right -->
        <b-row class="copy-right">
            <p>{{$t('2017 Copyright. Policy.')}}</p>
        </b-row>
    </b-container>
</template>
<script>
    export default {
        name: "FooterComponent"
    }
</script>
<style scoped>
.component-wrapper {
    padding: 0;
}
.main-footer-container {
    background-image: url('./../assets/images/backgrounds/footer-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 0;
    padding-bottom: 3rem;
}
.copy-right {
    justify-content: center;
    background: #000000;
}
.copy-right p {
    padding: 1vw 0;
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
}
.main-footer-container .footer-col {
    margin-top: 100px;
}
.component-wrapper h2,
.component-wrapper p,
.copy-right p {
    color: #FFFFFF;
}
.component-wrapper h2{margin-left: 15px;}
.component-wrapper .info-subscribe {
    margin-left: 15px;
    width: 100%;
}
.form-input {
    width: 100%;
    background: transparent;
}
.form-input::placeholder {
    color: #FFFFFF;
}
.logo-container {
    margin: auto;
}
.logo-container,
.logo-container .logo {
    display: block;
    max-width: fit-content;
    margin-bottom: 10px;
}
.logo-container .logo-group {
    display: flex;
}
.logo-group div {
    flex-grow: 1;
    text-align: center;
}
.input-icon-arrow {
    position: absolute;
    top: 40%;
    right: 20px;
    color: #FFFFFF;
    scale: 1.5;
    z-index: 3;
  }
  .form-input {
    border-radius: 8px !important;
}
/*Responsive css*/
@media only screen and (max-width: 992px) {
    .copy-right {
        padding: 2rem 0;
    }
}
</style>
