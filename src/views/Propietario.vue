<template>
  <h1>Bienvenido {{ propietario.nombre }}</h1>

  <h2>{{ propCancha }}</h2>

  <Navbar />

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
      let arrayMes=[]
      for (const reserva of this.reservasProp) {
        let fechaReserva=new Date(reserva.fecha);
        if(date.getMonth()==fechaReserva.getMonth()){
          arrayMes.push(reserva)
        }
        
      }
      console.log(date.getMonth());

      return arrayMes;
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