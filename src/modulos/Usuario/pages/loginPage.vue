<template>
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ingreso de sesion a Pollos Hermanos</title>

  </head>
  <body>
    <div class="contenedor-formulario contenedor">
      <div class="logo">
          <h1></h1>
      </div>
      <div class="formulario">
        <h1 style="color:white">Pollos</h1>
        <h1 style="color:#EB0E0E ">Hermanos</h1>
        <form method="post">
          <div class="username">
            <input type="text" name="correo" id="correo" required />
            <label>Ingrese su correo</label>
          </div>
          <div class="username">
            <input type="password" name="contraseña" id="contra" required />
            <label>Ingrese su contraseña</label>
          </div>
          <div class="recordar">¿Olvido su contraseña?</div>
          <v-btn color="#EB0E0E " height="50px" width="100%" @click="iniciar()"> <p style="color:white">Iniciar Sesion</p> </v-btn> 
           <v-divider thickness="10px" ></v-divider> 

          <v-btn color="#EB0E0E " height="50px" width="100%" to="/registrar"> <p style="color:white">Registrarme</p></v-btn>        
        </form>
      </div>
    </div>
  </body>
</template>

<style>
.p{
    color:white
    
}
:root{
    --Gris:#4B494C;
    --negro: #121013;
    --plomo:#BAB9B9;
    --blanco: #fff;
    --fuente:'Quicksand',sans-serif;
}
body{
    font-family: var(--fuente);
    background-color: #121013;
}
*,*::after,*::before{
    box-sizing: inherit;
}
.contenedor{
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;
}
.contenedor-formulario{
    display: flex;
}
.logo{
    background-image: url('pollos2.png');
    background-position: center center;
    background-size: cover;
    flex: 0 0 calc(60%);
}
.formulario{
    padding: 70px;
    background-color: var(--Gris);
    border-radius: 10px;
}

.formulario h1{
    text-align: center;
    padding: 0 0 20px 0;
    border-bottom: 1px solid silver;
}
.formulario form{
    padding: 0 40px;
    box-sizing: border-box;
}
form .username {
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
}
.username input{
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
    color:#adadad;
}
.username label{
    position: absolute;
    top:50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
}
.username span::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #781919;
    transition: .5s;
}
.username input:focus ~ label,
.username input:focus ~ label{
    top: -5px;
    color: #781919;
}
.username input:focus ~ span:before,
.username input:focus ~ span:before{
    width: 100%;
}
.recordar{
    margin: -5px 0 20px 5px;
    color: blue;
    cursor: pointer;
}
.recordar :hover{
    text-decoration: underline;
}
/* button[name="Inicio"]{
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #781919;
    border-radius: 25px;
    font-size: 18px;
    color: silver;
    cursor: pointer;
    outline: none;
    margin-bottom: 10px;
}
button[name="Inicio"]:hover{
    border-color: silver;
    transition: .5s;
}
btn[name="Registro"]{
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #781919;
    border-radius: 25px;
    font-size: 18px;
    color: silver;
    cursor: pointer;
    outline: none;
    margin-bottom: 10px;
}
button[name="Registro"]:hover{
    border-color: silver;
    transition: .5s;
} */
</style>
<script>


export default {
    methods:{
        iniciar(){
        var correo=document.getElementById("correo").value;
        var contra=document.getElementById("contra").value;
        console.log(correo+" "+contra)
    }
    }
}

    

    

</script>