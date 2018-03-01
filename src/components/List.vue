<template>
  <ul>
    <li v-for="(item,index) of tab" :key="index"
    @click="action1(item)" @dblclick="action2(index)">
        {{index}} {{item}}
    </li>
  </ul>
</template>

<script>
export default {
    name:'list',
    /** 
     * La propriété props permet de spécifier des arguments qu'on pourra
     * passer au component lors de son utilisation dans le template parent.
     * Ici, on dit que notre component aura un attribut tab, qui attend un
     * Array et qui est requis pour que le component fonctionne.
    */
    props: {
        tab: {
            type: Array,
            required: true
        }
    },
    methods: {
        action1(item) {
            /**
             * On utilise la méthode $emit pour dire à notre component
             * d'émettre un event vers son parent. Le nom de l'event est
             * le premier argument, les arguments suivant sont les paramètres
             * passés par l'event
             */
            this.$emit('action1', item);
        },
        action2(index) {
            this.$emit('action2', index);
        }
    }
    
}
</script>

<style>

</style>
