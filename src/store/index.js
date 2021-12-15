import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    canchas: [],
    cancha: {},
    reservas: [],
    canchasLibres: [],
    reservaAConfirmar: {},
    nuevoUsuario: {},
    userLog: {},
    reservasUser: [],
    reservasProp: [],
    propietario: {},
  },
  mutations: {
    agregarCancha(state, payload) {
      state.canchas = payload;
    },
    agregarReserva(state, payload) {
      state.reservas = payload;
    },
    setReserva(state, payload) {
      state.reservas.push(payload);
    },
    setCanchasLibres(state, payload) {
      state.canchasLibres = payload;
    },
    setReservaAConfirmar(state, payload) {
      state.reservaAConfirmar = payload;
    },
    setReservasUser(state, payload) {
      state.reservasUser = payload;
    },
    setReservasProp(state, payload) {
      state.reservasProp = payload;
    
     
    },
    setPropietario(state, payload) {
      state.propietario = payload;
    },
  },
  actions: {
    async cargarCanchas({ commit }) {
      try {
        const respuesta = await fetch("http://127.0.0.1:8000/api/canchas/");
        const dataDB = await respuesta.json();
        const arrayCanchas = [];
        for (let id in dataDB) {
          arrayCanchas.push(dataDB[id]);
        }
        commit("agregarCancha", arrayCanchas);
      } catch (error) {
        console.log(error);
      }
    },
    async cargarReservas({ commit }) {
      try {
        const respuesta = await fetch("http://127.0.0.1:8000/api/reserva/");
        const dataDB = await respuesta.json();
        const arrayReserva = [];
        for (let id in dataDB) {
          arrayReserva.push(dataDB[id]);
        }

        commit("agregarReserva", arrayReserva);
      } catch (error) {
        console.log(error);
      }
    },
    async setearReserva({ commit }, reserva) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/reserva/`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(reserva),
        });
        const dataDB = await res.json();
        router.push("/detalles");
      } catch (e) {
        console.log(e);
      }
      commit("setReserva", reserva);
    },
    async setCanchasLibres({ commit }) {
      try {
        const respuesta = await fetch("http://127.0.0.1:8000/api/canchas/");
        const dataDB = await respuesta.json();
        const arrayReserva = [];
        for (let id in dataDB) {
          arrayReserva.push(dataDB[id]);
        }

        commit("setCanchasLibres", arrayReserva);
      } catch (error) {
        console.log(error);
      }
    },
    cargarReserva({ commit }, reservaAConfirmar) {
      let res = reservaAConfirmar;
      commit("setReservaAConfirmar", res);
      console.log(res);
    },
    async findReservas({ commit }, id_usuario) {
      try {
        const respuesta = await fetch(
          `http://127.0.0.1:8000/api/reserva/${id_usuario}`
        );
        const dataDB = await respuesta.json();
        const arrayReservaUser = [];
        console.log(dataDB);
        for (let id in dataDB) {
          arrayReservaUser.push(dataDB[id]);
        }

        commit("setReservasUser", arrayReservaUser);
      } catch (error) {
        console.log(error);
      }
    },
    setearPropietario({ commit }, propietario) {
      commit("setPropietario", propietario);
    },
    async findReservasProp({ commit }, id_usuario) {
      try {
        const respuesta = await fetch(
          `http://127.0.0.1:8000/api/reserva/${id_usuario}/edit`
        );
        const dataDB = await respuesta.json();
        const arrayReservaProp = [];
        for (let id in dataDB) {
          arrayReservaProp.push(dataDB[id]);
        }
        commit("setReservasProp", arrayReservaProp);
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
});
