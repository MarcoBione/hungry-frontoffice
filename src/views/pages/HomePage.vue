<template>
    <section id="jumbo" class="container-fluid debug">
        <div class="row flex-column">
            <div class="col-12 debug">
                <h1>are you Hungry?</h1>
            </div>
            <div class="col-12 img-box debug">
                <img class="burger-img" src="/public/images/callToActionHamburger.png" alt="">
                <img class="coca-img" src="/public/images/callToActionCocaCola.png" alt="">
            </div>
        </div>
    </section>
    <section id="categories-home" class="container-fluid debug">

    </section>
    <section id="caterers-home" class="container-fluid debug">
        <h1>ciao</h1>
    </section>
    <section id="contact-us" class="container-fluid debug">
        <h1>ciao</h1>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#jumbo {
    h1 {
        inline-size: 150px;
        overflow-wrap: break-word;
    }

    img {
        width: 200px;
    }

    .img-box {
        height: 250px;

        .burger-img {
            position: absolute;
            right: 50px;
            top: 0;
        }

        .coca-img {
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    #categories-home {}
}</style>