<template>
  <div v-if="reservas!=''" class="container-sm">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
           <th scope="col">Usuario</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reserva, index) in reservas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ reserva.usuario_id }}</td>
          <td>{{ reserva.fecha }}</td>
          <td>{{ reserva.hora }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
      <h3>Sin Reservas</h3>
  </div>
</template>

<script>

export default {
    props:{
        reservas:[]
    }


}
</script>

<style>

</style>