<template>
  <section>
    <img src="../assets/bnp.jpeg" alt="bnp">
      <h2 style="color: blue">Rélévé de compte</h2> <br>   
    
      <addcompt class="class" @addOperation= "operation => add(operation)"></addcompt>
      <listoperation :operations="operations" @removeOperation= "id => remove(id)"> </listoperation>  
  </section>
  
  
</template>

<script>
import listoperation from "./listoperation.vue";
import addcompt from "./addcompt.vue";

export default {
  name: "accountmanager",
  components: {
    listoperation,
    addcompt
  },
  data: () => ({
    operations: [
      { id: 1, montant: "1000",category: "loyer",       date: "2018-01-02" },
      { id: 2, montant: "300", category: "alimentaire", date: "2017-12-02" },
    ]
  }),
  methods: {
    add(operation) {
      this.operations.push(operation);
    },
    remove(id) {
      this.operations.splice(id, 1);
    }
  }
};
</script>

<style>

</style>
