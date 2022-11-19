<template>
  <b-container class="component-wrapper" fluid>
    <b-row class="justify-content-center">
      <!-- Header Thumb Background -->
      <b-row>
        <b-img class="background-image" src="./../assets/images/backgrounds/header-thumb-background.png" fluid alt="Fluid image"/>
      </b-row>
      <!-- Center countdown group -->
      <b-row class="justify-content-center w-100">
        <div class="position-relative w-100">
          <div class="timer-box px-3">
            <!-- Greeting title -->
            <b-row class="title">
              <h2>{{$t('We’re Getting Ready')}}</h2>
            </b-row>
            <div class="break"></div>
              <!-- Countdown box -->
            <b-row class="countdown-box">
              <b-row class="countdown-time">
                <!-- Day -->
                <b-col>
                  <b-row><span class="number">{{days}}</span></b-row>
                  <b-row><span class="unit">{{$t('Days')}}</span></b-row>
                </b-col>
                <b-col cols="1"><span class="spacer">:</span></b-col>
                <!-- Hour -->
                <b-col>
                  <b-row><span class="number">{{hours}}</span></b-row>
                  <b-row><span class="unit">{{$t('Hours')}}</span></b-row>
                </b-col>
                <b-col cols="1"><span class="spacer">:</span></b-col>
                <!-- Minute -->
                <b-col>
                  <b-row><span class="number">{{minutes}}</span></b-row>
                  <b-row><span class="unit">{{$t('Minutes')}}</span></b-row>
                </b-col>
                <b-col cols="1"><span class="spacer">:</span></b-col>
                <!-- Second -->
                <b-col>
                  <b-row><span class="number">{{seconds}}</span></b-row>
                  <b-row><span class="unit">{{$t('Second')}}</span></b-row>
                </b-col>
              </b-row>
            </b-row>
            <div class="break"></div>
            <!-- Register email -->
            <b-row class="new-letter-container">
              <!-- Description -->
              <b-row>
                <p>{{$t('We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.')}}</p>
              </b-row>
              <!-- Form Input -->
              <b-row class="form-input">
                <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                  <b-form-input size="lg" :placeholder="$t('Enter your email')"></b-form-input>
                  <b-icon class="input-icon-arrow" icon="arrow-right" />
                </b-input-group>
              </b-row>
            </b-row>
            <div class="oval-opacity">
            </div>
          </div>
        </div>
      </b-row>
    </b-row>

    <!-- fairy image -->
    <b-row>
      <b-img class="fairy-image" src="./../assets/images/images/ongtien.png" fluid alt="Fluid image"/>
    </b-row>
  </b-container>
</template>
<script>
  export default {
    name: "HeaderThumbComponent",
    data() {
        return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      }
    },
    mounted() {
      // Date expired
      const expiredDate = new Date("2022-12-31T00:00:00.000Z");
      // Countdown
      setInterval(() => {
        const now = new Date();
        const time = expiredDate - now
        // Get day, hour, minute, second and convert to 2 digit
        this.days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        this.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        this.minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        this.seconds = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
      }, 1000);
    }
  }
</script>
<style scoped>
.break {
  flex-basis: 100%;
  height: 0;
}
.component-wrapper {
  margin-bottom: 5rem;
}
.background-image {
  min-height: 75vh;
  object-fit: cover;
  overflow: hidden;
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
.timer-box {
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
  z-index: 1;
}
.oval-opacity {
  top: 45%;
  width: 40%;
  height: 50%;
  min-width: 30rem;
  min-height: 16rem;
  position: absolute;
  background: radial-gradient(27.72% 27.79% at 50.81% 68.15%, #210544 0%, rgba(23, 5, 68, 0.71) 50.52%, rgba(23, 5, 68, 0) 100%);
  mix-blend-mode: normal;
  backdrop-filter: blur(5px);
  z-index: -1;
  border-radius: 50%;
}
.countdown-time {
  padding: 0 4vw;
  flex: 1;
  width: 100%;
  justify-content: center;
}
.number,
.unit,
.spacer {
  color: #000000;
  font-style: normal;
}
.number {
  font-family: 'Playfair Display';
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 4.5vw;
  justify-content: center;
  letter-spacing: 4.8px;
}
.unit {
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 1rem;
}
.spacer {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 6vw;
}
.title {
  margin-bottom: 1vw;
}
.title h2 {
  font-size: 5vw;
  font-family: 'Playfair Display';
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
}
.new-letter-container {
  width: 35%;
  justify-content: center;
}
.new-letter-container p {
  font-family: 'Montserrat';
  text-align: center;
  color: #FFFFFF;
  font-size: 18px;
}

.form-input {
  width: 100%;
}
.form-input input {
  height: 5vw;
}
.fairy-image {
  width: 100%;
  scale: 0.35;
  position: absolute;
  top: -15vw;
  left: -33vw;
}
.input-icon-arrow {
  position: absolute;
  top: 40%;
  right: 20px;
  color: #6c757d;
  scale: 1.5;
  z-index: 3;
}

/*Responsive css*/
@media only screen and (max-width: 992px) {
  .component-wrapper {
    margin-bottom: 0;
  }
  .timer-box {
    top: -55vh;
    left: 0;
  }
  .countdown-time {
    padding: 0;
  }
  .countdown-box {
    width: 100%;
  }
  .number {
    line-height: 3rem;
    font-size: 2rem;
  }
  .spacer {
    line-height: 4rem;
    font-size: 2rem;
  }
  .title h2 {
    font-size: 40px;
  }
  .new-letter-container {
    margin-top: 40px;
    width: 100%;
  }
  .new-letter-container p {
    text-align: center;
    font-size: 12px;
  }
  .form-input input {
    height: 4rem;
  }
  .fairy-image {
    position: static;
    margin-top: -10rem;
    margin-left: -5vw;
    min-height: 20rem;
    min-width: 30rem;
    scale: 0.6;
    z-index: 1;
  }
}
</style>
<style>
/*Deep css*/
.countdown-time .row {
  justify-content: center;
}
.new-letter-container .row {
  margin: 0;
}
.form-input input {
  border-radius: 8px !important;
}
@media only screen and (max-width: 992px) {
  .countdown-time .col,  .countdown-time .col-1{
    padding: 0 !important;
    flex-grow: 0.2;
  }
}
</style>
