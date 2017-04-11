<template>
  <div class="liste">
    
    <h3><img src="https://www.infogreffe.fr/societes-theme/images/infogreffe/icons/french_flag_50x50.png" /> Recherche ton ami parmis les amis français  ({{ filterByWord.length }})</h3>
    <formSearch @changed="search = $event"></formSearch>
    <a @click="refresh" class="pull-right"><i class="fa fa-refresh" aria-hidden="true"></i></a>
    <div v-if="search.length >= 3">Rechercher dans : {{ search }}</div>
    
    <div id="preloader"  v-if="filterByWord.length === 0">
      <img src="http://www.drivethrurpg.com/shared_images/ajax-loader.gif" />
    </div>

    <item @remove="trash($event)" v-for="personnage in filterByWord" :perso="personnage" v-bind:key="personnage.id"></item>

    <button @click="more" id="more" type="button" class="btn btn-md btn-primary">Voir 10 autres français de personnages</button>
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
  methods:{
     trash: function(event){
      let position = this.personnages.indexOf(event);
      this.personnages.splice(position,1);
    },
    refresh: function(){ 
        let self = this;
        let url="https://randomuser.me/api/?results=10&nat=fr";
        this.$http.get(url).then(function(reponse){
          self.personnages = reponse.body.results; // body: corps de ma réponse
        });
    },
    more: function(){
        let self = this;
        let url="https://randomuser.me/api/?results=10&nat=fr";
        this.$http.get(url).then(function(reponse){
          self.personnages = self.personnages.concat(reponse.body.results); // body: corps de ma réponse
        });
    }
  },
  components: {
    item: Item,
    formSearch: formSearch
  },
  created(){
    let self = this;
    let url="https://randomuser.me/api/?results=10&nat=fr";
		this.$http.get(url).then(function(reponse){
			self.personnages = reponse.body.results; // body: corps de ma réponse
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #more{
    width: 100%;
  }
</style>
