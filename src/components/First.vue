<template>

  <section>
      <!-- On peut ajouter des event listener sur les balises en 
      utilisant @[event]="[methode]()" où [event] est l'événement
      qu'on écoute (click, focus, blur...) et [methode] est une 
      méthode de notre component à declencher lors de cet event -->
      <img src="../assets/avatar.png" alt="Simplon" @click="show()">
      <p>
        <!-- Si l'on veut assigner la valeur d'un input à une variable
        du component (et inversement), on utilisera l'attribut v-model de Vue -->
        <input type="text" v-model="variable">
        <!-- Pour l'affichage, on utilise les double accolade, comme twig -->
        {{variable}}
      </p>
      <div>
        <input type="number" v-model.number="a">
        <input type="number" v-model.number="b">
        <!-- Le v-if permet de calculer ou non une balise en fonction d'un
        booléen donné en argument. Ici, le p ne s'affiche que si a et b sont
        truthy -->
        <p v-if="a && b">
            {{a}} + {{b}} = {{a + b}}
        </p>
      </div>
      <!-- <ul> -->
          <!-- Le v-for permet de boucler sur un tableau de notre component,
          il a besoin d'une propriété :key pour lui indiquer sur quoi se baser
          comme id unique, ici notre tableau n'est qu'un tableau de string, on
          utilise donc l'index du tableau comme key. Si l'on avait eu
          un for sur un tableau de person on aurait pu donner person.id comme :key -->
          <!-- <li v-for="(item,index) of tab" :key="index" 
                @click="showItem(item)" @dblclick="remove(index)">
              {{index}} {{item}}
          </li>
      </ul> -->
      
      <!-- On utilise notre component List en lui passant comme valeur
      de tab le tab qui se trouve dans les data du component Vue.
      On lui dit ensuite que lorsque l'event action1 est declenché, on
      utilise le paramètre de cet event pour faire un showItem et que
      lorsque l'action2 est declenché, on utilise le paramètre pour faire
      un remove -->
      <List :tab="tab" v-on:action1="item => showItem(item)"
                        @action2="index => remove(index)"></List>
        <!-- :attribut="valeur" est un raccourci pour v-bind:attribut="valeur"
         où attribut est à remplacer par un attribut html de l'élément sur
        lequel on l'applique le contenu de la variable valeur comme valeur.
        Ici, on dit que le href du a vaut ce qu'il y a dans variable -->
      <a :href="variable">bloup</a>
  </section>

</template>

<script>
import List from './List.vue';

export default {
    name:'first',
    components: {
        List
    },
    /**
     * La propriété data du component est une fonction qui return un objet
     * contenant la liste des variables que l'on souhaite rendre accessible
     * dans le template.
     */
    data: function(){
        return {
            variable: 'blip', 
            a:0,
            b:0,
            tab: ['ga', 'zo', 'bu', 'meu', 'ga']
        }
    },
    /**
     * La propriété methods du component est un objet contenant les 
     * méthodes que l'on veut rendre accessible au template
     */
    methods: {
        show() {
            alert('kekchoz');
        },
        showItem(item) {
            console.log(item);
        },
        remove(nb){
            //Pour accèder à une variable data ou une méthode
            // de notre component, on peut utiliser le this
            this.tab.splice(nb, 1)
        }
    }
}
</script>


<style>

</style>
