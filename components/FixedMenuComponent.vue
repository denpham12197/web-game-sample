<!-- Please remove this file from your project -->
<template>
  <div>
    <b-navbar class="component-wrapper" :class="isExpanded?'expand-menu':''" toggleable="lg" type="dark" variant="faded" fixed="top">
      <b-navbar-brand href="#">
        <!-- No responsive logo-->
        <img class="logo" src="./../assets/images/logos/logo-3-eagle.png"/>

        <!-- Responsive button language-->
        <b-dropdown class="btn-language-responsive" no-caret>
          <template #button-content>
            <img src="./../assets/images/images/US.png"/>
            <b-icon scale="0.7" class="icon-drop-down" icon="caret-down-fill"></b-icon>
          </template>
          <!-- EN -->
          <b-dropdown-item>
            <img src="./../assets/images/images/US.png"/>
            <nuxt-link :to="switchLocalePath('en')">{{$t('English')}}</nuxt-link>
          </b-dropdown-item>
          <!-- VIE -->
          <b-dropdown-item>
            <img src="./../assets/images/images/vietnam.png"/>
            <nuxt-link :to="switchLocalePath('vie')">{{$t('Vietnamese')}}</nuxt-link>
          </b-dropdown-item>
        </b-dropdown>
      </b-navbar-brand>

      <!-- Button toggle right menu when responsive -->
      <b-navbar-toggle class="button-toggle"  target="nav-collapse" @click="isExpanded=!isExpanded">
          <b-icon v-if="isExpanded" scale="1.5" class="menu-icon icon-close" icon="x-lg"></b-icon>
          <b-icon v-else scale="2" class="menu-icon" icon="list"></b-icon>
      </b-navbar-toggle>

      <!-- Right nav items -->
      <b-collapse id="nav-collapse" class="right-menu" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Nav menu -->
          <b-navbar-nav>
            <b-nav-item class="mx-5 menu-item" href="#"><span>{{$t('ABOUT US')}}</span></b-nav-item>
            <b-nav-item class="mx-5 menu-item" href="#"><span>{{$t('GAMES')}}</span></b-nav-item>
            <b-nav-item class="mx-5 menu-item" href="#"><span>{{$t('PARTNERS')}}</span></b-nav-item>
            <b-nav-item class="mx-5 menu-item" href="#"><span>{{$t('CONTACT US')}}</span></b-nav-item>
          </b-navbar-nav>
          <!-- Select language -->
          <b-navbar-nav class="no-responsive-button">
            <img src="./../assets/images/images/US.png"/>
          </b-navbar-nav>
          <b-nav-item-dropdown
          class="no-responsive-button"
            right>
            <!-- EN -->
            <b-dropdown-item href="#">
              <img src="./../assets/images/images/US.png"/>
              <nuxt-link :to="switchLocalePath('en')">{{$t('English')}}</nuxt-link>
            </b-dropdown-item>
            <!-- VIE -->
            <b-dropdown-item href="#">
              <img src="./../assets/images/images/vietnam.png"/>
              <nuxt-link :to="switchLocalePath('vie')">{{$t('Vietnamese')}}</nuxt-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'FixedMenuComponent',
    data() {
      return {
        isExpanded: false
      }
    }
  }
</script>
<style scoped>
.component-wrapper {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) -25%, rgba(0, 0, 0, 0) 100%);
}
.logo {
  scale: 1;
}
.menu-item span {
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
}
.component-wrapper .button-toggle {
  border: none;
}
.icon-close {
  color: #000000 !important;
}
.component-wrapper .menu-icon {
  color: #FFFFFF;
}
.btn-language-responsive {
  display: none;
}
.btn-language-responsive .icon-drop-down {
  color: #000000;
  vertical-align: middle !important;
}

/*Responsive css*/
@media only screen and (max-width: 992px) {
  .menu-item span {
    color: #000000;
  }
  .no-responsive-button {
    display: none;
  }
  .expand-menu .logo {
    display: none;
  }
  .expand-menu .btn-language-responsive {
    display: inline-block;
  }
  .expand-menu {
    background: #FFFFFF;
  }
  .right-menu {
    text-align: center;
    height: 100vh;
  }
  .menu-item {
    border-bottom: solid 1px #EEEEEE;
    padding: 0.7rem 0;
  }
  .menu-item:last-child {
    border-bottom: none
  }
}
</style>
<style>
/*Deep css*/
.btn-language-responsive .btn-secondary {
  background: #F6F6F6 !important;
  border-radius: 8px;
  border: 1px solid #AFAFAF;
}
</style>
