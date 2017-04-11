<template>
    <div class="media">
        <div class="media-left">
            <a href="#">
                <img class="media-object" :src="perso.picture.thumbnail" alt="...">
            </a>
        </div>
        <div class="media-body">
            <a class="pull-right"><i class="fa fa-heart" aria-hidden="true"></i></a>

            <h4 class="media-heading">{{ perso.name.title }} {{ perso.name.first }} {{ perso.name.last }}</h4>
            <p>Né le:{{ perso.dob}} Nationalité: {{ perso.nat}}</p>
            <ul>
                <li><a :href="perso.email"><i class="fa fa-envelope" aria-hidden="true"></i> {{ perso.email }}</a></li>
                <li><a :href="perso.phone"><i class="fa fa-phone" aria-hidden="true"></i> {{ perso.phone }}</a></li>
            </ul>
            <h3 class="pull-right"><a><i @click="remove" class="fa fa-trash" aria-hidden="true"></i></a></h3>
            
        </div>
    <hr />
    </div>
</template>



<script>
export default {
    name: 'item',
    props: ['perso'],
    methods:{
        remove: function(){ 
           this.$emit("remove", this.perso)
        },
        like: function(){ 
           this.$emit("like", this.perso)
        }
    }
}
</script>

<style scoped>
    h3{
        color: orange
    }
</style>
