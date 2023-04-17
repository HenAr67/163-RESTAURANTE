<template>
  <v-navigation-drawer floating permanent color="black">
    <div>
      <v-card class="mx-auto" max-width="344" color="black">
        <div class="d-flex justify-space-around" id="icono">
          <v-icon color="white" icon="mdi-account-circle" size="150"> </v-icon>
        </div>

        <v-card-title class="text-center"> Cajero </v-card-title>
      </v-card>
    </div>
    <v-divider></v-divider>

    <v-list density="compact" nav>
      <div class="sep"></div>
      <v-btn rounded="lg" color="#781919" block="" to="/cajero">
        <p>Cobro-Facturacion</p>
      </v-btn>
      <div class="sep"></div>
      <v-btn rounded="lg" color="#781919" block="" to="/cajero/informe">
        <p>Informe</p>
      </v-btn>
    </v-list>
  </v-navigation-drawer>
</template>        
   
    
<script>
export default {
  components: {

  },
}
</script>
    
<style>
p {
  color: white;
}

.sep {
  margin-block-end: 15px;
}
</style>