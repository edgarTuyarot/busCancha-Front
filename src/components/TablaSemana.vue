<template>
  <div class="container-sm semana">
    {{ ordenarArray }}
  </div>
</template>

<script>
export default {
  props: {
    reservas: [],
  },
  data() {
    return {
      arrayOrdenado: [[], [], [], [], [], [], []],
      dias: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ],
    };
  },
  computed: {
    ordenarArray() {
      let arrayDes = this.reservas;

      for (const reserva of arrayDes) {
        let fechaReserva = new Date(reserva.fecha);
        fechaReserva = new Date(
          `${fechaReserva.getFullYear()}-${fechaReserva.getMonth() + 1}-${
            fechaReserva.getDate() + 2
          }`
        );
        //Aqui debo definir el condicional para validar la reserva y guardala en el arraya en la posicion correspondiente al dia de 0 a 6
       
        this.arrayOrdenado[fechaReserva.getDay()].push = reserva;
      }
      console.log(this.arrayOrdenado);
    },
  },
};
</script>

<style>
.semana {
  justify-content: center;
  background-color: rgb(235, 253, 250);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-left: auto;
  margin-right: auto;
}
</style>