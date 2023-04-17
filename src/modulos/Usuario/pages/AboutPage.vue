<template>
    <v-app >
            <v-layout>
                <navbarCom />
                <v-main>
                    <v-row>
                        <v-col cols="6">
                            <v-img src="./pollos2.png" height="480px"></v-img>
                        </v-col>
                        <v-col cols="5">
                            <h1>
                                Acerca de Nosotros
                            </h1>
                            <br>
                            <h2 style="color:black" >Nosotros proveemos tu pedido de manera fresca y comoda</h2>
                            <br>
                            <h2 style="color:black">Somos un negocio que realiza la elaboracion de productos
                            de manera satisfactoria y funcional para el cliente</h2>
                        </v-col>
                    </v-row>
                </v-main>
            </v-layout>
            <v-footer>
                <v-row>
                    <v-col cols="3">
                        <h2>contactanos: 69790134</h2>
                        <h2>Ubicacion: El Alto</h2>
                    </v-col>
                    <v-col cols="6">
                        
                    </v-col>
                    <v-img src="./iconos.jpg" width="10" height="100"></v-img>
                </v-row>
            </v-footer>
    </v-app>
</template>

<style>

h1,h2 {
    text-align: center;

}

</style>
<script>
import { defineAsyncComponent } from "vue";

export default {

    components: {
        navbarCom: defineAsyncComponent(() => import("./navbarComponent.vue")),
    }
}
</script>
