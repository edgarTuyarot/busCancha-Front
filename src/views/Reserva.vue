<template>
  <DetallesCancha />
    <div class="position-absolute bottom-0 start-50 translate-middle-x">
    <Navbar :login="login"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DetallesCancha from "../components/DetallesCancha.vue";
import Navbar from "../components/Navbar.vue";
export default {
  data(){
    return{
      login:true
    }
  },
  components: {
    DetallesCancha,Navbar
  },
  computed: {
    ...mapState(["canchas", "reservas"]),

  },
};
</script>

<style>
</style>