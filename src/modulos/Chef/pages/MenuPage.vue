<template>
    <v-layout>
        <bar />
        <v-main>
            <MenuC />
        </v-main>
    </v-layout>

</template>

<script>
// import bar from "./barPage.vue";
import { defineAsyncComponent } from "vue";
// import MenuCom from "./ListaMenu.vue"

export default {
    components: {
        bar: defineAsyncComponent(() => import("./barPage")),
        MenuC: defineAsyncComponent(()=> import("./ListaMenu.vue"))
    }
}
</script>