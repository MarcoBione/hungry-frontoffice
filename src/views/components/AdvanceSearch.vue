<template>
  <section>
    <div class="form-group mb-3 mx-auto">
      <h1 class="text-center mb-4">Seleziona le categorie:</h1>
      <div class="d-flex flex-wrap ms-5">
        <div v-for="item in categories" class="col-6 col-md-4 col-lg-3 fs-3">
          <input type="checkbox" :name="item.name" :value="item.id" class="form-check-input fs-3" 
            @change="setItem(item.id)" :checked="items.indexOf(item.id)>-1">
          <label :for="item.name" class="form-check-label ms-3">{{ item.name }}</label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import {store} from '../../store';
import { resolveTransitionHooks } from 'vue';
export default {
  name: 'AdvanceSearch',
  props: '',
  data() {
    return {
      categories: [],
      store,
      items: []
    }
  },
  methods: {
    getData() {
      //Gets categories from database
      axios.get(`${this.store.apiBaseUrl}/categories`).then((res) => {
        if (res.data.success) 
          this.categories = res.data.results;
        else
          this.store.error = res.data.results;
      });

      console.log("GetData: selected cat "+this.store.selectedCat);
      this.setItem(this.store.selectedCat);
      this.store.selectedCat = 0;
    },
    setItem(selId) {
      if(selId > 0){
        if(this.items.indexOf(selId) != -1){
          this.items.splice(this.items.indexOf(selId), 1)
        } else {
          this.items.push(selId);
        }
      }
      this.updateCaterers();    
    },
    updateCaterers() {    
        console.log("GetSelectedCaterer: "+this.items);
        this.store.error = '';
        if(this.items){
          console.log(this.items);
        axios.get(`${this.store.apiBaseUrl}/caterers`, {params: { 'id' : this.items }}).then((res) => {
            if (res.data.success) {
              console.log(res.data.results);
              this.store.caterers = res.data.results;
            }else{
              this.store.error = res.data.results;
            }
        });
      }else{
          axios.get(`${this.store.apiBaseUrl}/caterers`).then((res) => {
          console.log(res.data);
        });
      }
      
    }
  },
  mounted() {
    this.getData();
  }
}

</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;

._myoffcanvasbg {
  background-color: $carbon;
}

span {
  width: 150px;
}

label {
  width: 150px;
}
</style>