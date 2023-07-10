<template>
    <div class="accordion" :id="'accordion' + tipology.tipologies.replace(' ', '')">
        <div class="accordion-item">
            <div class="accordion-header">
                <h2 class="text-center text-white text-capitalize">{{ tipology.tipologies }}</h2>
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapseOne' + tipology.tipologies.replace(' ', '')" aria-expanded="true"
                    :aria-controls="'#collapseOne' + tipology.tipologies.replace(' ', '')">
                </button>
            </div>
            <div :id="'collapseOne' + tipology.tipologies.replace(' ', '')" class="accordion-collapse collapse show"
                :data-bs-parent="'#accordion' + tipology.tipologies.replace(' ', '')">
                <div class="accordion-body d-flex flex-column justify-content-center align-items-center gap-5">
                    <div v-for="(dish, index) in tipology.dishes"
                        class="accordion_card d-flex flex-column flex-md-row text-center text-md-start align-items-center justify-content-between p-4 ps-5 pe-5">
                        <div class="info mt-3">
                            <h3 class="text-capitalize fs-3 mb-3">{{ dish.name }}</h3>
                            <p>{{ dish.description }}</p>
                            <p>{{ dish.price }} €</p>
                        </div>
                        <div class="img-container ">
                            <img class="rounded-5 overflow-hidden" :src="'http://127.0.0.1:8000/storage/' + dish.image"
                                :alt="dish.name">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AccordionComponent',
    props: ['tipology'],

    data() {
        return {

        }
    },

}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;

.accordion-header {
    background-color: $carbon;
    position: relative;
    padding: 5px;
}

.accordion {
    --bs-accordion-border-width: 0;
    --bs-accordion-btn-focus-box-shadow: none;
}

.accordion-button {
    background-color: $carbon;
    width: 20px;
    color: white;
    margin: 0 auto;
    text-align: right !important;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 18px;
}

.accordion-button::after {
    color: white !important;
    background-image: url(https://cdn.onlinewebfonts.com/svg/img_68483.png);
    background-position: center;
    filter: invert(100%);
}

.accordion-item {
    background-color: rgba(197, 199, 189, 0.428);
}

.accordion_card {
    border-radius: 40px;
    width: 75%;
    background-color: rgba(197, 199, 189, 0.428);
    position: relative;
    color: black;

    .info {
        inline-size: 150px;
        margin: 10px;
    }

    .img-container {
        width: 160px;
        height: 130px;


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}


@media screen and (min-width: 425px) {
    .accordion_card {
        border-radius: 40px;
        width: 75%;
        background-color: rgba(197, 199, 189, 0.428);
        position: relative;
        color: black;

        .info {
            inline-size: 260px;
            margin: 10px;
        }

        .img-container {
            width: 160px;
            height: 130px;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}



@media (min-width: $viewport-xl) {

    .accordion_card {
        border-radius: 40px;
        width: 75%;
        background-color: rgba(197, 199, 189, 0.428);
        position: relative;
        color: black;

        .info {
            inline-size: 600px;
            margin: 10px;
        }

        .img-container {
            width: 160px;
            height: 130px;


            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

}
</style>