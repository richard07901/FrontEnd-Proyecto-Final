<template>
    <div>
        <!-- Inicia Header -->
        <header>
            <nav id="nav" class="nav1">
                <div class="contenedor-nav">
                    <div class="logo">
                        <img src="../../assets/presto.png">
                    </div>
                    <div class="enlaces" id="enlaces">
                        <a href="/prueba"  id="enlace-nosotros" class="btn-header" >Inicio</a>
                        <a href="" id="ctn-icon-search" class="btn-header Ibuca" @click.prevent="servicios=true">Servicios</a>	
                    </div>
                    <div class="nav-icon" id="nav-icon" >
                        <span  class="cta3">
                            <i class="far fa-edit"></i>
                            <p @click="registro=true" class="tex_icon_menu">Registrarse</p>
                        </span>
                        <span   class="cta2">
                            <i class="fas fa-sign-in-alt"></i>
                            <p @click="sesion=true" class="tex_icon_menu">Iniciar Sesión</p>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
        <!-- Finaliza Header -->

       <!-- Inicia Iniciar Sesion -->
        <!-- <the-login v-if="sesion"></the-login> -->

        <div class="modal-container1 w3-container w3-center w3-animate-top" v-if="sesion">
            <div class="modal1 modal-close">
                <button @click="sesion=false" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img  src="../../assets/presto.png" class="logoSesion">
                    <!--Contenedor principal-->
                <div class="contenedor_prinSesion">	
                    <!--Formulario-->
                    <form class="formularioSesion">
                        <p class="tituloIniciar"><strong>Iniciar</strong></p>
                        <h1 class="titulo1Sesion">
                            Inicia sesión para continuar en <br />
                            <p class="tituloSesion1"><strong>PRESTO</strong></p>
                        </h1>
                        <input v-model="login.email" style="border-left: none;border-top:4px solid 	#FF0000; border-right: none;border-bottom: 4px solid #FF0000;margin-bottom: 20px; margin-left: 14px;width: 70%;
                        height: 42px;background: #F5F5F5;outline: none; background-image: url(5.png); background-position: 0px 0px;background-repeat: no-repeat; " class="usuarioo" type="text" placeholder="Usuario" name="">
                        <input v-model="login.password" type="password" placeholder="Contraseña" name="">
                        <h1 class="wSesion">
                            
                            <button class="btn btn-primary" type="submit" @click.prevent="loginUser">continuar</button>
                        
                            <p class="ttNoCuentaS">¿No tienes una cuenta?<a href="#" class="linkRegistro" @click.prevent="[registro=true,sesion=false]">registrate</a></p>

                        </h1>
                        <div class="imgSesionIzq" style="text-align: left;">
                            <img class="" src="../../assets/2.png" alt="" width="150">
                        </div>
                        <div class="imgSesionDer" style="text-align: left;">
                            <img  class="" src="../../assets/3.png" alt="" width="100"
                            >
                        </div>
                    </form>
                    <!--Fin formulario-->
                </div>
                <!--Fin contenedor principal-->				
            </div>
	    </div>

        <!-- Finaliza Iniciar Sesion -->

        <!-- Inicia Registrarse -->
        
        <div class="modal-container_intercambio w3-container w3-center w3-animate-top" v-if="registro">
            <div class="modalI modal-closeI">
                <span class="closeI" @click="registro=false"> <i class="fas fa-times"></i></span>
                <div class="divImagen">
                    <img src="../../assets/9.png" alt="" class="imgRegistroIzq">
                    <img src="../../assets/presto.png" class="logoRegistros">
                    <img src="../../assets/11.png" alt="" class="imgRegistroDer">
                </div>
                <div class="contenedor_prinRegistro">
                    <form class="formularioRegistro">
                        <div class="txt_regis">
                            <p class="tituloRegistrar"><strong>Registrar</strong></p>
                            <p class="titulo1Registro">
                                Registrate para ingresar a &nbsp;<strong>PRESTO</strong>
                            </p>
                        </div>				  
                        <div class="datos">
                            <div class="form_d">
                                <div class="div_datos" style="display: flex; align-items: center; justify-content: center;">
                                <input v-model="register.nombre" type="text" placeholder="Nombre de Usuario" class="entrada" style="background-image: url(../../assets/5.png); background-position: 0px 0px;background-repeat: no-repeat;
                                padding-left: 40px ;
                                "
                                >
                                </div>
                                <div class="div_datos">
                                    <input v-model="register.email" type="text" placeholder="Correo Electronico" class="entrada">
                                    <input v-model="register.password" type="password" placeholder="Contraseña" class="entrada">
                                </div>
                            </div>
                        </div>
                        <div class="wRegistro">
                        <div class="bt_regis">
                            <button @click.prevent="registrarse" class="btn btn-primary" type="submit">Registrarse</button>
                        </div>
                            <p class="ttNoCuenta">¿Ya tiene una cuenta?<a href="" class="linkRegistro2" @click.prevent="[sesion=true,registro=false]">Iniciar Sesión</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <!-- Termina Regstrarse -->

        <!-- Inicia Servicios -->
        <div  id="ctn-bars-search" class="w3-container w3-center w3-animate-top" v-if="servicios">
            <div class="cont-logis">
                <div class="imag-logis">
                    <div style="cursor: pointer;">
                        <img  class="logis-img" src="../../assets/13.png" alt=""  @click.prevent="services1">
                        <h1 class="logis-txt" @click.prevent="services1">GPS</h1>
                        <!-- <a href="servicio.html" target="blank" title="">Ver mas </a> -->
                    </div>
                    <div style="cursor: pointer;">
                        <img  class="logis-img" src="../../assets/12.png" alt=""  @click.prevent="services2">
                        <h1 class="logis-txt"  @click.prevent="2">Ubicaciòn en bodega</h1>
                        <!-- <a href="#.html" target="blank" title="">Ver mas </a> -->
                        
                    </div>
                    <div style="cursor: pointer;">
                        <img  class="logis-img" src="../../assets/4.png" alt=""  @click.prevent="services3">
                        <h1 class="logis-txt"  @click.prevent="services3">Motomensajeros</h1>
                        <!-- <a href="#.html" target="blank" title="">Ver mas </a> -->
                    </div>
                </div>
            </div>
            <div id="x-buscador" @click.prevent="servicios=false">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <!-- Termina Servicios -->
    </div>
