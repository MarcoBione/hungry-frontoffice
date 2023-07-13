<template>
    <footer class="_myborder d-flex py-3 justify-content-center justify-content-center justify-content-md-end justify-content-lg-evenly justify-content-xl-center fs-4 mt-4">

        <div class="">
            <!-- logo sx -->
            <div class="_mypos d-none d-md-block">
                <img class="_mylogo" src="/images/Logo.png" alt="Hungry-logo">
            </div>
        </div>

        <div class="_indexlist">
            <!-- sezione sx -->
            <div class="_mylist d-flex align-items-center align-items-sm-start text-center justify-content-center px-3 w-100">
                <!-- lista sx -->
                <ul class="m-0 p-1">

                    <!-- tab title -->
                    <li class="list-unstyled m-0 fw-bold">
                        Servizio clienti
                    </li>

                    <!-- Lista di links -->
                    <li class="list-unstyled m-0">
                        <a href="http://127.0.0.1:8000/login">Accedi</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="http://127.0.0.1:8000/register">Registrati</a>
                    </li>
                </ul>
                <!-- lista dx -->
                <ul class="m-0 p-1">

                    <!-- tab title -->
                    <li class="list-unstyled m-0 fw-bold">
                        Chi siamo
                    </li>

                    <li class="list-unstyled m-0">
                        <a href="https://www.iubenda.com/it/generatore-termini-e-condizioni?utm_source=google&utm_medium=tc_page&utm_campaign=it_tc_new_search&utm_term=termini%20e%20condizioni&utm_content=661143094202&gclid=Cj0KCQjwnrmlBhDHARIsADJ5b_nNdhI7q47jzBZoaUPgAGpv4nTUMbB0PmGMZK7ECw5pod4xZDt55PoaAiFTEALw_wcB" target="_blank">Termini e condizioni</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="https://www.iubenda.com/it/generatore-di-privacy-e-cookie-policy?utm_content=pcp-product-page" target="_blank">Informativa sulla privacy</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="https://www.iubenda.com/it/generatore-di-privacy-e-cookie-policy?utm_content=pcp-product-page" target="_blank">Cookie Policy</a>
                    </li>
                </ul>

            </div>
        </div>

    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;

// dimensione logo
._mylogo {
    width: 470px;
}

//posizione lista sopra il logo, index 1000
._indexlist {
    z-index: 1000;
}

//lista links
._mypos {
    position: absolute;
    bottom: -160px;
    left: -180px;
}

footer {
    position: relative;
}

//rimozione dello stile di default per i links + hover
a {
    text-decoration: none;
    color: $carbon;
}

a:hover {
    transition: color 0.3s;
    color: $orange;
}

//bordo superiore
._myborder {
    border-top: 3px solid $carbon;
}
</style>