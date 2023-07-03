<template>
  <div class="wrapper container">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './views/components/HeaderComponent.vue';
import MainComponent from './views/components/MainComponent.vue';
import FooterComponent from './views/components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>