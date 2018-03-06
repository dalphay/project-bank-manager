<template>
   <section>
       <form @submit.prevent="add()">
           <select name="category" id="" v-model="operation.category" >
            <option value="">Loyer</option>
            <option value="">Alimentaire</option>
            <option value="">Vetements</option>
            <option value="">Sport</option>                    
            <option value="">Salaire</option>
            <option value="">Loisirs</option>                              
        </select> 
        <select name="Types" id="" v-model="operation.type" >
            <option value="">Entrees</option>
            <option value="">Sorties</option>
                                         
        </select>
       <input type="text" name="ID" id="" v-model="operation.text">
       <input type="date" name="" id="" v-model="operation.date">
       <input type="number" name="" id="" v-model="operation.montant">       
       
      <input type="submit" name="Add" value="Add">
      </form>   
   </section>

   
</template>

<script>
export default {
    name: "addcompt",
   
    data(){
        return{
            operation: {
                category: "",
                type: "",
                text: "",
                montant: 0,
                date: new Date
            }
        }
    },
    methods: {
        add(){
            this.$emit("addOperation", this.operation)
        }
    }
}
</script>

<style>

</style>
