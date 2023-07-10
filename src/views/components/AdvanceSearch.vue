<template>
  <section>
    <div class="form-group mb-3 mx-auto">
      <p>Seleziona le categorie:</p>
      <div class="d-flex flex-wrap">
        <div v-for="item in categories" class="col-6 col-md-4 col-lg-3">
          <input type="checkbox" :name="item.name" :value="item.id" class="form-check-input" 
            @change="getSelectedCaterer(item.id)" :checked="item.id == store.selectedCat">
          <label :for="item.name" class="form-check-label">{{ item.name }} {{ item.id + ' ' + store.selectedCat + ' - ' + (item.id == store.selectedCat) }}</label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import {store} from '../../store';
export default {
  name: 'AdvanceSearch',
  props: '',
  data() {
    return {
      categories: [],
      // apiBaseUrl: 'http://127.0.0.1:8000/api',
      items: [],
      // caterers: []
      store
    }
  },
  methods: {
    getData() {
      axios.get(`${this.store.apiBaseUrl}/categories`).then((res) => {
        if (res.data.success) {
          this.categories = res.data.results;
          console.log(this.categories);
        } else {
          this.store.error = res.data.results;
        }
      });
      if(this.store.selectedCat)
        this.getSelectedCaterer(this.store.selectedCat);
    },
    getSelectedCaterer(selId) {
      if(this.items.indexOf(selId) != -1){
        this.items.splice(this.items.indexOf(selId), 1)
      } else {
        this.items.push(selId);
      }
        console.log(this.items);
        this.store.error = '';
        this.store.selectedCat = '';
      if(this.items){
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
    console.log(this.store.selectedCat);
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