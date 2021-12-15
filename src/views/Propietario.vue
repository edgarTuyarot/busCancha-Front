<template>
  <h1>Bienvenido {{ propietario.nombre }}</h1>

  <h2>{{ propCancha }}</h2>

  <Navbar />
  <h2>Reservas del Dia</h2>
  <TablaReservas :reservas="reservasDia" />
  <hr />
  <hr />
  <h2>Reservas del Mes</h2>
  <TablaReservas :reservas="reservasMes" />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TablaReservas from "../components/TablaReservas.vue";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      propCancha: "",
    };
  },
  components: {
    Navbar,
    TablaReservas,
  },

  computed: {
    ...mapState(["propietario", "canchas", "reservasProp"]),
    reservasMes() {
      let date = new Date();
      let arrayMes = [];
      for (const reserva of this.reservasProp) {
        let fechaReserva = new Date(reserva.fecha);
        if (date.getMonth() == fechaReserva.getMonth()) {
          arrayMes.push(reserva);
        }
      }

      return arrayMes;
    },
    reservasDia() {
      let arrayDia = [];
      let date = new Date();
      let dia = new Date(
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`
      );
      for (const reserva of this.reservasProp) {
        let fechaReserva = new Date(reserva.fecha);
        fechaReserva = new Date(
          `${fechaReserva.getFullYear()}-${fechaReserva.getMonth() + 1}-${
            fechaReserva.getDate() + 2
          }`
        );
        if (
          dia.getFullYear() == fechaReserva.getFullYear() &&
          dia.getMonth() == fechaReserva.getMonth() &&
          dia.getDate() == fechaReserva.getDate()
        ) {
          arrayDia.push(reserva);
          console.log("en el if");
        }
      }
      return arrayDia;
    },
  },
  methods: {
    ...mapActions(["findReservasProp"]),
    cancha() {
      for (const cancha of this.canchas) {
        if (this.propietario.cancha == cancha.id) {
          this.propCancha = cancha.nombre;
        }
      }
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