<template>
  <div class="web-game-wrapper">
    <FixedMenuComponent />
    <HeaderThumbComponent />
    <AboutUsComponent/>
    <ListProductComponent/>
    <PartnersComponent/>
    <FooterComponent />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
.web-game-wrapper {
  overflow: hidden;
  min-width: 390px;
}
</style>
