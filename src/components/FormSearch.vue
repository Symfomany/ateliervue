<template>
  <div class="formSearch">
      <input v-model="search" type="search" placeholder="Rechercher un nom ou prenom" class="form-control" />
  </div>
</template>


<script>

export default {
  name: 'formSearch',
  watch: {
    search: function(){
        this.$emit('changed', this.search)
    }
  },
  data () {
    return {
      search: ''
    }
  },
}
</script>

<style scoped>
 
</style>