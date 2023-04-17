<template>
  <v-table theme="dark" fixed-header height="100%">
    <thead>
      <tr>
        <th class="text-left">Nro</th>
        <th class="text-left">Cliente</th>
        <th class="text-left">nroMesa</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, index) in orders" :key="i.mesaa">
        <td>{{ index }}</td>
        <td>{{ i.cliente }}</td>
        <td>{{ i.mesaa }}</td>
        <td>
          <v-btn color="#781919" @click="OpenModal(i.id,i.pedidos,i.cliente)">Cobrar</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  <modal-factura
    @CloseModalEvent="ActiveModal"
    :flagModal="flagAvtiveModal"
    :id_p="id_"
    :pedidos="pedido_"
    :id_cliente="id_c"
  />
</template>
<script>
import ModalFactura from "./modalFactura.vue";
import axios from "axios";
export default {
  components: {
    ModalFactura,
  },
  data() {
    return {
      flagAvtiveModal: true,
      orders: null,
      id_: null,
      pedido_:null,
      id_c:null
    }
  },
  async created() {
    this.cargarPedido()
  },
  methods: {
    OpenModal(id,pedidos,cliente) {
      this.flagAvtiveModal = true;
      this.id_ = id;
      this.pedido_ = pedidos
      this.id_c=cliente
    },
    ActiveModal(value) {
      this.cargarPedido()
      this.flagAvtiveModal = value;
    },
    async cargarPedido() {
      let response = await axios.get(
        "https://rst.fly.dev/api/collections/pedidos/records?filter=cobrado=false"
      );
      this.orders = response.data.items;
    },
  },
  mounted() {
    this.flagAvtiveModal = false;
  },
};
</script>

<style scoped>
.v-table{
  padding: 10px;
  border: #ffffff 1px solid;
  border-radius: 10px;
}
</style>