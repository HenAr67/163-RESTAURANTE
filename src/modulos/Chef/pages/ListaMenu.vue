<template>
    <h1 class="text-center">Menu listado</h1>

    <v-item-group selected-class="bg-primary">
        <v-container>
            <v-row dense>
                <v-col v-for="item in result" :key="item.id" cols="12" md="4">
                    <v-item>
                        <v-card class="mx-auto" max-width="344" color="#781919" rounded="50">
                            <v-img :src="'https://rst.fly.dev/api/files/yq65dk4yj2f28qh/'+item.id+'/'+item.imagen"
                                height="200px" cover></v-img>
                            <!-- <img :src="'https://rst.fly.dev/api/files/yq65dk4yj2f28qh/'+item.id+'/'+item.imagen" alt=""> -->
                            <v-card-title color="primary">
                                <div class="texto">{{item.nombre}}</div>
                                <p style="color: white">{{item.precio}}Bs</p>
                            </v-card-title>

                            <v-card-subtitle>
                                <div class="texto">{{item.descripcion}}</div>
                            </v-card-subtitle>

                            <v-card-actions>


                                <v-spacer></v-spacer>
                                <div class="boton">
                                    <v-switch v-model=item.estado color="red" @change="updatestate(item)" hide-details>
                                    </v-switch>
                                </div>

                            </v-card-actions>

                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>


</template>




<script>
import axios from "axios";
import client from "./pocket.js"
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