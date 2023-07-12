<template>
    <div id="creditcard">
        <!-- <form @submit.prevent="sendOrderToBackend()"> -->
            <div class="container credit-title">
                <h2 class="text-uppercase">Inserire i dati richiesti per completare il pagamento</h2>
            </div>
            <div class="container">
                <div class="creditcardbox">
                    <div class="col2">
                        <h3>Dati utente</h3>
                        <label>Nome utente</label>
                        <input v-model="receiver" class="inputname-user" id="receiver" name="receiver" type="text" placeholder="" />
                        <label>Email utente</label>
                        <input v-model="email" class="inputname-user" id="email" name="email" type="email" placeholder="" />
                        <label>Numero Telefonico</label>
                        <input v-model="phoneNumber" class="number-user" id="phoneNumber" name="phoneNumber" type="text" ng-model="ncard" maxlength="19"
                            onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
                        <label>note</label>
                        <textarea class="inputname-user" id="notes" name="notes" type="text" placeholder="" v-model="notes"></textarea>
                    </div>
                    <div class="col1">
                        <div class="card">
                            <div class="front">
                                <div class="type">
                                    <img class="bankid" />
                                </div>
                                <span class="chip"></span>
                                <span class="card_number">&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF;
                                    &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; </span>
                                <div class="date"><span class="date_value">MM / YYYY</span></div>
                                <span class="fullname">FULL NAME</span>
                            </div>
                            <div class="back">
                                <div class="magnetic"></div>
                                <div class="bar"></div>
                                <span class="seccode">&#x25CF;&#x25CF;&#x25CF;</span>
                                <span class="chip"></span><span class="disclaimer">This card is property of Random Bank of
                                    Random
                                    corporation. <br> If found please return to Random Bank of Random corporation - 21968
                                    Paris,
                                    Verdi
                                    Street, 34 </span>
                            </div>
                        </div>
                    </div>
                    <div class="col2">
                        <h3>Dati carta</h3>
                        <label>Numero Carta</label>
                        <input class="number" type="text" ng-model="ncard" maxlength="19"
                            onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
                        <label>Nome proprietario</label>
                        <input class="inputname" type="text" placeholder="" />
                        <label>Expiry date</label>
                        <input class="expire" type="text" placeholder="MM / YYYY" />
                        <label>Security Number</label>
                        <input class="ccv" type="text" placeholder="CVC" maxlength="3"
                            onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
                        <button class="buy"><i class="material-icons" @click="managePayment()">lock</i> Pay <span>{{ store.totalPrice = getTotalPrice() }}</span>  &euro;</button>
                    </div>
                </div>
            </div>
        <!-- </form> -->
    </div>
</template>

<script>
import {store} from '../../store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            receiver: '',
            phoneNumber: '',
            notes: '',
            email: '',
            // totalPrice: 0
        }
    },
    mounted() {
        console.log(localStorage);
        console.log(store.storeData);
        let script1 = document.createElement('script')
        script1.setAttribute('src', '/src/pay.js')
        script1.async = true
        document.head.appendChild(script1)
        console.log('prezzo totale:', this.store.totalPrice);

    },
    methods: {
        getTotalPrice(){
            let total = 0.0;
            if(store.storeData){
                store.storeData.forEach((val)=>{
                    total += val.quantity * val.price;
                });
            }
            return total;
        },
        managePayment(){
            //braintree operations

            this.sendOrderToBackend();
        },
        sendOrderToBackend(){
            let orderData = {
                receiver: this.receiver,
                phoneNumber: this.phoneNumber,
                notes: this.notes,
                email: this.email,
                totalPrice: store.totalPrice,
                dishes: store.storeData,
            };
            console.log('OrderData:', orderData);
            axios.post(`127.0.0.1:8000/api/orders`, orderData).then((res) => {
                if (res.data.success) {
                    this.message = res.data.results;
                } else {
                    this.error = res.data.results;
                }
            });
        }
    }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