</template>

<script>
import TheLogin from './TheLogin.vue'
export default {
  components: { TheLogin },
    name: 'TheBarra',
    data() {
        return {
            sesion: false,
            registro: false,
            servicios: false,
            register:{
                nombre: "",
                password: "",
                email: "",
            },
            login:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        async loginUser(){
            try{
                let response = await this.$http.post('/api/usuario/login', this.login)
                console.log(response.data)
                let token = response.data.tokenReturn;
                let user = response.data.user;
                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));
                if(token){
                    swal("Éxito","Login Correcto", "success");
                    this.$router.push('/home');
                }
            }
            catch(e){
                swal("Oops", e.response.data.error ,"error")
                
            }
        },
        async registrarse(){
            try {
                // if (register.username != "" ){
                    let response = await this.$http.post('/api/usuario/register', this.register)
                    console.log(response.data)
                    swal("Éxito","Registro Correcto", "success");
                    this.registro = false;
                    this.sesion = true
                    // this.$router.push('/login');
                // }
                // else{
                    // swal("Fail","Registro Mal", "error")
                // }

            } catch (error) {
                swal("Fail","Registro Incorrecto", "error")
            }
        },
        async services1(){
            this.$router.push('/servicios/servicio1');
        },
        async services2(){
            this.$router.push('/servicios/servicio2');
        },
        async services3(){
            this.$router.push('/servicios/servicio3');
        },
    }
}
</script>

<style scoped>

/* Estilos Servicios */

#ctn-bars-search {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background: #fff;
    padding: 20px;
    transition: all 600ms;
    z-index: 20;
    box-shadow: 0 0 10px rgb(0, 0, 0, .4);
}

.cont-logis {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
}

.imag-logis {
    display: flex;
    justify-content: space-between;
    width: 90%;
}

.img-logis {
    display: flex;
    justify-content: center;
    text-align: center;
}

.logis-img {
    height: 200px;
    width: 200px;
}

#x-buscador {
    cursor: pointer;
}


/* Estilos Registrarse */

/*Tipo de usuarios */

.principalU{
  font-family: 'Open Sans', sans-serif;
  font-size: 25px;
  font-weight: 300;

}
/*imagenes */
.contenedorU{
  text-align: center;
  width: 100%;


}
.contenedor-2U{
 
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
 width: 100%;

  
}
.tipoU{
  margin-top: 20px;
  padding: 10px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  background: #F8FBFD;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.cont-imgU{
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  background: #fff;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.imgU{
  width: 100px;
  height: 100px;
}

