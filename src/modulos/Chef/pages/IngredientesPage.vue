<template>
    <v-layout>
        <bar />
        <v-main>
            <Ingredientes/>
        </v-main>
    </v-layout>

</template>

<script>
// import bar from "./barPage.vue";
import { defineAsyncComponent } from "vue";
import Ingredientes from "./IngredientesCom.vue"

export default {
    components: {
        bar: defineAsyncComponent(() => import("./barPage")),
        Ingredientes
    }
}
</script>