#creditcard {
    .fullname2 {
        position: absolute;
        font-size: 20px;
        bottom: 40px;
        color: var(--text-color);
        transition: color 0.5s;
    }

    .tips {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 30px;
        background: #f1f1f1;
        line-height: 30px;
        font-size: 14px;
        padding: 2px 15px;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        .creditcardbox {
            margin-top: 100px;
            width: 900px;
            height: 400px;
            display: flex;
            justify-content: center;


            .col1 {
                perspective: 1000;
                transform-style: preserve-3d;
                padding-right: 40px;

                .card {
                    position: relative;
                    width: 420px;
                    height: 250px;
                    margin-bottom: 85px;
                    margin-right: 10px;
                    border-radius: 17px;
                    box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.1);
                    transition: all 1s;
                    transform-style: preserve-3d;

                    .front {
                        position: absolute;
                        background: var(--card-color);
                        border-radius: 17px;
                        padding: 50px;
                        width: 100%;
                        height: 100%;
                        transform: translateZ(1px);
                        -webkit-transform: translateZ(1px);
                        transition: background 0.3s;
                        z-index: 50;
                        background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);
                        -webkit-backface-visibility: hidden;
                        -moz-backface-visibility: hidden;
                        -ms-backface-visibility: hidden;
                        backface-visibility: hidden;

                        .type {
                            position: absolute;
                            width: 75px;
                            height: 45px;
                            top: 20px;
                            right: 20px;

                            img {
                                width: 100%;
                                float: right;
                            }
                        }

                        .card_number {
                            position: absolute;
                            font-size: 26px;
                            font-weight: 500;
                            letter-spacing: -1px;
                            top: 100px;
                            left: 75px;
                            color: var(--text-color);
                            word-spacing: 3px;
                            transition: color 0.5s;
                        }

                        .date {
                            position: absolute;
                            bottom: 40px;
                            right: 55px;
                            width: 90px;
                            height: 35px;
                            color: var(--text-color);
                            transition: color 0.5s;

                            .date_value {
                                font-size: 12px;
                                position: absolute;
                                margin-left: 22px;
                                margin-top: 12px;
                                color: var(--text-color);
                                font-weight: 500;
                                transition: color 0.5s;
                            }

                            &:after {
                                content: 'MONTH / YEAR';
                                position: absolute;
                                display: block;
                                font-size: 7px;
                                margin-left: 20px;
                            }

                            &:before {
                                content: 'valid \a thru';
                                position: absolute;
                                display: block;
                                font-size: 8px;
                                white-space: pre;
                                margin-top: 8px;
                            }
                        }

                        .fullname {
                            position: absolute;
                            font-size: 20px;
                            bottom: 40px;
                            color: var(--text-color);
                            transition: color 0.5s;
                        }
                    }

                    .back {
                        position: absolute;
                        width: 100%;
                        border-radius: 17px;
                        height: 100%;
                        background: var(--card-color);
                        transform: rotateY(180deg);

                        .magnetic {
                            position: absolute;
                            width: 100%;
                            height: 50px;
                            background: rgba(0, 0, 0, 0.7);
                            margin-top: 25px;
                        }

                        .bar {
                            position: absolute;
                            width: 80%;
                            height: 37px;
                            background: rgba(255, 255, 255, 0.7);
                            left: 10px;
                            margin-top: 100px;
                        }

                        .seccode {
                            font-size: 13px;
                            color: var(--text-color);
                            font-weight: 500;
                            position: absolute;
                            top: 100px;
                            right: 40px;
                        }

                        .chip {
                            bottom: 45px;
                            left: 10px;
                        }

                        .disclaimer {
                            position: absolute;
                            width: 65%;
                            left: 80px;
                            color: #f1f1f1;
                            font-size: 8px;
                            bottom: 55px;
                        }
                    }
                }
            }

            .col2 {
                padding-right: 40px;

                textarea {
                    display: block;
                    width: 260px;
                    max-height: 90px;
                    padding-left: 10px;
                    padding-top: 3px;
                    padding-bottom: 3px;
                    margin: 7px;
                    font-size: 17px;
                    border-radius: 20px;
                    background: rgba(0, 0, 0, 0.05);
                    border: none;
                    transition: background 0.5s;

                    &:focus {
                        outline-width: 0;
                        background: rgba(31, 134, 252, 0.15);
                        transition: background 0.5s;
                    }

                }

                input {
                    display: block;
                    width: 260px;
                    height: 30px;
                    padding-left: 10px;
                    padding-top: 3px;
                    padding-bottom: 3px;
                    margin: 7px;
                    font-size: 17px;
                    border-radius: 20px;
                    background: rgba(0, 0, 0, 0.05);
                    border: none;
                    transition: background 0.5s;

                    &:focus {
                        outline-width: 0;
                        background: rgba(31, 134, 252, 0.15);
                        transition: background 0.5s;
                    }
                }

                label {
                    padding-left: 8px;
                    font-size: 15px;
                    color: #444;
                }

                .ccv {
                    width: 40%;
                }

                .buy {
                    width: 260px;
                    height: 50px;
                    position: relative;
                    display: block;
                    margin: 20px auto;
                    border-radius: 10px;
                    border: none;
                    background: #42C2DF;
                    color: white;
                    font-size: 20px;
                    transition: background 0.4s;
                    cursor: pointer;

                    i {
                        font-size: 20px;
                    }

                    &:hover {
                        background: #3594A9;
                        transition: background 0.4s;
                    }
                }
            }
        }

    }

    .chip {
        position: absolute;
        width: 55px;
        height: 40px;
        background: #bbb;
        border-radius: 7px;

        &:after {
            content: '';
            display: block;
            width: 35px;
            height: 25px;
            border-radius: 4px;
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            background: #ddd;
        }
    }
}
</style>