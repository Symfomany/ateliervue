<template>
  <div id="app">
    <navbar></navbar>
      <div class="container">
        <sidebar></sidebar>
        <div class="col-md-9">  

            <ul class="nav nav-tabs" role="tablist">
               <li role="all" class="active">
                 <router-link to="/">Tous les amis du monde</router-link>
              </li>
              <li role="french" class="active">
                  <router-link to="/francais">Juste des amis français</router-link>
              </li>
            </ul>

          <router-view></router-view>
        </div>
      </div>
    <foot></foot>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';
  import Sidebar from '@/components/Sidebar';

export default {

  name: 'app',
  data () {
    return {
      likes: []
    }
  },
  methods:{
    like: function(event){
      console.log(event)
      likes.push(event);
    }
  },
  components: {
    navbar: Header,
    foot: Footer,
    sidebar: Sidebar
  }
}
</script>

<style>

</style>
