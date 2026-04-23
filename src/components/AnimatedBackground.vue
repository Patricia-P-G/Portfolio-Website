<!-- Here is the animated background for the navbar and hero section-->
<template>
    <div class="background">
         <span v-for="n in 8" :key="n"></span>
    </div>
</template>


<style scoped>
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #171618;
    overflow: hidden;
}

.background span {
    width: 50vmin;
    height: 50vmin;
    border-radius: 50vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #400548;
    top: 18%;
    left: 99%;
    animation-duration: 32s;
    animation-delay: -14s;
    transform-origin: 15vw 0vh;
    box-shadow: 100vmin 0 13.150774125772758vmin currentColor;
}

.background span:nth-child(1) {
    color: #4f033b;
    top: 22%;
    left: 90%;
    animation-duration: 41s;
    animation-delay: -16s;
    transform-origin: -20vw 10vh;
    box-shadow: -100vmin 0 12.658673115282268vmin currentColor;
}

.background span:nth-child(2) {
    color: #260d23;
    top: 35%;
    left: 54%;
    animation-duration: 37s;
    animation-delay: -47s;
    transform-origin: -9vw -14vh;
    box-shadow: -100vmin 0 13.418505319847503vmin currentColor;
}

.background span:nth-child(3) {
    color: #260d23;
    top: 87%;
    left: 77%;
    animation-duration: 14s;
    animation-delay: -27s;
    transform-origin: -16vw 2vh;
    box-shadow: 100vmin 0 13.232229425856067vmin currentColor;
}

.background span:nth-child(4) {
    color: #260d23;
    top: 52%;
    left: 24%;
    animation-duration: 51s;
    animation-delay: -31s;
    transform-origin: 13vw 13vh;
    box-shadow: 100vmin 0 13.37219180251607vmin currentColor;
}

.background span:nth-child(5) {
    color: #4f033b;
    top: 68%;
    left: 23%;
    animation-duration: 38s;
    animation-delay: -16s;
    transform-origin: -23vw -11vh;
    box-shadow: -100vmin 0 12.970983178690137vmin currentColor;
}

.background span:nth-child(6) {
    color: #400548;
    top: 35%;
    left: 50%;
    animation-duration: 50s;
    animation-delay: -46s;
    transform-origin: 1vw 1vh;
    box-shadow: 100vmin 0 12.535912392255744vmin currentColor;
}

.background span:nth-child(7) {
    color: #260d23;
    top: 47%;
    left: 75%;
    animation-duration: 28s;
    animation-delay: -23s;
    transform-origin: -7vw -17vh;
    box-shadow: -100vmin 0 13.432868614817533vmin currentColor;
}
</style>