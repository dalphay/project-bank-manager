<template>
  <table class="table">
      <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Race</th>
          <th>Birthdate</th>
      </thead>
      <tbody>
        <tr v-for="dog of dogs" :key="dog.id">
            <td>{{dog.id}}</td>
            <td>{{dog.name}}</td>
            <td>{{dog.race}}</td>
            <td>{{dog.birthdate}}</td>
        </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    name: "dogTable",
    props: {
        dogs: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>
