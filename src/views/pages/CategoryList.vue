<template>
    <LoaderApp v-if="loading" />
    <section id="categories-home" class="container-fluid" v-if="!loading">
        <div class="row flex-md-row justify-content-md-evenly flex-column align-items-center">
            <div class="col-12 mb-5">
                <h1>Tutte le categorie disponibili</h1>
            </div>
            <CategoryCard class="mt-5" v-for="(category, index) in categories" :category="category" :key="index"
                v-if="!error" />
            <div class="" v-if="error">{{ error }}</div>
        </div>
    </section>
</template>

<script>

import CategoryCard from '../components/CategoryCard.vue';
import axios from 'axios';
import LoaderApp from '../components/LoaderApp.vue';
export default {
    name: 'CategoryList',
    components: {
        CategoryCard,
        LoaderApp
    },
    data() {
        return {
            categories: [],
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null,
            error: '',
            loading: true
        }

    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiBaseUrl}/categories/`, {
                params: {
                    "page": numPage,
                }
            }).then((res) => {
                if (res.data.success) {
                    this.categories = res.data.results;
                    console.log(this.categories);
                    this.currentPage = res.data.results.current_page;
                    this.lastPage = res.data.results.last_page;
                    this.categories.forEach((category) => {
                        category.image = 'http://127.0.0.1:8000/storage/' + category.image;
                    })
                } else {
                    this.error = res.data.results;
                }

            });

        }
    },
    mounted() {
        this.getData();
        setTimeout(() => {
                this.loading = false;
            }, 2000);
    }


}
</script>

<style lang="scss" scoped>
#categories-home {

    margin: 60px 0;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;


    }
}
</style>