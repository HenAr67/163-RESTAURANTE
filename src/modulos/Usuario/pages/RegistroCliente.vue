<template>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registrarse</title>
  </head>
  <body>
    <div class="formulario">
      <h1>Pollos</h1>
      <h1 style="color: #781919">Hermanos</h1>
      <form method="post">
        <div class="username">
          <input type="text" id="nombre" required />
          <label>Ingrese su nombre</label>
        </div>
        <div class="username">
          <input type="text" id="apellido" required />
          <label>Ingrese su apellido</label>
        </div>
        <div class="username">
          <input type="password" id="password" required />
          <label>Ingrese su password</label>
        </div>
        <div class="username">
          <input type="text" id="ci" required />
          <label>Ingrese su ci</label>
        </div>
        <div class="username">
          <input type="text" id="correo" required />
          <label>Ingrese su correo electronico</label>
        </div>

        <v-btn color="#EB0E0E " height="50px" width="100%" @click="iniciar()"> <p style="color:white">Registrarme</p></v-btn>
        <!-- <button name="Registro">Registrarme</button> -->
      </form>
    </div>
  </body>
</template>

<style scoped>
body{
    margin: 0;
    padding: 0;
    font-family: montserrat;
    background: black;
    height: 100vh;
} 
.formulario{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 400px;
    background: #4B494C;
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
button[name="Registro"]{
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
}
</style>
<script>
import axios from 'axios';



export default {
    methods:{
        async iniciar(){
        var nombre=document.getElementById("nombre").value;
        var ape=document.getElementById("apellido").value;
        var passwordd=document.getElementById("password").value;
        var ci=document.getElementById("ci").value;
        var correoo=document.getElementById("correo").value;
          let data = {
            "email":correoo,
            "password":passwordd,
            "passwordConfirm":passwordd
          }

        let resp =await axios.post("https://rst.fly.dev/api/users",data)
        let idnew = resp.data.profile.id
        console.log(resp.data)
        console.log(idnew) 
          data={
            "nombre":nombre,
            "apellido":ape,
            "ci":ci,
            "rol":"usuario"
          }
        resp = await axios.patch("https://rst.fly.dev/api/collections/systemprofiles0/records/"+idnew,data)
        console.log(resp)


    }
    }
}

    

    

</script>