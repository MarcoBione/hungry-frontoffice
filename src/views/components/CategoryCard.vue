<template>
    <div class="col-12 col-md-4 p-0 d-flex justify-content-center mb-4" @click="cardClick(category.id)">
        <router-link :to="{ name: 'restaurantlist'}">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="category.image" :alt="category.name"
                            style="width:100%;height:100%;border-radius: 30px;object-fit: cover;">
                    </div>
                    <div class="flip-card-back d-flex justify-content-center align-items-center">
                        <h1>{{ category.name }}</h1>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import {store} from '../../store';
export default {
    name: 'CategoryCard',
    data (){
        return{
            store
        }
    },
    props: ['category'],
    methods: {
        cardClick(id){
            this.store.selectedCategories.push(id);
        }
    }
}
</script>

<style lang="scss" scoped>
.flip-card {
    width: 300px;
    height: 200px;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
    border-radius: 30px;
}


/* Style the back side */
.flip-card-back {
    background-color: rgba(197, 199, 189, 0.428);
    color: white;
    transform: rotateY(180deg);
    border-radius: 30px;
}
</style>