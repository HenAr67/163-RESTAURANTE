<template>
  <v-layout>
    <bar />
    <v-main>
      <cobro-facturacion />
    </v-main>
  </v-layout>
</template>

<script>
import { defineAsyncComponent } from "vue"
import CobroFacturacion from "./CobroFacturacion"
export default {
  components: {
    bar: defineAsyncComponent(() => import("./barPage")),
    CobroFacturacion
  }
}
</script>

<style>
</style>