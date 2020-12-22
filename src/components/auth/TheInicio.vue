<template>
<div>
	<!-- preloader -->
    <!-- <transition name="fade">
        <div v-if="show" class="preloader">
            <div class="logo">
                <img src="../../assets/presto.png" alt="">
                <p>Richi Vas Bien</p>
            </div>
        </div>
    </transition> -->
	<!-- menu -->
	<header>
		<nav id="nav" class="nav1">
			<div class="contenedor-nav">
				<div class="logo">
					<img src="../../assets/presto.png">
				</div>
				<div class="enlaces" id="enlaces">
					<a href="/inicio"  id="enlace-nosotros" class="btn-header">Inicio</a>
					<a href="/servicios" id="ctn-icon-search" class="btn-header Ibuca">Servicios</a>	
				</div>
				<div class="nav-icon" id="nav-icon" >
					<span  class="cta3">
						<i class="far fa-edit"></i>
						<h1 class="tex_icon_menu" @click="registrar=true" >Registrarse</h1>
					</span>
					<span   class="cta2">
						<i class="fas fa-sign-in-alt"></i>
						<h1 class="tex_icon_menu" @click="iniciar_sesion=true" >Inicar Sesión</h1>
					</span>
				</div>
				<div class="icono" id="open">
					<span>&#9776;</span>
				</div>
			</div>
		</nav>
	</header>

	<!--contenedor barra de busqueda -->

	<div  id="ctn-bars-search">
		<div class="cont-logis">
		<div class="imag-logis">
			<div style="cursor: pointer;">
				<img  class="logis-img" src="../../assets/13.png" alt="">
				<h1 class="logis-txt">GPS</h1>
				<a href="servicio.html" target="blank" title="">Ver mas </a>
			</div>
			<div style="cursor: pointer;">
				<img  class="logis-img" src="../../assets/12.png" alt="">
				<h1 class="logis-txt">Ubicaciòn en bodega</h1>
				<a href="#.html" target="blank" title="">Ver mas </a>
				
			</div>
			<div style="cursor: pointer;">
				<img  class="logis-img" src="../../assets/4.png" alt="">
				<h1 class="logis-txt">Motomensajeros</h1>
				<a href="#.html" target="blank" title="">Ver mas </a>
			</div>
		</div>
		</div>
		<div id="x-buscador">
			<i class="fas fa-times"></i>
		</div>
	</div>
	
	<!-- <div id="cover-ctn-search"></div> -->
	<!-- modal inicio de sesion -->
	<div class="modal-container1">
		<div class="modal1 modal-close">
			<span class="close"> <i class="fas fa-times"></i></span>
			
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
				    <input style="border-left: none;border-top:4px solid 	#FF0000; border-right: none;border-bottom: 4px solid #FF0000;margin-bottom: 20px; margin-left: 14px;width: 70%;
				    height: 42px;background: #F5F5F5;outline: none; background-image: url(5.png); background-position: 0px 0px;background-repeat: no-repeat; " class="usuarioo" type="text" placeholder="Usuario" name="">
				    <input type="password" placeholder="Contraseña" name="">
				    <h1 class="wSesion">
				        
				        <a href="error404.html" class="boton_sesion">continuar</a>
				       
				        <p class="ttNoCuentaS">¿No tienes una cuenta?<a href="#" class="linkRegistro">registrate</a></p>

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
	

	
	<!-- modal intercambio-->
	<div id="registrar">
		<div class="modal-container_intercambio" v-if="ventana">
			<div class="modalI modal-closeI">
				<span class="closeI"> <i class="fas fa-times"></i></span>
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
								<input type="text" placeholder="Nombre de Usuario" class="entrada" style="background-image: url(../../assets/5.png); background-position: 0px 0px;background-repeat: no-repeat;
								padding-left: 40px ;
								"
								>
							</div>
							<div class="div_datos">
								<input type="text" placeholder="Correo Electronico" class="entrada">
								<input type="password" placeholder="Contraseña" class="entrada"
								style="background-image: url(../../assets/6.png); background-position: 0px 0px;background-repeat: no-repeat;
								padding-left: 40px ;
								">
							</div>
							</div>
						</div>
						<div class="wRegistro">
						<div class="bt_regis">
							<a href="error404.html" class="boton_registro">continuar</a>
						</div>
							<p class="ttNoCuenta">¿Ya tiene una cuenta?<a href="" class="linkRegistro2">Inisiar Sesión</a></p>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!--carrusel-->
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

	<!--benficios -->
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
		<!--Herramientas -->
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
		<!-- footer-->
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

