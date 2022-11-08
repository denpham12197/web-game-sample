<template>
  <div class="header-thumb-wrapper">
    <b-img class="background-image" src="./../assets/images/backgrounds/header-thumb-background.png" fluid alt="Fluid image"></b-img>
    <b-img class="fairy-image" src="./../assets/images/images/ongtien.png" fluid alt="Fluid image"></b-img>
    <b-container class="countdown-wrapper">
      <b-row class="getting-ready-text">
        <h2>We’re Getting Ready</h2>
      </b-row>
      <b-row class="countdown-box">
        <b-row class="countdown-time">
          <b-col>
            <b-row><span class="countdown-number">30</span></b-row>
            <b-row><span class="countdown-unit">Days</span></b-row>
          </b-col>
          <b-col><span class="countdown-spacer">:</span></b-col>

          <b-col>
            <b-row><span class="countdown-number">18</span></b-row>
            <b-row><span class="countdown-unit">Hours</span></b-row>
          </b-col>
          <b-col><span class="countdown-spacer">:</span></b-col>

          <b-col>
            <b-row><span class="countdown-number">20</span></b-row>
            <b-row><span class="countdown-unit">Minutes</span></b-row>
          </b-col>
          <b-col><span class="countdown-spacer">:</span></b-col>

          <b-col>
            <b-row><span class="countdown-number">11</span></b-row>
            <b-row><span class="countdown-unit">Seconds</span></b-row>
          </b-col>
        </b-row>
      </b-row>
      <b-row class="new-letter-description">
        <p>
          We will back to something amazing. 
          Getting the latest updates about our games. 
          Please sign up to our newsletter.
        </p>
      </b-row>
      <b-row class="new-letter-input">
        <b-input-group append="→" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input  size="lg" placeholder="Enter your email"></b-form-input>
        </b-input-group>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    name: "HeaderThumbComponent",
  }
</script>
<style>
.header-thumb-wrapper {
  position: relative;
  width: 100vw;
  height: 55vw;
}
.header-thumb-wrapper .background-image {
  position: absolute;
}
.header-thumb-wrapper .fairy-image {
  position: absolute;
  width: 100%;
  scale: 0.5;
  top: -28vw;
  left: -25vw;
}
.header-thumb-wrapper .countdown-wrapper {
  position: absolute;
  max-width: 45vw;
  top: 17vw;
  left: 35vw;
}
.countdown-wrapper .getting-ready-text {
  justify-content: center;
}
.countdown-wrapper h2 {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 900;
  font-size: 4vw;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 0.6px;

  /* Neutral/White */

  color: #FFFFFF;

}
.countdown-wrapper .countdown-box {
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  height: 10vw;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 4vw;
}
.countdown-wrapper .countdown-time {
  padding: 0 4vw;
  flex: 1;
  width: 100%;
}
.countdown-time .row {
  justify-content: center;
}
.countdown-wrapper .countdown-number {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 900;
  font-size: 3vw;
  line-height: 4.5vw;
  justify-content: center;
  letter-spacing: 4.8px;
  color: #000000;
}
.countdown-wrapper .countdown-unit {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  color: #000000;
}
.countdown-wrapper .countdown-spacer {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 3vw;
  line-height: 4.5vw;
  text-align: center;
  color: #000000;
}
.countdown-wrapper .new-letter-description {
  justify-content: center;
  width: 100%;
}
.countdown-wrapper .new-letter-description p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #FFFFFF;
  width: 85%;
}
.countdown-wrapper .new-letter-input {
  width: 100%;
  justify-content: center;
}
.new-letter-input .input-group {
  max-width: 85%;
}
@media only screen and (max-width: 992px) {
  .fairy-image {
    position: static !important;
    margin-left: 10vw;
    margin-top: 5vw;
  }
}
</style>
