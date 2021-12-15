<template>
  <Meses />
    <div >
        {{mesSelect}}
    </div>
  <div class="cal">
    <div v-for="(valor, index) in mesSelect" :key="index" class="celda">

    </div>
  </div>
</template>

<script>
import { provide } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";

import { inject } from "@vue/runtime-core";
import Meses from "./Meses.vue";
export default {
  setup() {
    let reservas = inject("reservas");
    const mes = ref(0);
    const diaMes = ref(0);
    provide("mes", mes);
    provide("diaMes", diaMes);
    return { mes, diaMes, reservas };
  },
  data() {
    return {
      valores: [],
      anio: "",
      dias: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ],
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octube",
        "Noviembre",
        "Diciembre",
      ],
    };
  },
  computed: {
    mesSelect() {
      this.valores = [];
      let supAnio = new Date();
      this.anio = supAnio.getFullYear();
      for (let index = 1; index <= this.diaMes; index++) {
        let dia = new Date(`${this.anio}/${this.mes}/${index}`);
        let nombreDia = this.dias[dia.getDay()];
        for (const reserva of this.reservas) {
            
            return console.log(dia);

            if(dia == reserva.fecha) {
             
          }
        }
      }

   
    },
  },
  components: {
    Meses,
  },
};
</script>

<style >
.cal {
  justify-content: center;
  background-color: rgb(213, 248, 241);
  display: grid;
  grid-gap: 20px;
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  grid-template: repeat(5, 1fr) / repeat(7, 1fr);
  margin-top: 20px;
  padding: 10px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.celda {
  background-color: rgb(128, 219, 166);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  gap: 20px 20px;
  text-align: center;
  padding: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
}

.celda:hover {
  background-color: rgb(167, 230, 255);
}
</style>