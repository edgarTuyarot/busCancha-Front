<template>
  <button @click="(mes = 1), setMes()" type="button" class="btn btn-outline-info">Enero</button>
  <button @click="(mes = 2), setMes()" type="button" class="btn btn-outline-info">Febrero</button>
  <button @click="(mes = 3), setMes()" type="button" class="btn btn-outline-info">Marzo</button>
  <button @click="(mes = 4), setMes()" type="button" class="btn btn-outline-info">Abril</button>
  <button @click="(mes = 5), setMes()" type="button" class="btn btn-outline-info">Mayo</button>
  <button @click="(mes = 6), setMes()" type="button" class="btn btn-outline-info">Junio</button>
  <button @click="(mes = 7), setMes()" type="button" class="btn btn-outline-info">Julio</button>
  <button @click="(mes = 8), setMes()" type="button" class="btn btn-outline-info">Agosto</button>
  <button @click="(mes = 9), setMes()" type="button" class="btn btn-outline-info">Septiembre</button>
  <button @click="(mes = 10), setMes()" type="button" class="btn btn-outline-info">Octubre</button>
  <button @click="(mes = 11), setMes()" type="button" class="btn btn-outline-info">Noviembre</button>
  <button @click="(mes = 12), setMes()" type="button" class="btn btn-outline-info">Diciembre</button>
</template>

<script>
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
export default {

setup() {
    let mes = inject("mes");
    let diaMes = inject("diaMes");

    return { mes, diaMes };
  },
  methods: {
    setMes() {
      for (let index = 0; index < 13; index++) {
        if (
          this.mes == 1 ||
          this.mes == 3 ||
          this.mes == 5 ||
          this.mes == 7 ||
          this.mes == 8 ||
          this.mes == 10 ||
          this.mes == 12
        ) {
          this.diaMes = 31;
          return this.diaMes;
        } else {
          if (this.mes == 2) {
            this.diaMes = 28;
            return this.diaMes;
          }
          this.diaMes = 30;
          return this.diaMes;
        }
      }
    },
  },
};
</script>

<style>
.botonMes {
    margin-right: 5px;
    margin-right: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>