<template>
  <section>
    <div class="form-group mb-3 mx-auto">
      <p>Seleziona le categorie:</p>
      <div class="d-flex flex-wrap">
        <div v-for="item in categories" class="col-6 col-md-4 col-lg-3">
          <input type="checkbox" :name="item.name" :value="item.id" class="form-check-input" 
            @change="getSelectedCaterer(item.id)" :checked="items.indexOf(item.id)>-1">
          <label :for="item.name" class="form-check-label">{{ item.name }}</label>
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
      items: [],
      store
    }
  },
  computed: {
    items () {
      return store.selectedCategories;
    }
  },
  watch:{
    items(value){
      getSelectedCaterer(0);
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
      this.getSelectedCaterer();
    },
    getSelectedCaterer(selId) {
      if(selId > 0){
        if(this.items.indexOf(selId) != -1){
          this.items.splice(this.items.indexOf(selId), 1)
        } else {
          this.items.push(selId);
        }
      }
      
        console.log("GetSelectedCaterer: "+this.items);
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