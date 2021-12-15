<template>
  <h1>{{ userLog.nombre }}</h1>
  <div class="canchas">
    <form @submit.prevent="reservaAConfir">
      <div class="hrs">
        <Canchas :reserva="reserva" />
      </div>
    </form>
  </div>

    <Navbar  />

</template>

<script>
import { mapActions, mapState } from "vuex";
import { provide, ref } from "@vue/runtime-core";
import Canchas from "../components/Canchas.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Canchas,
     Navbar,
  },
  computed: {
    ...mapState(["canchas", "reservas", "userLog"]),
  },
  data() {
    return {
      reserva: {
        fecha: Date,
        hora: "",
        cancha: "",
        usuarioId: "",
      },
      nombreCancha: "",

    };
  },
  methods: {
    ...mapActions(["setearReserva", "cargarReserva"]),
    //se carga el state -reserva a confirmar- en vuex y se dirigie a la pagina de confirmacion
    reservaAConfir() {
      this.reserva.usuarioId=sessionStorage.usuarioId
      this.cargarReserva(this.reserva);
      this.$router.push("reserva");
    },
    
  },
  created() {
  
  },
};
</script>

<style>
.canchas {
  display: grid;
  grid-template-columns: 1 fr;
  grid-template-rows: repeat(4, 1fr);

  margin: auto;
}
.canchas button {
  grid-row: 4/4;
}
.canchas .hrs {
  grid-row: 1/1;
}
</style>