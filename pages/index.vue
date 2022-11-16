<template>
  <client-only>
    <div class="web-game-wrapper">
      <GotoTopBtnComponent/>
      <FixedMenuComponent />
      <HeaderThumbComponent />
      <AboutUsComponent/>
      <ListProductComponent/>
      <PartnersComponent/>
      <FooterComponent />
    </div>
  </client-only>
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
  scroll-behavior: smooth;
}
</style>
