<template>
    <header class="h-100">
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-evenly">
                    <div>
                        <img class="img-fluid" src="/images/Logo2.png" alt="">
                    </div>
                    <a class="mybtn d-flex justify-content-center align-items-center" data-bs-toggle="offcanvas"
                        href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <i class="fa-solid fa-burger"></i>
                    </a>
                    <a class="mybtn d-flex justify-content-center align-items-center" id="cart">
                        <i class="fa-solid fa-cart-shopping"><span>1</span></i>
                    </a>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h3 class="offcanvas-title" id="offcanvasExampleLabel">Menù</h3>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div>
                                <a href="">
                                    <p>Ristoranti</p>
                                </a>
                                <a href="">
                                    <p>Categorie di cibo</p>
                                </a>
                                <a href="">
                                    <p>Chi siamo</p>
                                </a>
                                <a href="">
                                    <p>Lavora con noi</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;

header {
    background-color: transparent;
    width: 100%;
    height: 345px;
}

.container {
    position: relative;
}


.mybtn {
    @include switch;
    border-radius: 70px 0 70px 0;
    width: 60px;
    height: 40px;
    position: absolute;
    right: 0;
    background-color: black;
    min-width: 50px;
    min-height: 30px;


    i {
        font-size: 25px;
    }
}

#cart {
    top: 50px;
    box-shadow: 0px 5px red;

    i {
        font-size: 20px;
        position: relative;

        span {
            font-size: 10px;
            position: absolute;
            top: -8px;
            right: -10px;
        }
    }
}

.offcanvas {
    p {
        font-size: 20px;
    }


    a:hover {
        text-decoration: underline;
        text-decoration-color: #ff0000;
        text-shadow: 10rem;
    }
}

a {
    text-decoration: none;
    color: white;
}
</style>