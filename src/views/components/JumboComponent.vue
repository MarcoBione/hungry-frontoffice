<template>
    <!-- JUMBO -->

    <section id="jumbo" class="container-fluid flex-md-row my-5">

        <div class="">
            <h1>Are you <span>Hungry?</span></h1>
        </div>
        <div>
            <div class="img-box ">
                <img class="burger-img" src="/images/callToActionHamburger.png" alt="">
                <img class="coca-img" src="/images/callToActionCocaCola.png" alt="">
            </div>
            <div class=" d-flex justify-content-center align-items-center my-2
            ">
                <a href="/restaurantlist" class=" text-uppercase " id="_jumboBtn">ordina ora</a>
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
    position: relative;


    #_jumboBtn {
        margin: 0 auto;
        width: 100px;
        text-align: center;
        background-color: #282727;
        padding: 5px 0;
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
        text-decoration: none;
        color: white;
        font-size: 10px;
        margin: 30px 0;
    }

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
            left: 20px;
            bottom: -70px;
            width: 200px;
        }

        .coca-img {
            position: absolute;
            left: 100px;
            bottom: -10px;
            width: 150px;
        }
    }
}


@media screen and (min-width: 425px) {
    #jumbo {
        h1 {
            inline-size: 300px;
            font-size: 3rem;
            font-weight: 700;


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
                left: 65px;
                bottom: -115px;
                width: 235px;
            }

            .coca-img {
                left: 160px;
                bottom: -45px;
                width: 190px
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

        #_jumboBtn {
            margin: 0 auto;
            width: 200px;
            text-align: center;
            background-color: #282727;
            padding: 5px 0;
            border-top-left-radius: 40px;
            border-bottom-right-radius: 40px;
            text-decoration: none;
            color: white;
            font-size: 1.4rem;
            margin: 30px 0;
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

        #_jumboBtn {
            margin: 0 auto;
            width: 200px;
            text-align: center;
            background-color: #282727;
            padding: 5px 0;
            border-top-left-radius: 40px;
            border-bottom-right-radius: 40px;
            text-decoration: none;
            color: white;
            font-size: 1.4rem;
            margin: 30px 0;
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
}
</style>