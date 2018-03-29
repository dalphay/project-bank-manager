<template>
    <section>

        <label for="" style="color: red; font-size: 27px;">Gestion des operations</label>

        <table class="table">
        <thead>
            <th>Id</th>
            <th>Montant</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>    
        </thead>
        <tbody>
            <tr v-for="operation in operations" :key="operation.id">
                <td>{{operation.id}}</td>
                <td>{{operation.montant}}</td>
                <td>{{operation.category}}</td>
                <td>{{operation.date}}</td>
                <button  value="remove" @click="remove(operation.id)">Remove</button>            
            </tr>
        </tbody>
        </table>
        <h4>Total: {{totalMarks}}</h4>

    </section>  
</template>

<script>
export default {
  name: "listoperation",
  props: {
    operations: {
      type: Array,
      required: true
    }
  },
  computed: {
  totalMarks: function() {
    let total = 0;
    for(let i = 0; i < this.operations.length; i++){
      total += parseInt(this.operations[i].montant);
    }
    return total;
  }
},
  methods: {
    remove(id) {
      this.$emit("removeOperation", id);
    }
  }
};
</script>

<style> 
   
</style>
