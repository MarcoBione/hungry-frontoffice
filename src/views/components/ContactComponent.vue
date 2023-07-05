<template>
    <section id="contact-us" class="container-fluid my-5">
        <div class="row flex-column flex-lg-row align-items-center justify-content-evenly">
            <div class="col-12 ">
                <h1>Lavora con noi</h1>
            </div>
            <div class="col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-center">
                <div class="my-card d-flex flex-column">
                    <div class="image-card ">
                        <img src="/images/rider.jpg" alt="">
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-center">
                        <p class="fs-1 mb-0">Rider </p>
                        <img class="ms-2" src="/images/fast-delivery.png" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <div class="my-card d-flex flex-column">
                    <div class="image-card ">
                        <img src="/images/collabora.jpg" alt="">
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-center">
                        <p class="fs-1 mb-0">Ristoranti</p>
                        <img class="utensils ms-2" src="/images/utensils-solid.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactComponent'
}
</script>

<style lang="scss" scoped>
#contact-us {
    padding: 40px 0;

    h1 {
        margin-bottom: 30px;
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    }

    .my-card {
        width: 100%;
        height: 450px;
        border-radius: 30px;
        overflow: hidden;
        background-color: #d7d1bd6c;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin: 20px 0;


        .image-card {
            height: 350px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        h2 {
            text-align: center;
            padding-top: 30px;
            text-transform: capitalize;

        }

        .card-body {
            img {
                width: 50px;
            }

            .utensils {
                width: 30px;
            }

        }
    }
}
</style>