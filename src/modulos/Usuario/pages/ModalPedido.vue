<template>
  <v-dialog v-model="dialog" persistent theme="dark">
    <v-card>
      <v-card-text>
        pedidos
        <v-table theme="dark" fixed-header height="100%">
          <thead>
            <tr>
              <th class="text-left">cantidad</th>
              <th class="text-left">descripcion</th>
              <th class="text-left">precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in pedidos" :key="i.catidad">
              <td>{{ i.cantidad }}</td>
              <td>{{ i.nombre }}</td>
              <td>{{ i.precio }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>-------------- <br />{{ precioTotal }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
      <v-card-text> Cajero: </v-card-text>
      <v-card-actions>
        <v-btn class="boton" color="purple-darken-2" @click="confirmarPago()">
          <p>confirmar pago</p>
        </v-btn>
        <v-btn class="boton" color="primary" @click="CloseModal()">
          <p>Cancelar</p>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
import axios from "axios";
export default {
  props: {
    flagModal: {
      type: Boolean,
      default: false,
    },
    // id_p: {
    //   type: String,
    // },
    pedidos: {
      type: Array,
    },
    // id_cliente: {
    //   type: String,
    // },
  },
  data() {
    return {
      dialog: this.flagModal,
      pedido: null,
      precioTotal: 0,
      nombre: null,
      apellido: null,
      ci: null,
      cliente: null,
    };
  },
  watch: {
    flagModal: {
      immediate: true,
      handler() {
        this.dialog = this.flagModal;
        this.cargarCliente();
        this.calcularPrecio();
      },
    },
  },
  async created() { },
  methods: {
    CloseModal() {
      this.$emit("CloseModalEvent", false);
    },
    async confirmarPago() {
      let id = this.id_p;
      let data = {
        cobrado: true,
      };
      await axios.patch(
        "https://rst.fly.dev/api/collections/pedidos/records/" + id,
        data
      );
      this.CloseModal();
    },
    async cargarCliente() {
      if (this.id_cliente != null && this.id_cliente != "") {
        let response = await axios.get(
          'https://rst.fly.dev/api/collections/systemprofiles0/records?filter=userId="' +
          this.id_cliente +
          '"'
        );
        let c = response.data.items[0];
        this.nombre = c.nombre;
        this.apellido = c.apellido;
        this.ci = c.ci;
      } else {
        this.nombre = null;
        this.apellido = null;
        this.ci = null;
      }
    },
    calcularPrecio() {
      this.precioTotal = 0;
      if (this.pedidos != null) {
        for (let i = 0; i < this.pedidos.length; i++) {
          this.precioTotal = this.precioTotal + Number(this.pedidos[i].precio);
        }
      }
    },
  },
};
</script>

<style scoped>
.boton {
  background: #781919;
}

.datos {
  color: #d16464;
}

.v-text-field {
  width: 140px;
}

input {
  border: #ffffff 1px solid;
  border-radius: 5px;
  width: 170px;
  padding: 4px;
}

#ci {
  width: 100px;
}

.v-dialog {
  border: #ffffff 1px solid;
  border-radius: 10px;
}
</style>