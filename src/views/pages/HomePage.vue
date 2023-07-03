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
            <a href="" class="_button text-uppercase my-5">ordina ora</a>
        </div>
    </section>
    <section id="categories-home" class="container-fluid debug">
        <div class="row flex-column align-items-center">
            <div class="col-12 debug">
                <h1>Di cosa hai voglia?</h1>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="my-card debug">
                    <img src="/public/images/Categories/categoryPizza.png" alt="">
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="my-card debug">
                    <img src="/public/images/Categories/categoryPizza.png" alt="">
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="my-card debug">
                    <img src="/public/images/Categories/categoryPizza.png" alt="">
                </div>
            </div>
        </div>
        <div class="d-flex flex-column my-5">
            <a href="" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>
    <section id="trending-home" class="container-fluid debug">
        <div class="row flex-column align-items-center">
            <div class="col-12 debug">
                <h1>I più ricercati oggi</h1>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="my-card debug">
                    <div class="image-card debug">
                        <img src="/public/images/collabora.jpg" alt="">
                    </div>
                    <div class="text-card debug">
                        <h2>nome ristorante</h2>
                        <p>Via per la piazza, 19</p>
                        <span>Consegna a domicilio con spedizione gratuita a partire da 10 €</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column my-5">
            <a href="" class="_button text-uppercase">mostra altro</a>
        </div>
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
        font-size: 2rem;
        font-weight: 700;
    }

    img {
        width: 200px;
    }

    .img-box {
        height: 200px;

        .burger-img {
            position: absolute;
            right: 30px;
            top: 0;
            width: 200px;
        }

        .coca-img {
            position: absolute;
            right: 0;
            top: 75px;
            width: 150px;
        }
    }
}

#categories-home {
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    .my-card {
        width: 200px;
        height: 150px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;

        }
    }
}

#trending-home {
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    .my-card {
        height: 300px;
        border-radius: 30px;
        overflow: hidden;

        .image-card {
            height: 100px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        h2 {
            text-align: center;
            background-color: #282727;
            color: white;
        }

        /* .text-card {
        } */
    }
}
</style>