<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
import RestaurantList from '../pages/RestaurantList.vue';
import HomePage from '../pages/HomePage.vue';

export default {
    components: { HomePage, RestaurantList }
}
</script>

<style lang="scss" scoped></style>