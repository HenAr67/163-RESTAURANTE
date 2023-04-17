import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
  //Cliente
    { 
      path: '/', 
      component: ()=> import (  "@/modulos/Usuario/pages/inicioPage") 
    },
    { 
      path: '/productos', 
      component: ()=> import ( "@/modulos/Usuario/pages/productosPage") 
    },
    { 
      path: '/login', 
      component: ()=> import (  "@/modulos/Usuario/pages/loginPage")
    },
    { 
      path: '/about', 
      component: ()=> import ( "@/modulos/Usuario/pages/AboutPage")
    },
    { 
      path: '/registrar', 
      component: ()=> import ( "@/modulos/Usuario/pages/RegistroCliente")
    },

    //Camarero
    
    { 
      path: '/camarero/mesas', 
      component: ()=> import (  "@/modulos/Camarero/pages/MesasPage") 
    },
    //administrador
    { 
      path: '/admi', 
      component: ()=> import ( "@/modulos/Administrador/pages/CuentasClientes") 
    },
    { 
      path: '/admi/CuentasClientes', 
      component: ()=> import ( "@/modulos/Administrador/pages/CuentasClientes") 
    },
    { 
      path: '/admi/CuentasEmpleados', 
      component: ()=> import (  "@/modulos/Administrador/pages/CuentasEmpleados")
    },
    { 
      path: '/admi/Menu', 
      component: ()=> import ( "@/modulos/Administrador/pages/MenuRestaurante")
    },
    { 
      path: '/admi/registro', 
      component: ()=> import ( "@/modulos/Administrador/pages/RegistroUsuario")
    },
    //chef
    { 
      path: '/chef', 
      component: ()=> import ( "@/modulos/Chef/pages/MenuPage") 
    },
    { 
      path: '/chef/Pedidos', 
      component: ()=> import ( "@/modulos/Chef/pages/PedidosPage") 
    },
    { 
      path: '/chef/ingredientes', 
      component: ()=> import (  "@/modulos/Chef/pages/IngredientesPage")
    },
   //cajero
   { 
    path: '/cajero', 
    component: ()=> import ( "@/modulos/Cajero/pages/RegistrarCliente") 
  },
  { 
    path: '/cajero/cobro', 
    component: ()=> import ( "@/modulos/Cajero/pages/CobroPage") 
  },
  { 
    path: '/cajero/informe', 
    component: ()=> import (  "@/modulos/Cajero/pages/InformePage")
  },




    //es para mandarlo al 404
    // { 
    //   path: '/:pathMatch(.*)*', 
    //   component: ()=> import ( "@/modulos/cliente/pages/About")
    // }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

export default router