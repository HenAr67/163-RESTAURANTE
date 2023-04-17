<template>
  <v-card theme="dark">
    fecha de inicio
    <v-card>
      <input
        type="date"
        v-model="start_date"
        :format="'YYYY.MM.DD'"
        @click="obtenerPedidos()"
      />
    </v-card>
    fecha de finalizacion
    <v-card>
      <input
        type="date"
        v-model="ending_date"
        :format="'YYYY.MM.DD'"
        @click="obtenerPedidos()"
      />
    </v-card>
  </v-card>
  <v-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">Año</th>
        <th class="text-left">Mes</th>
        <th class="text-left">Ingresos</th>
        <th class="text-left">Egresos</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ año, mes, ingreso, egreso } in informe" :key="año">
        <td>{{ año }}</td>
        <td>{{ mes }}</td>
        <td>{{ ingreso }}</td>
        <td>{{ egreso }}</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>total ingreso:</td>
        <td>total egreso:</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      start_date: new Date().toISOString().substr(0, 10),
      ending_date: new Date().toISOString().substr(0, 10),
      informe: [
        {
          año: 2022,
          mes: "enero",
          ingreso: 100,
          egreso: 100,
        },
      ],
      pedidos: null,
    };
  },
  async created() {
    this.generarInforme();
  },
  watch: {},
  methods: {
    alerta(s) {
      alert(s);
    },
    async obtenerPedidos() {
      let response = await axios.get(
        `https://rst.fly.dev/api/collections/pedidos/records?filter(created>${this.start_date} && created>${this.ending_date} )`
      );
      this.pedidos = response.data.items;
      // console.table(response.data.items);
      console.log("contando");
      this.generarInforme();
    },
    generarInforme() {
      if (this.pedidos != null) {
        for (var i of this.pedidos) {
          let p_=i.pedidos
          if (p_ != null) {
            // for (var j of i.pedidos) {
            //   console.log(j);
            // }
            for (let i = 0; i < p_.length; i++) {
              console.log(p_[i].precio)
            }
          }
          console.table(i.pedidos);
        }
      }
    },
    verificar() {},
  },
};
</script>

<style scoped>
.v-card {
  margin: 10px;
  padding: 10px;
  color: #b21f22;
}
.v-table {
  margin: 10px;
}
</style>