<template>
    <h1>Hola Mundo</h1>
  <v-card color="black">
    <v-layout>
      <navbarCom />
      <v-main>
        <InicioComponente />
        <MenuComponent />
      </v-main>
    </v-layout>
  </v-card>


</template>

<script>
import { defineAsyncComponent } from "vue";

export default {

  components: {
    navbarCom: defineAsyncComponent(() => import("./navbarComponent.vue")),
    MenuComponent: defineAsyncComponent(() => import("./MenuComponent.vue")),
  }
}
</script>