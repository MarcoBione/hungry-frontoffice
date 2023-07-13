<template>
  <a class="mybtn d-flex justify-content-center align-items-center" data-bs-toggle="offcanvas"
      href="#offcanvasBurger" role="button" aria-controls="offcanvasExample">
      <i class="fa-solid fa-burger"></i>
  </a>
  <a class="mybtn d-flex justify-content-center align-items-center" :class="store.storeData && store.storeData.length>0 ? 'shadowRed' : ''" id="cart" data-bs-toggle="offcanvas"
      href="#offcanvasShop" role="button" aria-controls="offcanvasShop">
      <i class="fa-solid fa-cart-shopping"><span>{{store.storeData && store.storeData.length>0 ? getNumberOfDishes() : ''}}</span></i>
  </a>

  <!-- ### menu burger ### -->
  <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasBurger"
      aria-labelledby="offcanvasBurgerLabel">
      <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasBurgerLabel">Menù</h3>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
          <div>
              <a href="/">
                  <p>Home</p>
              </a>
              <a href="/restaurantlist">
                  <p>Ristoranti</p>
              </a>
              <a href="/Categorylist">
                  <p>Categorie di cibo</p>
              </a>
              <a href="https://github.com/MarcoBione/hungry-frontoffice/" target="_blank">
                  <p>Chi siamo</p>
              </a>
              <a href="http://127.0.0.1:8000/">
                  <p>Area Riservata</p>
              </a>
          </div>
      </div>
  </div>
  <!-- ### end menu burger ### -->

  <!-- ### Shop menu ### -->
  <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasShop"
      aria-labelledby="offcanvasShopLabel">
      <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasShopLabel">Carrello</h3>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

          <shop-item-component/>
          
      </div>
  </div>
  <!-- ### End Shop menu ### -->
</template>

<script>
import {store} from '../../store';
import ShopItemComponent from './ShopItemComponent.vue';
  export default {
    name: 'StickyButtons',
    data() {
      return {
        store
      }
    },
    component: {
        ShopItemComponent,
    },
    components: { ShopItemComponent },
    methods: {
        getNumberOfDishes(){
            let num = 0;
            if(this.store.storeData){
                this.store.storeData.forEach((val)=>{
                    num += val.quantity;
                });
            }
            return num;
        }
    }
  }
</script>

<style lang="scss" scoped>
@use '../../assets/partials/_variables' as*;

.mybtn,#cart{
  z-index: 3000;
}

.mybtn {
    @include switch;
    border-radius: 70px 0 70px 0;
    width: 60px;
    height: 40px;
    position: fixed;
    top: 5%;
    right: 1.5%;
    background-color: black;
    min-width: 50px;
    min-height: 30px;

    i {
        font-size: 25px;
    }
}

.shadowRed{
    box-shadow: 0px 5px red!important;
}

#cart {
    @include switch;
    top: calc(5% + 50px);
    right: 1.5%;
    position: fixed;

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
a {
    text-decoration: none;
    color: white;
}
.offcanvas {
    height: 100vh;
    z-index: 10000;

    p {
        font-size: 20px;
    }

    a:hover {
        text-decoration: underline;
        text-decoration-color: #ff0000;
        text-shadow: 10rem;
    }
}
</style>