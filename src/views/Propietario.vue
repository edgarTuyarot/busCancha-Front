<template>
  <h1>Bienvenido {{ propietario.nombre }}</h1>

  <h2>{{ propCancha }}</h2>

  <Navbar />

  <Calendario />

 <div class="container-sm">
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
        <tr v-for="(reserva, index) in reservasProp" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ reserva.usuario_id }}</td>
          <td>{{ reserva.fecha }}</td>
          <td>{{ reserva.hora }}</td>
        </tr>
      </tbody>
    </table>
  </div>

 
</template>

<script>
import { provide } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import Navbar from "../components/Navbar.vue";
import Calendario from "../components/Calendario.vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    const reservas = ref([]);
    provide("reservas", reservas);
    return {
      reservas,
      propCancha: "",
      xfechas: [],
      mes: "",
    };
  },
  components: {
    Navbar,Calendario
  },

  computed: {
    ...mapState(["propietario", "canchas", "reservasProp"]),
  },
  methods: {
    ...mapActions(["findReservasProp"]),
    cancha() {
      for (const cancha of this.canchas) {
        if (this.propietario.cancha == cancha.id) {
          this.propCancha = cancha.nombre;
         
        }
        this.reservas=this.reservasProp;
      }
    },
    porFecha() {
     

 
    },
  },
  created() {
    this.cancha();
    this.findReservasProp(this.propietario.cancha);
  },
};
</script>

<style>
</style>