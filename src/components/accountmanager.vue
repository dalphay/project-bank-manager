<template>
  <section>
    <img src="../assets/bank.png" alt="bnp" style="width: 53%;">
      <h2 style="color: blue">SYNTHÈSE DE VOTRE COMPTE</h2> <br>   
    
      <addcompt class="class" @addOperation= "operation => add(operation)"></addcompt>
      <listoperation :operations="operations" @removeOperation= "id => remove(id)"> </listoperation>  
  </section>
  
  
</template>

<script>
import listoperation from "./listoperation.vue";
import addcompt from "./addcompt.vue";
import api from "../api";
import Api from '../api';
import Dao from './Dao';



export default {
  name: "accountmanager",
  components: {
    listoperation,
    addcompt
  },
  data: () => ({
    operations: [
  ]
  }),
  beforeCreate(){

    let dao = new Dao();
    dao.getAll().then((responses) => {
      this.operations = responses.data;
    })
  },
  methods: {
    add(operation) {
      let dao = new Dao();
      dao.add(operation).then((responses) => {
        dao.getAll().then((responses) => {
         this.operations = responses.data;
        })
      
      })
    },

    remove(id) {

      let dao = new Dao();
      dao.remove(id).then((responses) => {
        dao.getAll().then((responses) => {
         this.operations = responses.data;
        });

      })
    }
  }
};
</script>

<style>

</style>
