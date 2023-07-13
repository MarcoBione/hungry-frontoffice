<template>
    <header class="h-100">
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <div>
                        <img class="img-fluid" src="/images/Logo2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "Header",
    data(){
        return{}
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;

header {
    position: relative;
    background-color: transparent;
    width: 100%;
    height: 345px;
    z-index: 2000;

}

.container {
    position: relative;
}
</style>