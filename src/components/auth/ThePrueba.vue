<template>
    <div id="pagina" >
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
                    <div class="icono" id="open">
                        <span>&#9776;</span>
                    </div>
                </div>
            </nav>
	    </header>
        <!-- Finaliza Header -->

        <!-- Inicia Iniciar Sesion -->

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
                                <input v-model="register.password" type="password" placeholder="Contraseña" class="entrada"
                                style="background-image: url(../../assets/6.png); background-position: 0px 0px;background-repeat: no-repeat;
                                padding-left: 40px ;
                                ">
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
                        <img  class="logis-img" src="../../assets/13.png" alt=""  @click.prevent="services">
                        <h1 href="/servicios" class="logis-txt" @click.prevent="services">GPS</h1>
                        <!-- <a href="servicio.html" target="blank" title="">Ver mas </a> -->
                    </div>
                    <div style="cursor: pointer;">
                        <img  class="logis-img" src="../../assets/12.png" alt=""  @click.prevent="services">
                        <h1 class="logis-txt"  @click.prevent="services">Ubicaciòn en bodega</h1>
                        <!-- <a href="#.html" target="blank" title="">Ver mas </a> -->
                        
                    </div>
                    <div style="cursor: pointer;">
                        <img  class="logis-img" src="../../assets/4.png" alt=""  @click.prevent="services">
                        <h1 class="logis-txt"  @click.prevent="services">Motomensajeros</h1>
                        <!-- <a href="#.html" target="blank" title="">Ver mas </a> -->
                    </div>
                </div>
            </div>
            <div id="x-buscador" @click.prevent="servicios=false">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <!-- Termina Servicios -->

        <!-- Inicia Carousel -->
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators" style="background:  #FF0038;">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
                <li data-target="#demo" data-slide-to="5"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../assets/14.jpeg" alt="Los Angeles" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/15.jpg" alt="Chicago" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/16.jpg" alt="New York" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/17.png" alt="New York" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/18.jpg" alt="New York" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/19.jpg" alt="New York" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div> 
        <!-- Finaliza Carousel -->
        <!-- Inicia Beneficios -->
        <section class="contenedor">
            <p class="principal">Presto te brinda grandes beneficios en logistica</p>
            <div class="contenedor-2">
                <div class="beneficios">
                    <div class="imagen1">
                        <img class="img1" src="../../assets/7.png">
                    </div>
                    <div class="texto">
                        <br><h1 class="azul">Tiempo<br>y Costo</h1><br>
                        <p class="text">Reducir los costes de transporte, realizando agrupación de cargas y minimizando etapas y distancias en el recorrido.</p>
                    </div>
                </div>
                <div class="beneficios">
                    <div class="imagen1">
                        <img class="img1" src="../../assets/10.png">
                    </div>
                    <div class="texto">
                        <br><h1 class="amarillo">El medio<br>ambiente</h1><br>
                        <p class="text">El cuidado del medio ambiente es uno de los objetivos de la logística cada vez más presente.</p>
                    </div>
                </div>
                <div class="beneficios">
                    <div class="imagen1">
                        <img class="img1" src="../../assets/1.png">
                    </div>
                    <div class="texto">
                        <br><h1 class="azul">Clientes<br>Felices </h1><br>
                        <p class="text">Lograr tener una buena relación logística entre la relación con los clientes y los proveedores.</p>
                    </div>
                </div>
            </div>	
	    </section>
        <!-- Termina Beneficios -->
        <!-- Inicia Equipo -->
        <section class="contenedor">
            <div class="contenedor-2">
                <div class="herramienta">
                    <div class="imagen">
                        <img class="img" src="../../assets/alex.jpeg">
                    </div>
                </div>
                <div class="herramienta2">
                    <div class="imagen">
                        <img class="img" src="../../assets/richard.jpg">
                    </div>
                </div>
                <div class="herramienta1">
                    <div class="imagen">
                        <a href="herramientas.html" target="_blank">
                            <img class="img" src="../../assets/12.png">
                        </a>
                    </div>
                </div>
                <div class="herramienta">
                    <div class="imagen">
                        <img class="img" src="../../assets/nayis.jpeg">
                    </div>
                </div>
                <div class="herramienta2">
                    <div class="imagen">
                        <img class="img" src="../../assets/will.png">
                    </div>
                </div>
            </div>
            <!--nombres -->
            <div class="contenedor-22">
                <div class="nombre">
                    <div >
                        <h1 class="imagen">ALEXANDER</h1>
                    </div>
                </div>
                <div class="nombre2">
                    <div>
                        <h1 class="imagen">RICHARDD</h1>
                    </div>
                </div>
                <div class="herramienta1">
                    <div class="imagen">
                        <p class="principal"> EQUIPO</p>
                    </div>
                </div>
                <div class="nombre">
                    <div >
                        <h1 class="imagen">NAYIBE</h1>
                    </div>	
                </div>
                <div class="nombre2">
                    <div >
                        <h1 class="imagen">WILL</h1>
                    </div>
                </div>
            </div>
	    </section>
        <!-- Finaliza Equipo -->
        <!-- Inicia Footer -->
        <footer>
            <div class="fazul">
                <div class="contAzul">
                    <img class="final" src="../../assets/6.png">
                    <div>
                        <h1 class="tFinal">SERVICIOS</h1><br>
                        <ul class="flis">
                            <li>GPS</li>
                            <li>Bodegas</li>
                            <li>Transporte</li>
                        </ul>
                    </div>
                    <div>
                        <h1 class="tFinal">COMUNICARSE</h1><br>
                        <ul class="flis">
                            <li>Póngase  en contacto</li>
                            <li>Comentarios</li>
                            <li>Redes sociales</li>
                        </ul>
                    </div>
                    <div>
                        <h1 class="tFinal">POLITICAS</h1><br>
                        <ul class="flis">
                            <li>Privacidad</li>
                            <li>Agradecimientos</li>
                            <li>Licencias</li>
                        </ul>
                    </div>
                        <div class="famarilo">
                        <div class="cont-text">
                        <h1 class="tFinal">ACERCA DE </h1><br>
                        <p class="pFinal">Toda actividad  convive con diversos factores que influyen en su rendimiento y competitividad. Entender los objetivos de la logística es la clave para marcar la diferencia.</p>
                        <div class="redes">
                            <a href="https://github.com/paflorezh/semana-4.git" title=""><i class="fab fa-github"></i></a>
                        
                        </div>
                        </div>
                        
                        <div class="imaF">
                        <img class="final2" src="../../assets/4.png">
                        </div>
                    </div>
                </div>
                <p class="linea"></p>
            </div>
	    </footer>
    </div>
