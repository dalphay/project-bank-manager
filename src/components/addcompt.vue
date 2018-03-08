<template>
   <section>
     <form v-on:submit.prevent="add()">

           <label for="">Category</label>

           <select name="category" id="" v-model="operation.category" >
            <option value="Loyer">Loyer</option>
            <option value="Alimentaire">Alimentaire</option>
            <option value="Vetement">Vetements</option>
            <option value="Sport">Sport</option>                    
            <option value="Salaire">Salaire</option>
            <option value="Loisirs">Loisirs</option>     

        </select> 

        <label for="">Types</label>

        <select name="Types" id="" v-model="operation.type" >
        <option value="">Entrees</option>
        <option value="">Sorties</option>
                                         
        </select>    

        <label for="">Text</label>
        <input type="text" name="text" id="" v-model="operation.text">

        <label for="">Date</label>
        <input type="date" name="date" id="" v-model="operation.date">

        <label for="">Montant</label>
        <input type="number" name="number" id="" v-model="operation.montant">       
       
        <input type="submit" name="Add" value="Add">
     </form>   
   </section>

</template>

<script>
export default {
  name: "addcompt",

  data() {
    return {
      operation: {
        id: 0,
        category: "",
        type: "",
        text: "",
        montant: 0,
        date: new Date()
      }
    };
  },
  methods: {
    add() {
      this.$emit("addOperation", this.operation);
    }
  }
};
</script>

<style>

</style>
