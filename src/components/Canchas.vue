<template>
  <div class="text-center">
    <div>
      <!-- Seleccion de fecha, limitado a la fecha de hoy como fecha minina con la -fechaMinima- -->
      <p class="mt-2 mb-1">Fecha a reservar</p>
      <input
        type="date"
        :min="fechaMinima"
        v-model="fechaAReservar"
        @change="bloqueoHora"
      />
    </div>
    <!-- Ingreso dinamico con for, de las horas a reservar utilizando un -hora- para iterar y solo mostrar horas disponibles desde 
la hora actual en adentante. -->
    <div :class="claseHora">
      <p class="mt-2 mb-1">Hora a Jugar</p>
      <select
        v-model="horaAReservar"
        name="horas"
        id="hr"
        @change="setTurnosLibres(), bloqueoCancha()"
      >
        //
        <option v-for="(hora, index) in horaMinima" :key="index">
          {{ hora }}
        </option>
      </select>
    </div>
    <!-- ingresar dinamicamente con For de las canchas disponibles tenienndo en cuenta las canchas ya reservadas
    para la hora y fecha previamente seleccionadas  -->
    <div :class="claseCancha" @change="bloqueoBtn">
      <p class="mt-2 mb-1">Canchas Disponibles</p>
      <select v-model="reserva.cancha" name="canchas" id="">
        <option
          v-for="(cancha, index) in reservasLibres"
          :key="index"
          :value="cancha.id"
        >
          {{ cancha.nombre }}
        </option>
      </select>
    </div>
  </div>
  <!-- Boton para acceder a la vista de reserva con los datos de lo seleccionado -->
  <button class="btn btn-warning mt-2 mb-1" :class="claseBtn">Continuar</button>
</template>

<script>
//importaciones de vue,vuex
import { ref } from "@vue/reactivity";
import { mapActions, mapState } from "vuex";
import { inject } from "@vue/runtime-core";

export default {
  //se resiven los props con los datos de las reservas establecidas en bbdd
  props: {
    reserva: Object,
  },
  computed: {},
  components: {},
  data() {
    return {
      //se decalaran las variales a utilizar
      horaMinima: [],
      fechaMinima: "",
      fechaAReservar: Date,
      horaAReservar: 0,
      reservasLibres: [],
      claseHora: "d-none",
      claseCancha: "d-none",
      claseBtn: "d-none",
    };
  },
  computed: {
    //se importa desde el store los States("variables Globales") a utilizar
    ...mapState(["canchas", "reservas", "canchasLibres"]),
  },
  methods: {
    //se importa desde el store, las acciones a utilizar.
    ...mapActions(["cargarCanchas", "cargarReservas", "setCanchasLibres"]),
    //se setea las canchas libres segun reservas previas
    setTurnosLibres() {
      let res = this.canchasLibres;
      for (const cancha of res) {
        if (parseInt(this.horaAReservar) < cancha.apertura) {
          res = res.filter((canchaK) => canchaK.nombre != cancha.nombre);
        }
      }

      for (const key of this.reservas) {
        if (key.fecha === this.fechaAReservar) {
          if (key.hora === parseInt(this.horaAReservar)) {
            res = res.filter((nombre) => nombre.id != key.cancha);
          }
        }
      }
      if (res != "") {
        this.reservasLibres = res;
        this.reserva.fecha = this.fechaAReservar;
        this.reserva.hora = this.horaAReservar;
      } else {
        /* this.reservasLibres = this.canchasLibres; */
        this.reserva.fecha = this.fechaAReservar;
        this.reserva.hora = this.horaAReservar;
      }
    },
    //se desbloquq la seleccion de hora
    bloqueoHora() {
      this.claseHora = "d-inline";
      //se ejecuta la funcion para validar la hora actul
      this.validarHora();
      return this.claseHora;
    },
    //se desbloquea la seleccion de canchas
    bloqueoCancha() {
      this.claseCancha = "d-inline";
      return this.claseCancha;
    },
    //se desbloquea el boton de continuar
    bloqueoBtn() {
      this.claseBtn = "d-inline";
      return this.claseBtn;
    },
    //se valida la fecha minina de seleccion de turno
    validarFecha() {
      let date = new Date();
      let dia = date.getDate();
      let mes = date.getMonth() + 1;
      let anio = date.getFullYear();
      if (dia < 10) {
        this.fechaMinima = `${anio}-${mes}-0${dia}`;
      } else {
        this.fechaMinima = `${anio}-${mes}-${dia}`;
      }
      console.log(this.fechaMinima);
    },
    //se valida la hora minima de seleccion de turno
    validarHora() {
      let date = new Date();

      let i = 0;
      if (this.fechaAReservar === this.fechaMinima) {
        let hora = date.getHours() + 1;
        for (let index = hora; index < 25; index++) {
          this.horaMinima[i] = index;
          i = i + 1;
        }
        console.log(this.horaMinima);
      } else {
        let hora = 7;
        for (let index = hora; index < 25; index++) {
          this.horaMinima[i] = index;
          i = i + 1;
        }
        console.log(this.horaMinima);
      }
    },
  },
  created() {
    //se ejecuta la funcion para validar la fecha
    this.validarFecha();
    //se ejecuta la funcion para cargar los array de canchas a modificar segun disponibilidad
    this.setCanchasLibres();
    //se ejecuta la funcion para cargan los datos de todas las canchas no modificables
    this.cargarCanchas();
    //se ejecuta la funcion para cargar los datos de todas las reservas no modificables
    this.cargarReservas();
  },
};
</script>
