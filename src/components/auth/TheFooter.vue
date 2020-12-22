<template>
    <footer class="container-fluid bg-grey py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 ">
                        <div class="logo-part">
                            <img src="../../assets/presto.png" class="w-50 logo-footer" >
                            <p>Toda actividad convive con diversos factores que influyen en su rendimiento y competitividad. Entender los objetivos de la logística es la clave para marcar la diferencia.</p>
                        </div>
                        </div>
                        <div class="col-md-6 px-4">
                        <h6> Acerca de la Compañia</h6>
                        <p>Experiencia y calidad a su disposición.</p>
                        <a href="#" class="btn-footer"> Más Información </a><br>
                        <a href="#" class="btn-footer"> Contactanos</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 px-4">
                        <h6> Help us</h6>
                        <div class="row ">
                            <div class="col-md-6">
                                <ul>
                                    <li> <a href="#"> Home</a> </li>
                                    <li> <a href="#"> Servicios</a> </li>
                                    <li> <a href="#team"> Team</a> </li>
                                    <li> <a href="#"> Help</a> </li>
                                    <li> <a href="#"> Contact</a> </li>
                                </ul>
                            </div>
                            <div class="col-md-6 px-4">
                                <ul>
                                    <li> <a href="#"> Agradecimientos</a> </li>
                                    <li> <a href="#"> Terminos</a> </li>
                                    <li> <a href="#"> Politicas</a> </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <!-- <div class="col-md-6 ">
                        <h6> Newsletter</h6>
                        <div class="social">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                        <form class="form-footer my-3">
                            <input type="text"  placeholder="search here...." name="search">
                            <input type="button" value="Go" >
                        </form>
                        <p>En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style scoped>

 body {
        font-family: 'Signika', sans-serif;
     }
     .bg-grey {
        background: #978e8e;
     }
     .logo-footer {
        margin-bottom: 40px;
     }
     footer {
            color: rgb(7, 7, 7);
     }
     footer p, a {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
}
footer h6 {
    font-family: 'Playfair Display', serif;
    margin-bottom: 40px;
    position: relative;
}
footer h6:after {
    position: absolute;
    content: "";
    background: rgb(10, 10, 10);
    width: 12%;
    height: 1px;
    left: 0;
    bottom: -20px;
}
     .btn-footer {
                 color: rgb(8, 8, 8);
              
                text-decoration: none;
                border: 1px solid;
                border-radius: 43px;
                font-size: 13px;
                padding: 7px 30px;
                line-height: 47px;
     }
     .btn-footer:hover {
                
                text-decoration: none;
               
     }
    .form-footer input[type="text"] {
        border: none;
    border-radius: 16px 0 0 16px;
    outline: none;
    padding-left: 10px;
    
}
::placeholder {
    font-size: 10px;
    padding-left: 10px;
    font-style: italic;
}
 .form-footer input[type="button"] {
    border: none;
    background:#232323;
        margin-left: -5px;
    color: #fff;
    outline: none;
    border-radius: 0 16px 16px 0;
    padding: 2px 12px;
}
     .social .fa {
    color: rgb(8, 8, 8);
    font-size: 22px;
    padding: 10px 15px;
    background: #3c3c3c;
}
     footer ul li {
    list-style: none;
    display: block;
}
  footer ul  {
   padding-left: 0;
}
footer ul  li a{
  text-decoration: none;
  color: rgb(7, 7, 7);
}
a:hover {
    text-decoration: none;
    color: #f5f5f5;
    
}
.logo-part {
    border-right: 1px solid grey;
    height: 100%;
    }

</style>>