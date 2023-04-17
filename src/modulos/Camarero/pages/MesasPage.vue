<template>
    <v-card>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar color="black" prominent>

                <v-avatar size="100px">
                    <v-img src="../../Usuario/pages/pollos2.png"></v-img>
                </v-avatar>

                <div class="text-center">
                    <p class="text-center">Gestion de mesas</p>

                </div>

                <v-spacer></v-spacer>


            </v-app-bar>

            
            <v-main>
                <mesasCom/>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>

import { defineAsyncComponent } from "vue";

export default {

  components: {
    mesasCom: defineAsyncComponent(() => import("./mesasComponent.vue")),

  }
}
</script>