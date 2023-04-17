<template>
    <v-layout>
        <bar />
        <v-main>
            <pedidosCom/>
        </v-main>
    </v-layout>

</template>

<script>
// import bar from "./barPage.vue";
import { defineAsyncComponent } from "vue";
import pedidosCom from "./PedidosCom.vue"

export default {
    components: {
        bar: defineAsyncComponent(() => import("./barPage")),
        pedidosCom
    }
}
</script>