/*texto*/

.contenedor-22U{
 
 display: flex;
 justify-content: space-around; 
 flex-wrap: wrap;
 width: 100%;
 margin-bottom: 20px;



}
.nombreU{
 
  padding: 10px;
  width: 200px;
  height: 40px;
  overflow: hidden;
  background:#FDAD30 ;
  text-align: center;
  cursor: pointer;

}

.txt_imagen{
  font-family: 'Open Sans', sans-serif;
   font-size: 15px;
  font-weight: 700;
}
/*link*/
.linkU{
  font-family: 'Open Sans', sans-serif;
  color:#009BCE;
  font-size: 15px;
  font-weight: 300;

}
.registroU{
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 300;
  background: #fff;

}
/*prueba ocultatr*/
.modal-container_intercambio{
  opacity: 1;
  visibility:visible;
  position: fixed;
  z-index: 26;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgb(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalI{
  background-size: cover;
  width: 70%;
  height: 90%;
  background: white;
  
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  transition: transform 1s;
  transform: translateY(0%);
  border-radius: 10px;
  /*overflow: hidden;*/
  
}
.closeI{
  position: absolute;
  top: 5px;
  right: 5px;
  display: inline-block;
  width: 20px;
  height:20px;
  color: #000;
  
  border-radius: 50%;

  cursor: pointer;
}



/*modal formulario*/
.par1{
  margin-top: 20px;
  background: #F8FBFD;
}
.par2{
  visibility:hidden;
  margin-top: 20px;
  background: #069CCC ;
  position: fixed;
  z-index: 9;
}
.par3{
  visibility:hidden;
  margin-top: 20px;
  background: #FDAD30;
  position: fixed;
  z-index: 10;
}

/*modal sesion*/
.modal-container{
  opacity: 1;
  visibility:visible;
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgb(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal{
  background-size: cover;
  width: 40%;
  height: 90%;
  background: white;
  
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  transition: transform 1s;
  transform: translateY(0%);
  border-radius: 10px;
  /*overflow: hidden;*/
  
}
.close{
  position: absolute;
  top: 5px;
  right: 5px;
  display: inline-block;
  width: 20px;
  height:20px;
  color: #000;
  border-radius: 50%;
  cursor: pointer;
}
.modal-close{
  transform: translateY(-200%);
}

.divImagen{
	display:flex;
	justify-content: space-between;
	width: 60%;
	margin-top: 10px;
	z-index: 9;


}

.logoRegistros{
	width: 200px;
  height: 80px;
	
}
.imgRegistroIzq{
	width: 135px;
	height: 135px;
	margin-top: 60px;

	
}
.imgRegistroDer{
	width: 135px;
	height: 135px;
	margin-top: 40px;
}

/**Contenedor principal**/
.contenedor_prinRegistro{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 74%;
	margin-top: -50px;
}
/**Formulario**/
.formularioRegistro {

    background-color: #F5F5F5;
    width: 95%;
    height: 95%;
    padding: 15px;
    box-shadow: 10px 10px #E5E4E4;
    margin-top: -30px;
}

.tituloRegistrar {
	padding: 3px;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #0499D8;
}
/**Titulo del formulario**/
.titulo1Registro {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 0px;
   	margin-right: 3px;
    padding: 3px;
}
.tituloRegistro1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 15px;
    padding: 3px;
}
.txt_regis{
	margin-bottom: 25px;
}



/******** datos *******/
.datos{
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	
	height: 150px;
	

}
.div_datos{
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.datos input[type=text], input[type=password] {
	font-family: 'Open Sans', sans-serif; 
	font-size: 15px;
	padding: 5px 5px;
	height: 40px;
    border-left: none;
    border-top: 4px solid 	#FF0000;
    border-right: none;
    border-bottom: 4px solid 	#FF0000;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-top: 10px;
    width: 250px;
    outline: none;
    background: #F5F5F5;
}
.bt_regis{
	margin-top: 20px;
	 margin-bottom: 5px;
}
.boton_registro{
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    background-color: #0499D8;
    border: none;
    color: white;
    padding: 10px 32px;
    text-decoration: none;
   margin-bottom: 5px;
    font-weight: bold;
    cursor: pointer;
    outline: none;

}
.wRegistroo {
    display: center;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
 	
}

.ttNoCuenta {
    font-family: 'Open Sans', sans-serif;
    font-size:15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 0px;
    padding: 3px;
}

.linkRegistro2{
	color: #0499D8;
	margin-left: 2px;
	font-size:15px;
}
::placeholder {

     font-family: 'Open Sans' sans-serif;
     font-size: 18px;
     font-weight: 300;
     color: #9B9A9A;


    }


/* Estilos Iniciar Sesion */

.logoSesion{
	width: 200px;
	height: 100px;

}

.contenedor_prinSesion{
	justify-content: center;
	display: flex;
	align-items: center;
	width: 80%;
	height: 60%;
  margin-top:-60px;
}

.formularioSesion {
    background-color: #F5F5F5;
    width: 67%;
    height: 89%;
    padding: 15px;
    box-shadow: 10px 10px #E5E4E4;
}

.titulo1Sesion {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 0px;
    padding: 3px;
}

.tituloSesion1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
   	margin-bottom: 15px;
    padding: 3px;
}

.tituloIniciar {
	padding: 3px;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #0499D8;
}

input[type=password] {
	font-family: 'Open Sans', sans-serif; 
	font-size: 25px; 
	border-left: none;
	border-top:4px solid #FF0000; 
	border-right: none;
	border-bottom: 4px solid #FF0000;
	margin-bottom: 20px;
	margin-left: 14px;
	width: 75%;
	height: 44px;
	background: #F5F5F5;
	outline: none;


}

.formularioSesion input[type=password] {
  width: 70%;
  background-position: 0px 0px;
  background-repeat: no-repeat ;
  padding-left: 40px ;
}

.usuarioo {
	font-family: 'Open Sans', sans-serif;
	font-size: 20px; 
  	background-position: 0px 0px;
  	background-repeat: no-repeat;
  	padding-left: 40px 
}

.boton_sesion{
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    background-color: #0499D8;
    border: none;
    color: white;
    padding: 10px 32px;
    text-decoration: none;
    margin: 4px 2px;
    font-weight: bold;
    outline: none;
    cursor: pointer;

}

.wSesion {
    display: center;
    margin-top: 10px;
}

.ttNoCuentaS {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    margin-top: 5px;
   	margin-bottom: 0px; 
    padding: 3px;

}

.linkRegistro{
	color: #0499D8;

  cursor: pointer;

}

.imgSesionIzq
{
	margin-top: -250px;
	margin-left: -118px
}

.imgSesionDer
{
	margin-top: -220px;
	margin-left: 300px
}

::placeholder {
     font-family: 'Open Sans' sans-serif;
     font-size: 18px;
     font-weight: 300;
     color: #9B9A9A;
} 

.modal-container1 {
    opacity: 1;
    visibility: visible;
    position: fixed;
    z-index: 26;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal1 {
    background-size: cover;
    width: 50%;
    height: 90%;
    background: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    transition: transform 1s;
    transform: translateY(0%);
    border-radius: 10px;
    /* overflow: hidden; */
}

.close1 {
    position: absolute;
    top: 5px;
    right: 5px;
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
}

.modal-close1 {
    transform: translateY(-200%);
}

.modal-container {
    opacity: 1;
    visibility: visible;
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-size: cover;
    width: 40%;
    height: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    transition: transform 1s;
    transform: translateY(0%);
    border-radius: 10px;
    /* overflow: hidden; */
}

span{
    align-items: flex-end;
}



/* Estilo Header */
header{
  width: 100%;
  height:80px;

}

.logo,.logo img{
	height: 60px;
	text-align:center;
	margin-top: 5px;

}

nav{
	width: 100%;
	position:fixed;
	box-shadow: 0 0 10px rgb(0,0,0,.4);
	z-index: 25;
	padding: 0px;
}
.nav1{
	background:#F8FBFD;
	height: 80px;
	color: #000;
}

.contenedor-nav{
	display: flex;
	margin: auto;
	width: 90%;
    height: 80px;
	justify-content: space-between;
	align-items: center;
}

nav .enlaces a{
	display: inline-block;
	padding: 5px 0;
	margin-right: 40px;
	font-size: 20px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	text-decoration: none;
	border-bottom: 3px solid transparent;
	color:inherit;
}

nav .enlaces a:hover{
	border-bottom: 2px solid #000;
	transition: 0.6s;

}

.nav-icon{
	width: 30%;
	display: flex;
	margin-right: 30px;
	justify-content: space-between;
	color: #000;
	font-size: 20px;
	text-align: center;
	cursor: pointer;
}

.tex_icon_menu{
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	font-size:15px;
}


</style>