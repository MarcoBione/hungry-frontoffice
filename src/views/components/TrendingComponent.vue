<template>
    <section id="trending-home" class="container-fluid ">
        <div class="row flex-column align-items-center">
            <div class="col-12">
                <h1>I più ricercati oggi</h1>
            </div>
            <div class="col-12 p-0 d-flex justify-content-center">
                <div class="my-card ">
                    <div class="image-card">
                        <img src="/images/collabora.jpg" alt="">
                    </div>
                    <div class="text-card">
                        <h2>nome ristorante</h2>
                        <div class="p-3">
                            <p>Via per la piazza, 19</p>
                            <span>Consegna a domicilio con spedizione gratuita a partire da 10 €</span>
                        </div>
                        <div class="categories">
                            <div class="d-flex">
                                <div class=" bg-danger text-white px-2">Italiano</div>
                                <div class=" bg-warning text-white px-2" id="squared">Tipico</div>
                            </div>
                            <div class=" bg-success px-2 text-white">Gluten free</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column my-5">
            <a href="" class="_button text-uppercase">mostra altro</a>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#trending-home {

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    .my-card {
        width: 100%;
        max-height: 500px;
        border-radius: 30px;
        overflow: hidden;
        background-color: #d7d1bd6c;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin: 20px 0;
        padding-bottom: 30px;
        position: relative;

        .image-card {

            height: 170px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;

            }
        }

        .text-card {
            h2 {
                text-transform: uppercase;
                text-align: center;
                background-color: #282727;
                color: white;
                font-size: 1.3rem;
                padding: 5px 0;
            }

            p {
                font-size: 1.5rem;
                text-shadow: 2px 2px rgb(95, 94, 94);
                color: white;
            }

            span {
                text-shadow: 2px 2px rgb(95, 94, 94);
                color: white;
            }



            .categories {
                display: flex;
                justify-content: center;
                margin-top: 20px;

                div {
                    border-radius: 10px 10px 10px 10px;
                    font-size: 20px;
                    text-align: center;

                    margin: 2px;
                }

                #squared {
                    border-radius: 10px;
                }

            }


        }
    }
}
</style>