// var registrar = new Vue({
// 	el: "#app",
// 	data: {
// 		ventana: false
// 	},
// 	mounted: {

// 	}
// })

// import inicio2 from "../../../public/inicio2.js"
// import jquery from "../../../public/jquery.js"

export default {
	name: 'TheInicio',
    methods: {
		async Login(){
			try {
				this.$router.push('/login');
			} catch (error) {
				// Mensaje de error
			}
		},
		async Register(){
			try {
				this.$router.push('/register')
			} catch (error) {
				
				}
		}
	}
}
</script>

<style scoped>

:root{
	--color_amarillo:#FDAD30;
	--colo_azul:#069CCC ;
	--nargenes:60px;
	--espacios:10px;
	--espacios-contenido:45px;
}

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

img{
	vertical-align: top;
}


/*preolader*/
.hidden{
  overflow: hidden;
}

.centrado{

  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 100;
  display: flex;/*permite acomodar en la pantlla*/
  justify-content: center;/*centrar horizontal*/
  align-items: center;/*centrar vertical*/
}
.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
  
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: #069CCC ;
  animation: lds-circle 5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
/* fin preoldoader*/

/*header navegador*/
header{
  width: 100%;
  height:90px;

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
.nav2{
	background:#F8FBFD;
	height: 80px;
	color:  #FF0038;
}
.nav3{
	background:#F8FBFD;
	height: 80px;
	color: #046EC2;
}
.contenedor-nav{
	display: flex;
	margin: auto;
	width: 60%;
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
.Ibusca{
	margin-right: 30px;
	margin-top: 10px;
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
.nav-icon2{
	width: 30%;
	display: flex;
	margin-right: 30px;
	justify-content: space-between;
	color: #FF0038;
	font-size: 20px;
	text-align: center;
	cursor: pointer;

}
.nav-icon3{
	width: 30%;
	display: flex;
	margin-right: 30px;
	justify-content: space-between;
	color: #046EC2;
	font-size: 20px;
	text-align: center;
	cursor: pointer;

}
.tex_icon_menu{
	
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	font-size:15px;
}

nav .enlaces a:hover{
	border-bottom: 2px solid #000;
	transition: 0.6s;

}

.logo,.logo img{
	height: 60px;
	text-align:center;
	margin-top: 5px;

}


.icono{
	display: none;
	font-size: 24px;
	padding: 23.5px 20px;
}
h1{
	font-size: 15px;
	
}
p{
font-size: 50px;
}


/*modal sesion*/
.modal-container{
	opacity: 0;
	visibility:hidden;
	position: fixed;
	z-index: 9;
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
	/* background-image: url("../inicio/fondo.gif"); */
	
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
	position: relative;
	transition: transform 1s;
	transform: translateY(0%);
	border-radius: 10px;
	overflow: hidden;
	
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

/*modal registro*/
.modal-container1{
	opacity: 0;
	visibility:hidden;
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
.modal1{
	background-size: cover;
	width: 50%;
	height: 90%;
	background:#fff;
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
.close1{
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
.modal-close1{
	transform: translateY(-200%);
}

/*buscar*/

#ctn-bars-search{
	display: flex;
	justify-content: space-between;
    position: fixed;
   	top: -500px;
    width: 100%;
    background: #fff;
    padding: 20px;
    transition: all 600ms;
    z-index: 20;
    box-shadow: 0 0 10px rgb(0,0,0,.4);

}

.cont-logis{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	
}
.imag-logis{
	display: flex;
	justify-content: space-between;
	
	width: 90%;
	

}
.img-logis{
	display: flex;
	justify-content: center;
	text-align: center;
}
.logis-img{
	height: 200px;
	width: 200px;
}
#x-buscador{
	
	cursor: pointer;
}
#cover-ctn-search{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 6;
    display: flex;
}
.logis-txt{
	font-size: 15px;
	text-align: center;
}


/**/
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

.carousel-item{
  	display: flexbox;
}

/* .carousel-indicators{
  	z-index: 0;
} */

</style>