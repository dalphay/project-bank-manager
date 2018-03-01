<template>
  <section>
      <DogTable :dogs="dogs"></DogTable>
  </section>
</template>

<script>
import DogTable from "./DogTable.vue";

export default {
  name: "DogManager",
  components: {
      DogTable
  },
  data:() => ({
          dogs: [
            { id: 1, name: "fido", race: "corgi", birthdate: "2012-03-02" },
            { id: 2, name: "ploum", race: "labrador", birthdate: "2014-03-14" },
            { id: 3, name: "didou", race: "dalmachien", birthdate: "2004-12-10" },
            { id: 4, name: "chien", race: "chien", birthdate: "2014-11-05" }
        ]
      }),
  methods: {
      addDog(dog) {
          this.dogs.push(dog);
      },
      removeDog(dogId) {
         this.dogs = this.dogs.filter(dog => dog.id !== dogId);
         //this.dogs = this.dogs.filter(function(dog){ return dog.id !== dogId});
       
      }
  }
};

// function() {
//     return true;
// }

// () => true
// //

// function(arg) {
//     return true;
// }

// (arg) => true
// arg => true

// () => {
//     if(machin){
//         return true;
//     };
// }
</script>

<style>

</style>
