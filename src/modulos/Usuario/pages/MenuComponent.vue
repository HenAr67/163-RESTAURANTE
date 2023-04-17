<template>
    <h1 class="text-left"> Productos Populares</h1>
    <v-btn rounded color="#781919" height="35px" width="220px">
        <p style="color:white" @click="OpenModal()"> Realizar Pedidos </p>
    </v-btn>
    <v-car theme="dark">
        total pedidos: {{}}
    </v-car>

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
                                <v-btn color="white" id="btn" @click="añadir(item.nombre,item.precio,)">Agregar</v-btn>
                            </v-card-actions>

                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
    <modal-pedido @CloseModalEvent="ActiveModal" :flagModal="flagAvtiveModal" :pedidos="lista" />

</template>


<script>
import axios from "axios";
import client from "../../Chef/pages/pocket"
import ModalPedido from "./ModalPedido.vue";
export default {
    data: () => ({
        flagAvtiveModal: true,
        show: false,
        result: null,
        model: true,
        lista: [],
        pedidos: []
    }),
    async created() {
        let response = await axios.get("https://rst.fly.dev/api/collections/productos/records?perPage=3");
        this.result = response.data.items;
        console.table(this.result)
        this.suscripcion();
    },
    methods: {
        OpenModal() {
            this.flagAvtiveModal = true;
        },
        ActiveModal(value) {
            // this.cargarPedido()
            this.flagAvtiveModal = value;
        },
        suscripcion() {
            client.realtime.subscribe("productos", this.rerendering);
        },
        async rerendering(e) {
            console.log(e);
            let response = await axios.get("https://rst.fly.dev/api/collections/productos/records?perPage=3");
            this.result = response.data.items;
        },
        añadir(nom, prec) {
            const existe = this.lista.some(nomb => nomb.nombre === nom)
            console.log(existe)
            if (existe) {
                this.lista.push({
                    catidad: 0,
                    nombre: nom,
                    precio: prec
                });
            } else {
                this.lista.push({
                    catidad: 0,
                    nombre: nom,
                    precio: prec
                });
            }
        }
    },
    mounted() {
        this.flagAvtiveModal = false;
    },
    components: { ModalPedido }
}
</script>
    
<style scoped>
.texto {
    color: white;
}

h1 {
    color: white;
    display: inline-flex;
}

v-img {
    border-radius: 50px;
}

.boton {
    float: right;
}
</style>