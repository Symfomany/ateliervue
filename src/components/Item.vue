<template>
  <div class="item">
    <h2>{{ perso.name.title }} {{ perso.name.first }} {{ perso.name.last }} </h2>
    <p>Né le:{{ perso.dob}} Nationalité: {{ perso.nat}}</p>
    <img :src="perso.picture.thumbnail" alt="">
    <ul>
        <li><a :href="perso.email">{{ perso.email }}</a></li>
        <li><a :href="perso.phone">{{ perso.phone }}</a></li>
    </ul>
  <hr />
  </div>
</template>



<script>
export default {
    name: 'item',
    props: ['perso']
}
</script>

<style scoped>
    h3{
        color: orange
    }
</style>
