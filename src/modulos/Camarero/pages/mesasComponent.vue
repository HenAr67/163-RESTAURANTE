<template>
    <h1 class="text-center"> Productos Populares</h1>
    <v-item-group selected-class="bg-primary">
        <v-container>
            <v-row dense>
                <v-col v-for="item in result" :key="item" cols="12" md="4" color="black">
                    <v-item>
                        <v-card class="mx-auto" max-width="344" color="#781919" rounded="50">
                            <v-card-title color="primary">
                                <div class="texto">Mesa Nro{{item.nro}}</div>
                            </v-card-title>
                            <v-img src="./pngegg.png">

                            </v-img>
                            <!-- <v-img src="./pngegg.png" height="200px" cover></v-img> -->
                            <v-card-title color="black">
                                <!-- <div class="texto">Mesa Nro</div> -->
                                <p v-if="item.disponible" style="color: white">Disponible</p>
                                <p v-else style="color: white">Ocupado
                                    <v-btn color="black" @click="OpenModal(item.nro)">
                                        Ver pedido
                                    </v-btn>
                                </p>
                            </v-card-title>









                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
    <modal-camarero @CloseModalEvent="ActiveModal" :flagModal="flagAvtiveModal" :pedido="pedido"
        :precioTotal="precioTotal" />
</template>
    
    
<script>
import axios from "axios";
import client from "../../Chef/pages/pocket"
import ModalCamarero from "./modalCamarero.vue"
export default {
    data: () => ({
        flagAvtiveModal: true,
        precioTotal: 0,
        show: false,
        result: null,
        model: true,
        pedido: null
    }),
    async created() {
        let response = await axios.get("https://rst.fly.dev/api/collections/mesas/records");
        this.result = response.data.items;
        // console.log(this.result)
        this.suscripcion();
    },
    methods: {
        OpenModal(id) {
            this.getpedido(id)
            // console.log(this.pedido)
            this.flagAvtiveModal = true;
        },
        ActiveModal(value) {
            this.flagAvtiveModal = value;
        },
        async getpedido(nro) {
            this.pedido = null
            let url = "https://rst.fly.dev/api/collections/pedidos/records?filter=(cobrado%3DFalse%20%26%26%20mesaa%3D" + nro + ")"
            let response = await axios.get(url);
            if (response.data.items[0] != null && response.data.items[0] != "") {
                this.pedido = response.data.items[0].pedidos;
                this.precioTotal = 0
                if (this.pedido != null) {
                    for (let i = 0; i < this.pedido.length; i++) {
                        this.precioTotal = this.precioTotal + Number(this.pedido[i].precio);
                    }
                }

            }

            console.log(this.pedido)
        },
        suscripcion() {
            client.realtime.subscribe("mesas", this.rerendering);
        },
        async rerendering() {
            // console.log(e)
            let response = await axios.get("https://rst.fly.dev/api/collections/mesas/records");
            this.result = response.data.items;
        }
    },
    mounted() {
        this.flagAvtiveModal = false;
    },
    components: { ModalCamarero }
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