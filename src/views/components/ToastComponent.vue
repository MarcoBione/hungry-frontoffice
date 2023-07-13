<template>
  <!-- ### Toast message ###  -->
  <div v-if="store.showToast" class="toastContainer">

    <div class="sticky bottom-0 end-0 p-3" style="z-index: 99999" role="alert" aria-live="assertive" aria-atomic="true">

        <div class="toast-header">
            <strong class="me-auto">Hungry®️</strong>
            <button type="button" class="btn-close" aria-label="Close"
                @click="store.showToast = false"></button>
        </div>

        <div class="toast-body d-flex flex-column">
            <span class="fs-5">{{ store.toastMessage }}</span>
            <small class="text-black">Per effettuare l'ordine in questo risorante devi avere il carrello libero</small>
        </div>

    </div>

  </div>
</template>

<script>
import {store} from "../../store";
  export default {
    name: 'ToastComponent',
    data(){
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
.toastContainer{
  z-index: 2500;
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.8);
  border-radius: 10px;
  margin: 10px;
  animation-name: Toast;
  animation-duration: 0.3s;
}

@keyframes Toast {
  0%   {right: -740px;}
  100% {right: 0px;}
}
</style>