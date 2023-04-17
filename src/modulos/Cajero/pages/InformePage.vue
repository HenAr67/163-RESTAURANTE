<template>
  <v-layout>
    <bar />
    <v-main>
      <informe-com />
    </v-main>
  </v-layout>
</template>

<script>
import { defineAsyncComponent } from "vue"
import informeCom from "./informeCom.vue"

export default {
  components: {
    bar: defineAsyncComponent(() => import("./barPage")),
    informeCom
  },
}
</script>

<style>
</style>