<template>
    <div class="col-12 col-md-5 p-0">
        <a href="/restaurantlist">
            <div class="my-card ">
                <div class="image-card">
                    <img src="/images/Categories/categoryPizza.png" alt="">
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'CategoryCard'
}
</script>

<style lang="scss" scoped>
.my-card {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
    background-color: #d7d1bd6c;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: 20px 0;

    .image-card {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        padding: 10px 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>