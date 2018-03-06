<template>
  <section>
   <img src="../assets/bnp.jpeg" alt="bnp">

      <addcompt class="class" @addOperation="data => add(data)"></addcompt>
       <listoperation :operations="operations"> </listoperation>
  </section>
</template>

<script>
import listoperation from "./listoperation.vue";
import addcompt from "./addcompt.vue";


export default {
  name: "accountmanager",
  components: {
      listoperation,
      addcompt,
  },
  data: () => ({
          operations: [
            { id: 1, montant: "", category: "loyer", date: "2018-01-02"},
            { id: 2, montant: "", category: "alimentaire", date: "2017-12-02" },
            { id: 3, montant: "", category: "vetement", date: "2017-11-02" },
            { id: 4, montant: "", category: "sport", date: "2017-8-23" }, 
            { id: 5, montant: "", category: "loisirs", date: "2017-12-20" },         
            { id: 6, montant: "", category: "salaire", date: "2017-12-17" }        
                    
            
        ]
      }),
  methods: {

    add(data) {
        // data.id = this.operations.length
        this.data.id.push(data)

    },
    remove(index){
        this.operations.splice(index, 1)
    }
  }
};


</script>

<style>

</style>
