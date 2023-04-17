<template>
    
       
            <v-navigation-drawer floating permanent color="black" >
                <div>
                    <v-card class="mx-auto" max-width="344" color="black">
                        <div class="d-flex justify-space-around" id="icono">
                            <v-icon color="white" icon="mdi-account-circle" size="150">
                            </v-icon>
                        </div>


                        <v-card-title class="text-center">
                            Chef
                        </v-card-title>
                    </v-card>
                </div>
                <v-divider></v-divider>

                <v-list density="compact" nav>

                    <v-btn rounded="lg" color="#781919" block="" to="/chef">
                        <p>Menu</p>
                    </v-btn>
                    <div class="sep"></div>
                    <v-btn rounded="lg" color="#781919" block="" to="/chef/pedidos">
                        <p>Pedidos</p>
                    </v-btn>
                    <div class="sep"></div>
                    <v-btn rounded="lg" color="#781919" block="" to="/chef/ingredientes">
                        <p>Ingredientes</p>
                    </v-btn>
                </v-list>
            </v-navigation-drawer>
            
            
        


</template>        
   
    
<script>


export default {
    components: {
        
    }
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
    


















<!-- <template>
    <v-card color="black">
        <v-layout>
            <v-navigation-drawer floating permanent color="black">
                <div>
                    <v-card class="mx-auto" max-width="344" color="black">
                        <div class="d-flex justify-space-around" id="icono">
                            <v-icon color="white" icon="mdi-account-circle" size="150">
                            </v-icon>
                        </div>


                        <v-card-title class="text-center">
                            Chef
                        </v-card-title>
                    </v-card>
                </div>
                <v-divider></v-divider>

                <v-list density="compact" nav>

                    <v-btn rounded="lg" color="#781919" block="" to="/chef">
                        <p>Menu</p>
                    </v-btn>
                    <div class="sep"></div>
                    <v-btn rounded="lg" color="#781919" block="" to="/chef/pedidos">
                        <p>Pedidos</p>
                    </v-btn>
                    <div class="sep"></div>
                    <v-btn rounded="lg" color="#781919" block="" to="/chef/ingredientes">
                        <router-link to="/chef/ingredientes">Ingredientes</router-link>
                    </v-btn>
                </v-list>
            </v-navigation-drawer>


            <v-main style="height: 745px width: 100;" >
                <ingredientes/>
            </v-main>


        </v-layout>
    </v-card>

    <router-view/>
</template>

<script>
// import ListaMenu from './ListaMenu.vue';
// import pedidos from './PedidosCom';
import ingredientes from './IngredientesCom';
// import router from "@/router/router"
    export default{
        name: 'barPage',
        // components:{ ListaMenu }
        // components: {
        //     pedidos
        // }
        components:{ingredientes},
        computed: {
            isMenu(){
                return this.$route.name === "#/chef"
            },
            isIng(){
                return this.$route.name === "/#/chef/ingredientes"
            },
            isPed(){
                return this.$route.name === "pedido"
            },
            
            
            
        }
    }

</script>

<style scoped>
p {
    color: white;
}

.sep {
    margin-block-end: 15px;
}

</style> -->