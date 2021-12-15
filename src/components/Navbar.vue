<template>
  <div v-if="prop == 1">
    <div v-if="login">
      <button @click="$router.push('propietario')" class="btn btn-info m-1">Dashboard</button>
      <button class="btn btn-info m-1" @click="cerrarSession">Salir</button>
    </div>
    <div v-else>
      <button @click="$router.push('login')" class="btn btn-info m-1">
        Iniciar Sesion
      </button>
    </div>
  </div>

  <div v-if="prop == 0">
    <div class="d-grid w-100" v-if="login">
      <button @click="$router.push('/')" class="btn btn-info m-1">Home</button>
      <button @click="$router.push('buscador')" class="btn btn-info m-1">
        Buscador
      </button>
      <button @click="$router.push('userdashboard')" class="btn btn-info m-1">
        Reservas
      </button>
      <button class="btn btn-info m-1" @click="cerrarSession">Salir</button>
    </div>

    <div v-else>
      <button @click="$router.push('login')" class="btn btn-info m-1">
        Iniciar Sesion
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      prop: 0,
      login: Boolean,
    };
  },
  computed: {},
  methods: {
    cerrarSession() {
      sessionStorage.removeItem("nombre");
      sessionStorage.removeItem("usuarioId");
      sessionStorage.removeItem("mail");
      sessionStorage.removeItem("prop");
      sessionStorage.removeItem("id_cancha");
      this.$router.push("/login");
    },
    sets() {
      if (sessionStorage.usuarioId) {
        this.prop = sessionStorage.prop;
      } else {
        this.login = false;
      }
    },
  },
  created() {
    this.sets();
  },
};
</script>

