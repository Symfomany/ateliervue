<template>
  <div class="liste">
    <h3>Liste des activités sur [{{ filterByWord.length }}] personnages</h3>
    <formSearch @changed="search = $event"></formSearch>
    <div v-if="search.length >= 3">Rechercher dans : {{ search }}</div>
    <hr />
    <item v-for="personnage in filterByWord" :perso="personnage" v-bind:key="personnage.id"></item>
  </div>
</template>

<script>

import Item from './Item'
import formSearch from './FormSearch'

export default {
  name: 'liste',
  computed : {
    filterByWord: function(){
      if(this.personnages.length >=3){
        let reg = new RegExp(this.search,"i")
        return this.personnages.filter(function(elt){
          return reg.test(`${elt.name.first} ${elt.name.last}`);
        });
      }

      return  this.personnages; 
    }
  },
  data () {
    return {
      msg: 'Welcome Wilders :)',
      personnages : [],
      search: ''
    }
  },
  components: {
    item: Item,
    formSearch: formSearch
  },
  created(){
    let self = this;
    let url="https://randomuser.me/api/?results=100&nat=fr";
		this.$http.get(url).then(function(reponse){
			self.personnages = reponse.body.results; // body: corps de ma réponse
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    color: green;
  }
</style>
