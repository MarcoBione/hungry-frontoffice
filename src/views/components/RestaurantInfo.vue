<template>
    <div class="container mb-4">
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div id="restaurant_name">
                    <h1 class="text-center text-white">Nome ristorante</h1>
                </div>
            </div>
            <div class="col-12 text-center mt-4">
                <button class="infobtn text-uppercase fs-4 mb-3 mb-md-0">Info</button>
            </div>
            <div class="row d-flex justify-content-evenly">
                <div class="col-12 col-md-7 d-flex flex-column justify-content-center ms-md-5 mt-md-5 text-center text-md-start"
                    id="info">
                    <p>Via caccapupù 19, Palermo, 90123</p>
                    <p>Costo consegna 0,50€</p>
                    <p>Ordine minimo 10€</p>
                    <p><i class="fa-solid fa-phone"></i> +39 327669033</p>
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center">
                    <div class="card text-white text-center d-flex flex-column justify-content-center h-75">
                        <h3>Orari</h3>
                        <div class="row">
                            <div class="col-6">
                                <p>pranzo</p>
                                <p>10:00 - 14:00</p>
                            </div>
                            <div class="col-6">
                                <p>cena</p>
                                <p>17:00 - 23:00</p>
                            </div>
                            <div class="col-12 mt-3">
                                <p class="text-uppercase">l m m g v s d</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center mt-4">
                    <button class="menubtn text-uppercase fs-4 mb-3 mb-md-0">Menù</button>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;

#restaurant_name {
    background-color: $carbon;
    border-radius: 10px 10px 10px 10px;
}

#info {
    p {
        font-size: 25px;
    }
}

.card {
    background-color: rgba(197, 199, 189, 0.428);
    border-radius: 40px;
    min-height: 225px;

    p {
        margin-bottom: 0;
        font-size: 22px;
    }

    width: 350px;
}

.infobtn {
    margin: 0 auto;
    width: 150px;
    text-align: center;
    font-weight: 600;
    background-color: rgba(197, 199, 189, 0.428);
    padding: 5px 0;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border: 0;
    text-decoration: none;
    box-shadow: 0px 5px $orange;
    cursor: default;
}

.menubtn {
    margin: 0 auto;
    width: 150px;
    text-align: center;
    font-weight: 600;
    background-color: rgba(197, 199, 189, 0.428);
    padding: 5px 0;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    border: 0;
    text-decoration: none;
    box-shadow: 0px 5px $orange;
    outline: 0;
    cursor: default;
}
</style>