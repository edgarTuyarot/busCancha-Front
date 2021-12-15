<template>
  <h1>Bienvenido {{ propietario.nombre }}</h1>

  <h2>{{ propCancha }}</h2>

  <Navbar />
  <h2>Para Hoy:</h2>
  <TablaReservas :reservas="reservasDia" />
  <hr />
  <h2>Esta Semana:</h2>
  <TablaSemana :reservas="reservasSemana" />

  <hr />
  <h2>Este Mes:</h2>
  <TablaReservas :reservas="reservasMes" />

 
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TablaReservas from "../components/TablaReservas.vue";
import TablaSemana from "../components/TablaSemana.vue";
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
    TablaSemana,
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
        }
      }
      if (arrayDia == "") {
        arrayDia == "Sin reservas";
      }
      return arrayDia;
    },
    reservasSemana() {
      let arraySemana = [];
      let reservas = this.reservasProp;
      let date = new Date();
      let dias = date.getDay() * 1000 * 60 * 60 * 24;
      date = date.getTime() - dias;
      dias = new Date(date);
      for (let index = dias.getDate(); index < dias.getDate() + 7; index++) {
        for (const reserva of reservas) {
          let fechaReserva = new Date(reserva.fecha);
          fechaReserva = new Date(
            `${fechaReserva.getFullYear()}-${fechaReserva.getMonth() + 1}-${
              fechaReserva.getDate() + 2
            }`
          );
           if (
          dias.getFullYear() == fechaReserva.getFullYear() &&
          dias.getMonth() == fechaReserva.getMonth() &&
          index == fechaReserva.getDate()
        ) {
          arraySemana.push(reserva);
        }
        }
      }
      return arraySemana
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