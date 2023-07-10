<template>
    <section class="py-4">

        <!-- ### ordini ### -->
        <div class="border-top border-white">

            <ul class="list-group bg-transparent">

              <li class="border-0 list-group-item bg-transparent d-flex justify-content-between px-0" v-for="(item, index) in storeData" :key="index">

                 <!--<div class="py-2 d-flex border-transparent j">

                    <div class="d-flex">
                        ### se presenti elementi nella "chiamata" localstorage ### 
                            
                        <div>
                            <label for="title" class="text-white-50">titolo</label>
                            <p id="title" class="m-0 text-white" >{{ item.title }}</p>
                        </div>

                        <div>
                            <label for="quantita" class="text-white-50">quantita'</label>
                            <p id="quantita" class="m-0 text-white px-2">{{ item.qta }}</p>
                        </div>

                        

                    </div>

                    ### se presenti elementi nella "chiamata" localstorage ### 
                    <button class="btn btn-outline-danger">
                        <i class="fa-solid fa-trash" ></i>
                    </button>

                </div>-->
                
                <table class="table border-0" v-if="myCart">
                  <thead>
                    <tr>
                        <td class="bg-transparent text-white-50" scope="col">Ordine</td>
                        <td class="bg-transparent text-white-50" scope="col">Qtà'</td>
                        <td class="bg-transparent text-white-50" scope="col"></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <th class="bg-transparent text-white" scope="row">{{ item.title }}</th>
                        <td class="bg-transparent text-white">{{ item.qta }}</td>
                        <td class="bg-transparent text-white">
                            <button class="btn btn-outline-danger">
                                <i class="fa-solid fa-trash" ></i>
                            </button>
                        </td>
                    </tr>
                  </tbody>
                </table>

            </li>

            <li class="border-0 list-group-item bg-transparent d-flex justify-content-between px-0"> 
                <!-- ### se non presenti elementi nella "chiamata" localstorage ### -->
                <p class="m-0 text-white-50" v-if="!myCart">Non hai elementi nel carrello</p>
            </li>

            </ul>

        </div>

        <!-- ### comandi ###  v-if="myCart" -->
         <div v-if="myCart" > 
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