<template>
    <!-- JUMBO -->

    <JumboComponent />

    <!-- JUMBO -->


    <!-- CATEGORIES -->

    <CategoriesComponent />

    <!-- CATEGORIES -->


    <!-- TRENDING -->

    <TrendingComponent />

    <!-- TRENDING -->



    <!-- CONTACT US -->

    <ContactComponent v-if="false" />

    <!-- CONTACT US -->
</template>

<script>
import JumboComponent from '../components/JumboComponent.vue';
import CategoriesComponent from '../components/CategoriesComponent.vue';
import TrendingComponent from '../components/TrendingComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';


export default {
    name: 'HomePage',
    components: {
        JumboComponent,
        CategoriesComponent,
        TrendingComponent,
        ContactComponent
    },
}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;
</style>