</template>

<script>


import swal from 'sweetalert';

export default {
    name: 'ThePrueba',
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
                email: "",
                password:""
            }
        }
    },
    methods:{
        async services(){
            this.$router.push('/servicios/servicio1');
        },
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

/* Estilos Header */
header{
  width: 100%;
  height:90px;

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
	width: 60%;
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

/* Estilos Carousel */
.carousel{
	width: 800px;
	height: 400px;
	margin-left: 20%;
	margin-top: 50px;
}

.carousel-inner img {
    width: 800px;
    height: 400px;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))) 
}

.txt_c{
  	font-size: 40px;
  	text-align: center;
  background: rgb(200,199,199,.6);
  color:#243755;
}


/* Estilos Beneficios */

.contenedor{
  margin:auto;
  padding: 60px 0;
  text-align: center;
  overflow: hidden;  
}

.contenedor-2{
  margin-top: 20px;
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
}

.principal{
	font-family: 'Open Sans', sans-serif;
	font-size: 30px;
	font-weight: 300;
    color: #000
}

.beneficios{
  margin-top: 20px;
  padding: 10px;
  background:#F8FBFD; 
  width: 30%;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
  overflow: hidden;
  height:500px;
  margin-bottom: 20px;
}

.texto{
  padding: 5px 20px;
  width: 90%;
  height: 210px;
  text-align: justify;
  background: #fff;
  margin-top: -40px;
  margin-left: 20px;
  margin-right: 5px;
}

.imagen1{
	text-align:right;	
}

.img1{
	height: 300px;
	width: 300px;
}

.azul{
	font-family: 'Open Sans', sans-serif;
	color: #046EC2;
	font-size: 22px;
}

.amarillo{
	font-family: 'Open Sans', sans-serif;
	color:#FF0038;
	font-size: 22px;
}


/* Estilos Herramientas */

.herramienta{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:300px;
 display: flex;
 align-items: center;
 justify-content: center;
  background: #FF0038;
  text-align: center;
}

.herramienta2{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:300px;
 display: flex;
 align-items: center;
 justify-content: center;
  background: #046EC2;
  text-align: center;
}

.herramienta1{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:300px;
  text-align: center;
}

.img{
	width: 250px;
	height: 250px;
}

.nombre{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:50px;
  background: #FF0038;
  text-align: center;
}

.nombre2{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:50px;
  background:#046EC2;
  text-align: center;
}

.contenedor-22{
  margin-top:-5px; 
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
  margin-bottom: 10px;
  height:  90px;
  color: #fff;
}

.imagen{
	font-family: 'Open Sans', sans-serif;
	font-size: 20px;
}


/* Estilos Footer */

.final{
	height: 300px;
}

.fazul{
	
	background: #046EC2;
	height: 350px;
}

.contAzul{

	display: flex;
	justify-content: space-between;
	align-items: center;

}

.famarilo{
	width: 40%;
	background: #FF0038;
	height: 350px;
	display: flex;
	justify-content: space-between;
}

.flis{
	font-family: 'Open Sans', sans-serif;
	font-size: 18px;
	font-weight: 300;
}

.final2 {
    margin-top: 40px;
    margin-left: 60px;
    height: 270px;
    width: 200px;
}

.linea {
    content: '';
    margin: auto;
    width: 100%;
    height: 12px;
    background: #fff;
    margin-bottom: 5px;
    margin-top: -35px;
    position: absolute;
}

.imaF {
    text-align: left;
}

.cont-text {
    padding: 20px 20px;
    width: 100%;
}

.tFinal {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    width: 90%;
}

.pFinal {
    font-family: 'Open Sans', sans-serif;
    font-size: 19px;
    text-align: justify;
    width: 90%;
    font-weight: 300;
}

.redes {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 20px;
    font-size: 40px;
}
</style>