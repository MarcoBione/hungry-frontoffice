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

<style lang="scss" scoped>
._mybody {
  width: 100%;
  height: 100vh;
  background-image: url(/images/backgroundImagevertical.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;

  ._wrapper {
    width: 100%;
    padding: 10px;
    backdrop-filter: blur(1.5rem);
    overflow: hidden;

    ._contain {
      background-color: rgba(197, 199, 189, 0.428);
      padding: 30px 30px;
      border-radius: 20px;
      overflow: hidden;
    }
  }
}
</style>