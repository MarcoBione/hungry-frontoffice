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

  </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../../assets/partials/variables' as*;
._myoffcanvasbg{
  background-color: $carbon;
}
span{
  width: 150px;
}
label{
  width: 150px;
}

</style>