<template>
  <section>
    <!-- ### nome del ristorante ### -->
    <div class="input-group mb-3">
      <label class="input-group-text" for="name">Nome ristorante</label>
      <input id="name" type="text" class="form-control bg-body-secondary" placeholder="Inserisci il nome del ristorante">
    </div>

    <div class="input-group mb-3">
      <!-- ### select per le categorie ### -->
      <label class="input-group-text" for="select01">Categorie</label>
      <select class="form-select bg-body-secondary" id="select01">
        <option selected>Seleziona</option>
        <option value="#">Aggiungere nome dinamico</option>
      </select>
    </div>
    <div class="form-group">
      <p>Seleziona le categorie:</p>
      <div class="d-flex flex-wrap">
        <div v-for="item in categories" class="col-6 col-md-4 col-lg-3">
          <input type="checkbox" name="items" :value="item.id" class="form-check-input" v-model="items"
            @change="getSelectedCaterer()">
          <label for="" class="form-check-label">{{ item.name }}</label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AdvanceSearch',
  props: '',
  data() {
    return {
      categories: [],
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      items: [],
      caterers: []
    }
  },
  methods: {
    getData() {
      axios.get(`${this.apiBaseUrl}/categories`).then((res) => {
        if (res.data.success) {
          this.categories = res.data.results;
          console.log(this.categories);
        } else {
          this.error = res.data.results;
        }
      });
    },
    getSelectedCaterer() {
      console.log(this.items);
      this.items.forEach((id)=>{
          console.log(id);
        });
      // axios.get(`${this.apiBaseUrl}/categories`, {        
      //   params: {
      //     "id": numPage
      //   }
      // }).then((res) => {
      //   console.log(res.data)
      // });
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