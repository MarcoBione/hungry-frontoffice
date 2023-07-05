<template>
    <!-- JUMBO -->

    <section id="jumbo" class="container-fluid flex-md-row my-5 ">
        <div class="row flex-column flex-md-row ">
            <div class="col-12 ">
                <h1>Are you <span>Hungry?</span></h1>
            </div>
            <div class="col-12 img-box ">
                <img class="burger-img" src="/images/callToActionHamburger.png" alt="">
                <img class="coca-img" src="/images/callToActionCocaCola.png" alt="">
            </div>
            <div class="col-12 d-flex d-md-flex">
                <a href="" class="_button text-uppercase my-5">ordina ora</a>
            </div>
        </div>
    </section>

    <!-- JUMBO -->
</template>

<script>
export default {
    name: 'JumboComponent',
    data() {
        return {

        }
    }

}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;


#jumbo {
    h1 {
        inline-size: 150px;
        overflow-wrap: break-word;
        font-size: 2rem;
        font-weight: 700;

        span {
            padding-left: 20px;
        }
    }

    .img-box {
        width: 200px;
        height: 200px;
        position: relative;

        .burger-img {
            position: absolute;
            left: 45px;
            bottom: -40px;
            width: 200px;
        }

        .coca-img {
            position: absolute;
            left: 125px;
            bottom: 20px;
            width: 150px;
        }
    }
}


@media screen and (min-width: 465px) {
    #jumbo {
        h1 {
            inline-size: 300px;
            font-size: 4rem;
            font-weight: 700;
            margin-left: 30px;

            span {
                padding-left: 20px;
            }
        }

        img {
            width: 400px;
        }

        .img-box {
            width: 100%;
            height: 200px;
            margin-bottom: 40px;
            position: relative;

            .burger-img {
                position: absolute;
                left: 140px;
                bottom: -150px;
                width: 271px;
            }

            .coca-img {
                left: 225px;
                bottom: -80px;
                width: 245px
            }
        }
    }
}


@media (min-width: $viewport-md) {
    #jumbo {
        h1 {
            inline-size: 300px;
            font-size: 4rem;
            font-weight: 700;
            margin-left: 50px;

            span {
                padding-left: 20px;
            }
        }

        img {
            width: 400px;
        }

        .img-box {
            width: 100%;
            height: 200px;
            position: relative;

            .burger-img {
                position: absolute;
                left: 270px;
                bottom: -154px;
                width: 365px;
            }

            .coca-img {
                position: absolute;
                left: 400px;
                bottom: -40px;
                width: 280px;

            }
        }
    }
}


@media (min-width: $viewport-xl) {
    #jumbo {
        h1 {
            inline-size: 500px;
            font-size: 6rem;
            font-weight: 700;
            margin-left: 250px;

            span {
                padding-left: 20px;
            }
        }

        .img-box {
            width: 100%;
            height: 200px;
            position: relative;

            .burger-img {
                position: absolute;
                left: 701px;
                bottom: -200px;
                width: 450px;
            }

            .coca-img {
                position: absolute;
                left: 860px;
                bottom: -60px;
                width: 366px;
            }
        }
    }
}</style>