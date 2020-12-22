<template>
    <transition name="fade">
        <div v-if="show" class="preloader">
            <div class="logo">
                <img src="../../assets/presto.png" alt="">
                <p>Richi Vas Bien</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Thepreloader",
    data(){
        return{
            show: true
        }
    },
    mounted(){
        this.showToggle()
    },
    methods: {
        showToggle(){
            setTimeout(() => {
                this.show =  false
                this.$router.push('/prueba');
            }, 1000);
        }
    }
}
</script>

<style scoped>

.preloader{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 9999;


}

.logo{
    width: 482px;
    height: 155px;
    /* background: silver; */
    background-repeat: no-repeat;
}

p{
    font: 600 1.5rem;
    margin-top: 5rem;
}

.circles{
    display: inline;
    margin-top: 1rem;
}

.circle{
    width: 1.5rem;
    height: 1.5rem;
    margin: 1rem;
    background-color: slateblue;
    border-radius: 50%;
    animation-name: scaleIn;
    animation-duration: 1s;
    transform: scale(0);
}

.fade-enter-active, .fade-leave-active{
    transition: opacity 1s;

}

.logo{
    animation-name: scaleOut;
    animation-duration: 1s;
}

p{
    animation-name: scaleOut;
    animation-duration: 1s;
}

.fade-enter, .fade-leave-to{
    opacity: 0;
}

</style>