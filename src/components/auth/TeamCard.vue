<template>
    
    <section id="team">
        <div class="contaiener my-4 py-5 text-center">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <img src="../../assets/richard.jpg" alt="Richi" class="img-fluid rounded-circle w-50 mb-3">
                            <h3>Richar Espinosa</h3>
                            <h5>Ingeniero Mecatrónico</h5>
                            <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus quisquam eligendi earum dolore. Quam, magnam fugiat quos debitis doloremque reprehenderit vero dolorum blanditiis magni error expedita laudantium nihil sequi?</p> -->
                            <div class="d-flex flex row justify-content-center">
                                <div class="p-4">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <img src="../../assets/alex.jpeg" alt="Pedro" class="img-fluid rounded-circle w-50 mb-3">
                            <h3>Pedro Florez</h3>
                            <h5>Desarrollador FrontEnd</h5>
                            <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus quisquam eligendi earum dolore. Quam, magnam fugiat quos debitis doloremque reprehenderit vero dolorum blanditiis magni error expedita laudantium nihil sequi?</p> -->
                            <div class="d-flex flex row justify-content-center">
                                <div class="p-4">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <img src="../../assets/nayis.jpeg" alt="Nayibe" class="img-fluid rounded-circle w-50 mb-3">
                            <h3>Nayibe Casas</h3>
                            <h5>Analista de Software</h5>
                            <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus quisquam eligendi earum dolore. Quam, magnam fugiat quos debitis doloremque reprehenderit vero dolorum blanditiis magni error expedita laudantium nihil sequi?</p> -->
                            <div class="d-flex flex row justify-content-center">
                                <div class="p-4">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <img src="../../assets/will.png" alt="Will" class="img-fluid rounded-circle w-50 mb-3">
                            <h3>Wilton Romero</h3>
                            <h5>Desarrollador BackEnd</h5>
                            <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus quisquam eligendi earum dolore. Quam, magnam fugiat quos debitis doloremque reprehenderit vero dolorum blanditiis magni error expedita laudantium nihil sequi?</p> -->
                            <div class="d-flex flex row justify-content-center">
                                <div class="p-4">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name:'TeamCard',
}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 400;
    columns: #777777;
}

h1{
    font-size: 36px;
    color: #555555;
    font-weight: bold;
}

h3{
    font-size: 24px;
    color: #333333;
    font-weight: bold;
    height: 35px;
}

h5{
    height: 35px;
}

#team img{
    margin-top: 50px;
}


#team i{
    font-size: 26px;
    color: #555;
}

#team p{
    font-weight: 500;
    text-align: center;
    height: 160px;
}

#team .card{
    border-radius: 0;
    box-shadow: 5px 5px 15px #e74c3c;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    height: 400px;
    width: 95%;
    margin: 0;
}

#team .card:hover{
    background: #e74c3c;
    color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 5px 5px 10px #9e9e9e;
}

#team .card:hover h3, #team .card:hover i{
    color: #fff;
}

#team .p-4{
    width: 30px;
}

</style>