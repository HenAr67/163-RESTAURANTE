<template>
    <v-dialog v-model="dialog" theme="dark">
        <v-card>
            Mesa {{}}:
            <v-table theme="dark">
                <thead>
                    <tr>
                        <th class="text-left">cantidad</th>
                        <th class="text-left">Descripcion</th>
                        <th class="text-left">Precio</th>
                    </tr>
                </thead>
                <tbody v-if="pedido!=null">
                    <tr v-for="i in pedido" :key="i.cantidad">
                        <td>{{i.cantidad}}</td>
                        <td>{{i.nombre}}</td>
                        <td>{{i.precio}}</td>
                        <td>
                            <v-btn color="#781919">Eliminar Pedido</v-btn>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            ------------- <br>
                            total:
                            <br>
                            {{precioTotal}}
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-card>
                <v-btn color="#781919" @click="CloseModal()">
                    Agregar Pedido
                </v-btn>
            </v-card>
            Nota
            <input type="text">
            <v-card>
                <v-btn color="#781919" @click="CloseModal()">
                    confirmar Pedido
                </v-btn>
            </v-card>
        </v-card>
    </v-dialog>

</template>

<script>
// import axios from "axios";
export default {

    props: {
        flagModal: {
            type: Boolean,
            default: false,
        },
        pedido: {
            type: Array,
            default: null
        },
        precioTotal: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            dialog: this.flagModal,
        };
    },
    watch: {
        flagModal: {
            immediate: true,
            handler() {
                this.dialog = this.flagModal;
            },
        },
    },
    created() {
        // this.calcularPrecio()
    },
    methods: {
        CloseModal() {
            this.$emit("CloseModalEvent", false);
        },
    },
};
</script>

<style scoped>
input {
    border: #ffffff 2px solid;

}
</style>