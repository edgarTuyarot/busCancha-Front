<template>



  <h2>Reservas:</h2>
  <div class="container-sm">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Cancha</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reserva, index) in reservasUser" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ reserva.cancha_id }}</td>
          <td>{{ reserva.fecha }}</td>
          <td>{{ reserva.hora }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    <Navbar  />



</template>

<script>
import Navbar from "../components/Navbar.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      Reservas: [],
      login: true,
      userID: "",
    };
  },
  computed: {
    //se importa desde el store los States("variables Globales") a utilizar
    ...mapState(["canchas", "reservas", "canchasLibres", "reservasUser"]),
  },
  methods: {
    ...mapActions(["findReservas"]),

  },
  created() {
    this.findReservas(sessionStorage.usuarioId,0);
 
  },
};
</script>

<style>
.container {
  max-width: 100%;
}
</style>