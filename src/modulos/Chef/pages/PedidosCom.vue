<template>
    <v-card color="#121013" flat tile>
        <v-window v-model="onboarding">
            <div class="v-container text-center">
                <h1 style="color: white">Pedidos</h1>
            </div>

            <v-expansion-panels v-for="dta in data" :key="dta">


                <v-expansion-panel bg-color="#333031">
                    <v-expansion-panel-title v-slot="{ open }">
                        <v-row no-gutters>
                            <v-col cols="6" class="d-flex justify-end">
                                <h5 class="text-center">Pedido mesa {{dta.mesaa}}</h5>
                            </v-col>
                            <v-col cols="6" class="text--secondary">
                                <v-fade-transition leave-absolute>
                                    <span v-if="open" key="0">
                                        Select trip destination
                                    </span>
                                    <span v-else key="1">
                                        {{ trip.location }}
                                    </span>
                                </v-fade-transition>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>


                        <v-table>
                            <thead>
                                <tr style="background-color: #333031">
                                    <th class="text-center" style="color: white">
                                        Cantidad
                                    </th>
                                    <th class="text-center" style="color: white">
                                        Descripcion
                                    </th>
                                    <th class="text-center" style="color: white">
                                        extras
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in dta.pedidos" :key="item.nombre" style="color:#96939A">
                                    <td class="text-center" style="background-color: #333031">{{ item.cantidad }}</td>
                                    <td class="text-center" style="background-color: #333031">{{ item.nombre }}
                                    </td>
                                    <td class="text-center" style="background-color: #333031">{{ item.extras }}</td>
                                </tr>
                                <tr>
                                    <td class="text-center" style="background-color: #333031"></td>
                                    <td class="text-center" style="background-color: #333031">
                                        <v-btn rounded="lg" color="#B21F22" @click="pedidolisto(dta)">
                                            <p style="color:white">Pedido listo</p>
                                        </v-btn>
                                    </td>
                                    <td class="text-center" style="background-color: #333031"></td>
                                </tr>
                            </tbody>
                        </v-table>



                    </v-expansion-panel-text>
                </v-expansion-panel>





            </v-expansion-panels>

        </v-window>


    </v-card>
</template>

<script>
import axios from "axios";
import client from "./pocket.js"
export default {
    data: () => ({
        length: 3,
        onboarding: 0,
        date: null,
        trip: {
            name: '',
            location: null,
            start: null,
            end: null,
        },
        locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
        data: null,
        mesas: null,
    }),

    methods: {
        next() {
            this.onboarding = this.onboarding + 1 > this.length
                ? 1
                : this.onboarding + 1
        },
        prev() {
            this.onboarding = this.onboarding - 1 <= 0
                ? this.length
                : this.onboarding - 1
        },
        async getpedidos() {
            let response = await axios.get("https://rst.fly.dev/api/collections/pedidos/records?filter=pedidoListo=false")
            this.data = response.data.items
            // console.log(this.data)
        },
        async getmesas() {
            let response = await axios.get("https://rst.fly.dev/api/collections/mesas/records")
            this.mesas = response.data.items
        },
        getnromesa(ide) {
            this.mesas.forEach(element => {
                if (element.id === ide) {
                    return element.nro
                }
            });
        },
        async pedidolisto(pedido) {
            let data = {
                "pedidoListo": "true"
            }
            // await axios.patch("https://rst.fly.dev/api/collections/pedidos/records/"+pedido.id,data)
            await client.records.update("pedidos", pedido.id, data)

        },
        suscripcion() {
            client.realtime.subscribe('pedidos',this.addnoshow);
        },
        async addnoshow(){
            //  console.log(e.record.id);
            //     this.noshow.push(e.record.id)
            //     console.log(this.noshow)
            await this.getpedidos();
        }
    },
    async created() {
        await this.getpedidos();
        await this.getmesas();
        this.suscripcion();



    }
}
</script>

<style>
h3 {
    color: white;
}

h5 {
    color: white;
}
</style>