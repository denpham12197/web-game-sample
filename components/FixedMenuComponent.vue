<!-- Please remove this file from your project -->
<template>
  <div>
    <b-navbar class="fixed-menu" toggleable="lg" type="dark" variant="faded" fixed="top">
      <b-navbar-brand href="#">
        <img class="logo" src="./../assets/images/logos/logo-3-eagle.png"/>
      </b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item class="mx-5" href="#">ABOUT US</b-nav-item>
            <b-nav-item class="mx-5" href="#">GAMES</b-nav-item>
            <b-nav-item class="mx-5" href="#">PARTNERS</b-nav-item>
            <b-nav-item class="mx-5" href="#">CONTACT US</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <img src="./../assets/images/images/US.png"/>
          </b-navbar-nav>
          <b-nav-item-dropdown
            right>
            <b-dropdown-item href="#">
              <img src="./../assets/images/images/US.png"/>
              EN
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <img src="./../assets/images/images/vietnam.png"/>
              VIE
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
}
</script>
<style>
.fixed-menu {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) -25%, rgba(0, 0, 0, 0) 100%);
}
.fixed-menu .logo {
  scale: 1;
}
</style>
