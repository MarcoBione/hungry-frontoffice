<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <div class="accordion-header">
                <h2 class="text-center text-white text-capitalize">{{ tipology.tipologies }}</h2>
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                </button>
            </div>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body d-flex justify-content-center">
                    <div
                        class="accordion_card d-flex flex-column flex-md-row text-center text-md-start align-items-center justify-content-between p-4 ps-5 pe-5">
                        <div class="info">
                            <h3 class="text-capitalize">Nome piatto</h3>
                            <p>Descrizione</p>
                            <p>Prezzo</p>
                        </div>
                        <div class="img-container">
                            <img src="/images/Categories/categoryPizza.png" alt="">
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

    .img-container {
        width: 150px;

        img {
            width: 100%;
        }
    }
}
</style>