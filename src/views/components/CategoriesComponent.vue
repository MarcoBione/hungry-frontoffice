<template>
    <section id="categories-home" class="container-fluid ">
        <div class="row flex-md-row justify-content-md-evenly flex-column align-items-center">
            <div class="col-12 mb-4">
                <h1>Di cosa hai voglia?</h1>
            </div>
            <CategoryCard v-for="(category, index) in (categories.slice(0, maxElements))" :category="category" :key="index"
                v-if="!error" />
            <div class="" v-if="error">{{ error }}</div>
        </div>
        <div v-if="categories.length >= maxElements" class="d-flex flex-column my-5">
            <button @click="showMoreElements()" class="_button text-uppercase">{{ !showMore ?
                'mostra altro' :
                'mostra meno'
            }}</button>
        </div>
    </section>
</template>

<script>

import CategoryCard from '../components/CategoryCard.vue';
import axios from 'axios';
export default {
    name: 'CategoriesComponent',
    components: {
        CategoryCard
    },
    data() {
        return {
            categories: [],
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null,
            error: '',
            maxElements: 6,
            showMore: false,
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
                    });
                } else {
                    this.error = res.data.results;
                }

            });

        },
        showMoreElements() {
            if (!this.showMore) {
                this.showMore = true;
            } else {
                this.showMore = false;
            }

            if (this.showMore) {
                this.maxElements = 9;
            } else {
                this.maxElements = 6;
            }
        },
    },
    mounted() {
        this.getData();
    }


}
</script>

<style lang="scss" scoped>
#categories-home {
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;


    }


}
</style>