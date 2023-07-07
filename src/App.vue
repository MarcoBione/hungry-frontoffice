<template>
  <div class="_mybody">
    <div class="_wrapper">

      <div class="_contain container">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>

    </div>
  </div>
</template>

<script>
import HeaderComponent from './views/components/HeaderComponent.vue';
import MainComponent from './views/components/MainComponent.vue';
import FooterComponent from './views/components/FooterComponent.vue';
import RestaurantCard from './views/components/RestaurantCard.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    RestaurantCard
  },

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
//import del font da parte di google fonts
</style>