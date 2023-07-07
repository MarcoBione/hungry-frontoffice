<template>
    <section class="py-4">

        <!-- ### ordini ### -->
        <div class="border-top border-white py-3">

            <ul class="list-group bg-transparent">

              <li class="border-0 list-group-item bg-transparent d-flex justify-content-between px-0" v-for="(item, index) in storeData" :key="index">

                <div class="py-2 d-flex border-transparent">

                    <!-- ### se presenti elementi nella "chiamata" localstorage ### -->
                    <p class="m-0 text-white" v-if="myCart">{{ item.title }}</p>
                    <p class="m-0 px-2 text-white" v-if="myCart">{{ item.qta }}</p>

                </div>
                
                <!-- ### se presenti elementi nella "chiamata" localstorage ### -->
                <button class="btn btn-outline-danger" v-if="myCart">
                    <i class="fa-solid fa-trash" ></i>
                </button>
            </li>

            <li class="border-0 list-group-item bg-transparent d-flex justify-content-between px-0"> 
                <!-- ### se non presenti elementi nella "chiamata" localstorage ### -->
                <p class="m-0 text-white-50" v-if="!myCart">Non hai elementi nel carrello</p>
            </li>

            </ul>

        </div>

        <!-- ### comandi ### -->
        <div v-if="myCart">
            <a class="btn btn-success me-1">
                Conferma
            </a>
            <a class="btn btn-outline-warning">
                svuota carrello
            </a>
        </div>

    </section>
</template>

<script>
    export default {
        name: 'ShopItemComponent',
        data() {
            return {
                storeData : JSON.parse(localStorage.getItem('myCart')),
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>