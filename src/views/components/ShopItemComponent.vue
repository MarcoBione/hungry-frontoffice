<template>
    <section>

        <!-- ### ordini ### -->
        <div class="border-top border-white">

            <ul class="list-group bg-transparent">

                <li class="border-0 list-group-item bg-transparent d-flex justify-content-between px-0" v-if="store.storeData && store.storeData.length>0">
                    <table class="table border-0">
                        <thead>
                            <tr>
                                <th class="bg-transparent text-white" scope="col">Ordine</th>
                                <th class="bg-transparent text-white" scope="col">Qtà'</th>
                                <th class="bg-transparent text-white" scope="col">Prezzo</th>
                                <th class="bg-transparent text-white" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in store.storeData" :key="index">
                                <td class="bg-transparent text-white" scope="row">{{ item.name }}</td>
                                <td class="bg-transparent text-white">{{ item.quantity }}</td>
                                <td class="bg-transparent text-white">{{ item.quantity*item.price }} &euro;</td>
                                <td class="bg-transparent text-white">
                                    <button class="btn btn-outline-danger" @click="deleteFromCart(item.id)">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th class="bg-transparent text-white" colspan="2">Prezzo totale:</th>
                                <th class="bg-transparent text-white" colspan="2">{{ getTotalPrice() }} &euro;</th>
                            </tr>
                        </tfoot>
                    </table>

                </li>

                <li class="border-0 list-group-item bg-transparent d-flex justify-content-between px-0" v-if="!store.storeData || store.storeData.length<=0">
                    <!-- ### se non presenti elementi nella "chiamata" localstorage ### -->
                    <p class="m-0 text-white-50">Non hai elementi nel carrello</p>
                </li>

            </ul>

        </div>

        <!-- ### comandi ###  v-if="myCart" -->
        <div v-if="store.storeData && store.storeData.length>0">
            <a class="btn btn-success me-1" href="/UserInfo">
                Conferma
            </a>
            <a class="btn btn-outline-warning" @click="deleteAllFromCart">
                Svuota carrello
            </a>
        </div>

    </section>
</template>

<script>
import { store } from '../../store';
export default {
    name: 'ShopItemComponent',
    data() {
        return {
            store,

        }
    },
    methods: {
        getIndexOfDishById(id){
            let res = -1;
            if(store.storeData){
                store.storeData.forEach((val,index)=>{
                    if(val.id == id)
                        res = index;
                });
            }
            return res;
        },
        deleteFromCart(id){
            let indexToRemove = this.getIndexOfDishById(id);
            if(indexToRemove>=0){
                store.storeData.splice(indexToRemove,1);
                localStorage.setItem('cart', JSON.stringify(store.storeData));
                //Force the update of the quantity array in the accordion component
                //When do only the previous 2 instructions, the watcher doesn't retrieve changes
                //deleting and re-assigning the values, this is fixed
                store.storeData = [];
                store.storeData = JSON.parse(localStorage.getItem('cart'));
            }
        },
        deleteAllFromCart(){
            store.storeData = [];
            localStorage.clear();
        },
        getTotalPrice(){
            let total = 0.0;
            if(store.storeData){
                store.storeData.forEach((val)=>{
                    total += val.quantity * val.price;
                });
            }
            return total;
        }
    },
    mounted() {
        store.storeData = JSON.parse(localStorage.getItem('cart'));
        /* this.cartData = cartData ? JSON.parse(cartData) : []; */
        console.log(store.storeData);
        /* this.getId(store.storeData.id); */
    }
}
</script>

<style lang="scss" scoped></style>