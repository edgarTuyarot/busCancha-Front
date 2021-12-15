<template>
  <div class="tarjeta">
    <div class="inToTarjeta" style="width: 18rem">
     <div class="card-body">
        <h4 class="card-title">Detalle de tu reserva</h4>
        <p class="card-text">Cancha: {{ canchas[reservaAConfirmar.cancha-1].nombre }}</p>
        <p class="card-text">El dia {{ reservaAConfirmar.fecha }}</p>
        <p class="card-text">Horario {{ reservaAConfirmar.hora }}hs</p>
        <a href="/buscador" class="btn btn-primary m-1">Volver</a>
        <a href="#" class="btn btn-primary" @click="reservar">Siguiente</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";


export default {
  props: {
    reserva: Object,
  },
  components: {

  },
  computed: {
    ...mapState(["reservaAConfirmar","canchas"]),
  },
  methods: {
    ...mapActions(["setearReserva", "cargarReserva"]),
    reservar() {
      
      this.setearReserva(this.reservaAConfirmar);
      this.$router.push("/");
      
     
    },
  },
};
</script>

<style>
.tarjeta{
  display: flex;
}
.inToTarjeta{
  margin: auto;

}
</style>