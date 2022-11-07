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
            <span class="countdown-number mx-2">30</span>
            <span class="countdown-unit">Days</span>
          </b-col>
          <span class="countdown-spacer">:</span>
          <b-col>
            <span class="countdown-number mx-2">18</span>
            <span class="countdown-unit">Hours</span>
          </b-col>
          <span class="countdown-spacer">:</span>
          <b-col>
            <span class="countdown-number mx-2">20</span>
            <span class="countdown-unit">Minutes</span>
          </b-col>
          <span class="countdown-spacer">:</span>
          <b-col>
            <span class="countdown-number mx-2">11</span>
            <span class="countdown-unit">Seconds</span>
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
        <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group append="→" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input  id="inline-form-input-username" size="lg" placeholder="Enter your email"></b-form-input>
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
  max-width: 30vw;
  top: 19vw;
  left: 35vw;
}
.countdown-wrapper .getting-ready-text {
  justify-content: center;
}
.countdown-wrapper h2 {
  color: #fff;
  text-align: center;
}
.countdown-wrapper .countdown-box {
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  height: 10vw;
  width: 30vw;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}
.countdown-wrapper .countdown-time {
  padding: 30px;
}
.countdown-wrapper .countdown-number {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 900;
  font-size: 3vw;
  line-height: 64px;
  /* or 107% */
  
  text-align: center;
  letter-spacing: 4.8px;
  
  /* Neutral/Black */
  
  color: #000000;
}
.countdown-wrapper .countdown-unit {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1vw;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.651724px;

  /* Neutral/Black */

  color: #000000;
  justify-content: center;
}
.countdown-wrapper .countdown-spacer {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 3vw;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.651724px;
  color: #000000;
}
.countdown-wrapper .new-letter-description {
  justify-content: center;
}
.new-letter-description p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 126%;
  /* or 23px */

  text-align: center;

  /* Neutral/White */

  color: #FFFFFF;
  width: 85%;
}
</style>
