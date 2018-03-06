<template>
    <section>
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
            <button  value="remove" @click="remove">Remove</button>
            
        </tr>
      </tbody>
    </table>
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
    methods: {
        remove(){
            
        }
    }
}
</script>

<style>

</style>
