<template>
    <h1 class="text-center" style="color:white">Ingredientes</h1>
    <v-card color="#121013" flat tile>
        <v-table>
            <thead>
                <tr style="background-color: #333031">
                    <th class="text-center">
                        Ingrediente
                    </th>
                    <th class="text-center">
                        Cantidad
                    </th>
                    <th class="text-center">

                    </th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td class="text-center">{{ item.nombre }} </td>
                    <!-- <td class="text-center">{{ item.stock }} [{{item.unidades}}]</td> -->
                    <td style="with:50px">

                        <v-text-field v-model="item.stock" :label=item.unidades variant="outlined"
                            clear-icon="mdi-close-circle" clearable @click:clear="borrarItem(item.id)">

                        </v-text-field>

                    </td>
                    <td>
                        <p>
                            <v-btn v-if="!pedidos[item.id]" rounded="sm" color="#781919" @click="adder(item.id,item.nombre,item.stock)">
                                <p style="color:white">Agregar Ingrediente</p>
                            </v-btn>

                            <v-btn v-else rounded="sm"  color="black" disabled @click="adder(item.id,item.nombre,item.stock)">
                                <p style="color:white">Agregar Ingrediente</p>
                            </v-btn>
                        </p>
                    </td>
                </tr>


            </tbody>
        </v-table>
    </v-card>
    <!-- <div class="text-center" style="background-color:black;width: 100%; padding: 5px;">
        <v-btn rounded="sm" color="#B21F22">
            <p style="color:white">Hacer Solicitud</p>
        </v-btn>
    </div> -->
    <v-divider></v-divider>

    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="auto">
            <div class="text-center">
                <v-dialog v-model="dialog">
                    <template v-slot:activator="{ props }">
                        <v-btn color="#781919" v-bind="props">
                            <p style="color:white">Hacer Solicitud</p>
                        </v-btn>


                    </template>
                    <v-card color="black">
                        <v-card-title>Realizar Pedido</v-card-title>
                        <v-card-text>
                            <v-table color="black">
                                <thead>
                                    <tr style="background-color: black">
                                        <th class="text-left">
                                            Ingrediente
                                        </th>
                                        <th class="text-left">
                                            Cantidad
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="pedido in pedidos" :key="pedido.nombre">
                                        <td>
                                            {{pedido.nombre}}

                                        </td>
                                        <td>
                                            {{pedido.cantidad}}
                                        </td>

                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card-text>


                        <v-btn color="#781919" @click="dialog = false,hacerpedido()">
                            <p style="color:white">
                                CONFIRMAR
                            </p>
                        </v-btn>
                        <v-divider></v-divider>
                        <v-btn color="#781919" @click="dialog = false">
                            <p style="color:white">
                                CANCELAR
                            </p>
                        </v-btn>



                    </v-card>
                </v-dialog>
            </div>

        </v-col>

        <v-col cols="auto">
            <div class="text-center">
                <v-dialog v-model="dialog2">
                    <template v-slot:activator="{ props }">
                        <v-btn color="#781919" v-bind="props" @click="getSolicitud()">
                            <p style="color:white">Historial</p>
                        </v-btn>


                    </template>
                    <v-card color="black">
                        <v-card-title>Solicitudes realizadas</v-card-title>
                        <v-card-text>

                            <v-expansion-panels v-for="dta in histSolicitud" :key="dta">


                                <v-expansion-panel bg-color="#333031">
                                    <v-expansion-panel-title>
                                        <v-row>
                                            <v-col cols="6" class="d-flex justify-end">
                                                <h5 v-if="dta.entregado==true" style="color:green" class="text-center">
                                                    Pedido de {{dta.created.split(" ")[0]}}</h5>
                                                <h5 v-else-if="dta.entregado==false" style="color:white"
                                                    class="text-center">Pedido de {{dta.created.split(" ")[0]}}</h5>
                                            </v-col>

                                        </v-row>
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text>


                                        <v-table>
                                            <thead>
                                                <tr style="background-color: #333031">
                                                    <th class="text-center" style="color: white">
                                                        Nombre
                                                    </th>
                                                    <th class="text-center" style="color: white">
                                                        Cantidad
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in dta.ingredientes" :key="item.nombre"
                                                    style="color:#96939A">
                                                    <td class="text-center" style="background-color: #333031">{{
                                                    item.nombre }}</td>
                                                    <td class="text-center" style="background-color: #333031">{{
                                                    item.cantidad }}
                                                    </td>

                                                </tr>

                                            </tbody>
                                        </v-table>



                                    </v-expansion-panel-text>
                                </v-expansion-panel>





                            </v-expansion-panels>
                        </v-card-text>


                        <v-btn color="#781919" @click="dialog2 = false">
                            <p style="color:white">
                                Cerrar
                            </p>
                        </v-btn>
                    </v-card>
                </v-dialog>
            </div>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>






</template>

<script>
import axios from "axios";
import client from "./pocket.js";
export default {
    data() {
        return {
            data: null,
            pedidos: {},
            dialog: false,
            dialog2: false,
            histSolicitud: null
        }

    },
    async created() {
        let response = await axios.get("https://rst.fly.dev/api/collections/ingredientes/records")
        this.data = response.data.items
        // console.log(this.data)
        // let g = ["zp3m3ahno768wpv", "94slhvkylvbelz8"]
    },
    methods: {
        adder(ident, nombre, cantidad) {
            // console.log(id,nombre,stock)
            let datos = {
                "nombre": nombre,
                "cantidad": cantidad
            }
            if (cantidad > 0)
                this.pedidos[ident] = datos
            // console.log(this.pedidos)
        },
        borrarItem(id) {
            delete this.pedidos[id]
            // console.log(this.pedidos)
        },

        async hacerpedido() {
            const datos = {
                "entregado": "false",
                "ingredientes": this.pedidos
            }
            await client.records.create('solicitudIngredientes', datos);
        },
        async getSolicitud() {
            let res = await client.records.getFullList('solicitudIngredientes', 200 /* batch size */, {
                sort: '-created',
            });
            this.histSolicitud = res
            // console.log(this.histSolicitud)
        }
    }


}
</script>


<style>
th {
    color: #B21F22;
}

td {
    background-color: #333031;
    color: white;
}
</style>