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
            <img v-if="$i18n.locale === 'en'" src="./../assets/images/images/US.png"/>
            <img v-else src="./../assets/images/images/vietnam.png"/>
            <b-icon scale="0.7" class="icon-drop-down" icon="caret-down-fill"></b-icon>
          </template>
          <!-- EN -->
          <b-dropdown-item>
            <nuxt-link :to="switchLocalePath('en')" class="text-decoration-none">
              <b-row class="align-items-center">
                <b-col cols="2" >
                  <b-icon v-show="$i18n.locale === 'en'" scale="1.5" icon="check2"/>
                </b-col>
                <b-col cols="8">
                  <img src="./../assets/images/images/US.png" class="mr-2"/>
                  <span>{{$t('English')}}</span>
                </b-col>
              </b-row>
            </nuxt-link>
          </b-dropdown-item>
          <!-- VIE -->
          <b-dropdown-item>
            <nuxt-link :to="switchLocalePath('vie')" class="text-decoration-none">
              <b-row class="align-items-center">
                <b-col cols="2" >
                  <b-icon v-show="$i18n.locale === 'vie'" scale="1.5" icon="check2"/>
                </b-col>
                <b-col cols="8">
                  <img src="./../assets/images/images/vietnam.png" class="mr-2"/>
                  <span>{{$t('Vietnamese')}}</span>
                </b-col>
              </b-row>
            </nuxt-link>
          </b-dropdown-item>
        </b-dropdown>
      </b-navbar-brand>

      <!-- Button toggle right menu when responsive -->
      <b-navbar-toggle class="button-toggle"  target="nav-collapse" @click="expandMenu()">
            <b-icon v-show="isExpanded" scale="1.5" class="menu-icon icon-close" icon="x-lg"/>
            <b-icon v-show="!isExpanded" scale="2" class="menu-icon" icon="list"/>
      </b-navbar-toggle>

      <!-- Right nav items -->
      <b-collapse id="nav-collapse" class="right-menu" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Nav menu -->
          <b-navbar-nav class="w-100 right-menu-container">
            <b-nav-item class="menu-item" @click="scrollToAnchor('about-us')"><span>{{$t('ABOUT US')}}</span></b-nav-item>
            <b-nav-item class="menu-item" @click="scrollToAnchor('games')"><span>{{$t('GAMES')}}</span></b-nav-item>
            <b-nav-item class="menu-item" @click="scrollToAnchor('partners')"><span>{{$t('PARTNERS')}}</span></b-nav-item>
            <b-nav-item class="menu-item" @click="scrollToAnchor('contact-us')"><span>{{$t('CONTACT US')}}</span></b-nav-item>
          </b-navbar-nav>
          <!-- Select language -->
          <b-navbar-nav class="no-responsive-button">
            <img v-if="$i18n.locale === 'en'" src="./../assets/images/images/US.png"/>
            <img v-else src="./../assets/images/images/vietnam.png"/>
          </b-navbar-nav>
          <b-nav-item-dropdown
          class="no-responsive-button"
            right>
            <!-- EN -->
            <b-dropdown-item href="#">
              <nuxt-link :to="switchLocalePath('en')" class="text-decoration-none">
                <b-row class="align-items-center">
                  <b-col cols="2" >
                    <b-icon v-show="$i18n.locale === 'en'" scale="1.5" icon="check2"/>
                  </b-col>
                  <b-col cols="8">
                    <img src="./../assets/images/images/US.png" class="mr-2"/>
                    <span>{{$t('English')}}</span>
                  </b-col>
                </b-row>
              </nuxt-link>
            </b-dropdown-item>
            <!-- VIE -->
            <b-dropdown-item href="#">
              <nuxt-link :to="switchLocalePath('vie')" class="text-decoration-none">
                <b-row class="align-items-center">
                  <b-col cols="2">
                    <b-icon v-show="$i18n.locale === 'vie'" scale="1.5" icon="check2"/>
                  </b-col>
                  <b-col cols="8">
                    <img src="./../assets/images/images/vietnam.png" class="mr-2"/>
                    <span>{{$t('Vietnamese')}}</span>
                  </b-col>
                </b-row>
              </nuxt-link>
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
    },
    methods: {
      scrollToAnchor(anchor) {
        const y = document.getElementById(anchor).getBoundingClientRect().top + window.scrollY - 80;
        window.scroll({
          top: y,
          behavior: 'smooth'
        });
        if (this.isExpanded){
          this.isExpanded = !this.isExpanded
        }
      },
      expandMenu() {
        this.isExpanded = !this.isExpanded
      }
    },
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
.text-decoration-none {
  font-size: 14px;
  font-family: 'Montserrat';
  font-weight: 700;
  color: #000000;
}
.right-menu-container {
  justify-content: space-between;
  margin-right: 3vw;
  gap: 3rem;
}

/*Responsive css*/
@media only screen and (max-width: 992px) {
  .logo {
    scale: 0.7;
  }
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
  .right-menu-container {
    gap: 0;
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
.no-responsive-button .dropdown-menu,
.btn-language-responsive .dropdown-menu {
  min-width: 12rem;
}
.no-responsive-button .dropdown-menu .dropdown-item,
.btn-language-responsive .dropdown-menu .dropdown-item {
  padding: 0.25rem 0.7rem;
}
</style>
