<template>
<div class="mb-5">
  <b-container fluid>
    <b-row class="justify-center">
      <!-- Header Thumb Background -->
      <b-row>
        <b-img class="header-background" src="./../assets/images/backgrounds/header-thumb-background.png" fluid alt="Fluid image"/>
      </b-row>
      <!-- Center countdown group -->
      <b-row class="row-center-panel">
        <div class="relative-wrapper">
          <b-container class="center-panel">
              <!-- Greeting title -->
              <b-row class="greeting-title">
                <h2>{{$t('We’re Getting Ready')}}</h2>
              </b-row>
              <div class="break"></div>
              <!-- Countdown box -->
              <b-row class="countdown-box">
                <b-row class="countdown-time">
                  <!-- Day -->
                  <b-col>
                    <b-row><span class="countdown-number">30</span></b-row>
                    <b-row><span class="countdown-unit">{{$t('Days')}}</span></b-row>
                  </b-col>
                  <b-col cols="1"><span class="countdown-spacer">:</span></b-col>
                  <!-- Hour -->
                  <b-col>
                    <b-row><span class="countdown-number">18</span></b-row>
                    <b-row><span class="countdown-unit">{{$t('Hours')}}</span></b-row>
                  </b-col>
                  <b-col cols="1"><span class="countdown-spacer">:</span></b-col>
                  <!-- Minute -->
                  <b-col>
                    <b-row><span class="countdown-number">20</span></b-row>
                    <b-row><span class="countdown-unit">{{$t('Minutes')}}</span></b-row>
                  </b-col>
                  <b-col cols="1"><span class="countdown-spacer">:</span></b-col>
                  <!-- Second -->
                  <b-col>
                    <b-row><span class="countdown-number">11</span></b-row>
                    <b-row><span class="countdown-unit">{{$t('Second')}}</span></b-row>
                  </b-col>
                </b-row>
              </b-row>
              <div class="break"></div>
              <!-- Register email -->
              <b-row class="new-letter">
                <b-row>
                  <p>{{$t('We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.')}}</p>
                </b-row>
                <b-row class="new-letter-input">
                  <b-input-group append="→" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-form-input  size="lg" :placeholder="$t('Enter your email')"></b-form-input>
                  </b-input-group>
                </b-row>

              </b-row>
          </b-container>
        </div>
      </b-row>
    </b-row>

    <!-- Fairy image -->
    <b-row class="fairy-row">
      <b-img class="fairy" src="./../assets/images/images/ongtien.png" fluid alt="Fluid image"/>
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
.break {
  flex-basis: 100%;
  height: 0;
}
.justify-center {
  justify-content: center;
}
.header-background {
  min-height: 40rem;
  object-fit: cover;
  overflow: hidden;
}
.relative-wrapper {
  position: relative;
  width: 100%;
}
.row-center-panel {
  justify-content: center;
  width: 100%;
}
.countdown-box {
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  height: 8rem;
  width: 50%;
  min-width: 20rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4vw;
  text-align: center;
}
.center-panel {
  /*display: flex;
  justify-content: center;*/
  position: absolute;
  max-width: 100%;
  top: -43vw;
  left: 10vw;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  min-width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.countdown-time {
  padding: 0 4vw;
  flex: 1;
  width: 100%;
  justify-content: center;
}
.countdown-time .row {
  justify-content: center;
}
.countdown-number,
.countdown-unit,
.countdown-spacer {
  color: #000000;
  font-style: normal;
}
.countdown-number {
  font-family: 'Playfair Display';
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 4.5vw;
  justify-content: center;
  letter-spacing: 4.8px;
}
.countdown-unit {
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1rem;
}
.countdown-spacer {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 4vw;
}
.greeting-title {
  margin-bottom: 1vw;
}
.greeting-title h2 {
  font-size: 5vw;
  font-family: 'Playfair Display';
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
}
.new-letter {
  width: 35%;
}
.new-letter p {
  font-family: 'Montserrat';
  text-align: center;
  color: #FFFFFF;
  font-size: 1.5vw;
}
.new-letter .row {
  margin: 0;
}
.new-letter-input {
  width: 100%;
}
.new-letter-input input {
  height: 5vw;
}
.fairy {
  width: 100%;
  scale: 0.5;
  position: absolute;
  top: -25vw;
  left: -25vw;
}

/*Responsive css*/
@media only screen and (max-width: 992px) {
  .center-panel {
    top: -35rem;
    left: 0;
  }
  .countdown-time {
    padding: 0;
  }
  .countdown-time .col,  .countdown-time .col-1{
    padding: 0 !important;
    flex-grow: 0.2;
  }
  .countdown-box {
    width: 80%;
  }
  .countdown-number {
    line-height: 3rem;
    font-size: 2rem;
  }
  .countdown-spacer {
    line-height: 2.5rem;
  }
  .greeting-title h2 {
    font-size: 3rem;
  }
  .new-letter {
    width: 80%;
  }
  .new-letter p {
    font-size: 1.1rem;
  }
  .new-letter-input input {
    height: 4rem;
  }
  .fairy {
    position: static;
    margin-top: -15rem;
    margin-left: 10vw;
    margin-right: 10vw;
    min-height: 20rem;
    min-width: 30rem;
    scale: 0.75
  }
}
</style>
