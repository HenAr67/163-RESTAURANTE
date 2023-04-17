<template>
  
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="black" prominent>
        <v-avatar size="100px">
          <v-img src="./pollos2.png"></v-img>
        </v-avatar>
        <v-spacer></v-spacer>

        <v-btn variant="text" color="red" light="True" to="/">
          <p>Inicio</p>
        </v-btn>

        <v-btn variant="text" color="red" to="/productos"> Productos </v-btn>

        <v-btn variant="text" color="red" to="/about">Acerca de nosotros</v-btn>

        <v-btn color="white" to="/login"> Iniciar Sesion</v-btn>
        <v-btn color="white" to="/registrar"> Registrarse</v-btn>
      </v-app-bar>

</template>


<script>
import axios from "axios";
import client from "../../Chef/pages/pocket"
export default {
  data: () => ({
    show: false,
    result: null,
    model: true,
  }),
  async created() {
    let response = await axios.get("https://rst.fly.dev/api/collections/productos/records")
    this.result = response.data.items
    this.suscripcion();
  },
  methods: {
    async updatestate(item) {
      let data = {
        "estado": item.estado
      }
      let response = await axios.patch("https://rst.fly.dev/api/collections/productos/records/" + item.id, data)
      console.log(response)
    },
    suscripcion() {
      client.realtime.subscribe('productos', this.rerendering);
    },
    async rerendering(e) {
      console.log(e)
      let response = await axios.get("https://rst.fly.dev/api/collections/productos/records")
      this.result = response.data.items
    }
  }

}
</script>
  
<style scoped>
.texto {
  color: white;
}

h1 {
  color: white;
}

v-img {
  border-radius: 50px;
}

.boton {
  float: right;
}
</style>