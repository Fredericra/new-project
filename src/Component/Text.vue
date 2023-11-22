<script setup>
import { onMounted,onUnmounted,ref } from 'vue';
function commence()
{
    const text = document.querySelector("#text");
            const menu = ["HTML","CSS","PHP", "JAVASCRIPT", "LARAVEL", "VUEJS"];
            let i = -1
            function inter() {
                i++;
                if (i < menu.length) {
                    text.classList.add("text")
                    text.dataset.text = menu[i];
                    text.innerHTML = menu[i]
                }
                else {
                    i = -1
                }
            }
            const interval = setInterval(() => {
                inter()
            }, 3000);
}
onUnmounted(() => {
  commence()
})
onMounted(() => {
  commence()
})
</script>
<template>
    <div class="not">
        <div class="flex justify-center items-center h-[550px]">
            <div class="flex space-x-2 absolute top-[42%] left-[5%] w-full flex-wrap">
                <h1 data-text="" id="text" class="font-bold"></h1>
                
            </div>
        </div>
    </div>
</template>

<style scoped>

.not {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

.text{
    font-weight: 1000;
    font-size:32px;
    

}
.not::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: var(--vt-c-divider-light-1);
    clip-path: circle(20% at 60% 20%);
}

#text1 {
    -webkit-text-stroke: 2px var(--pink-950);
    color: white;
    font-weight: 400;
}

.not::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background:linear-gradient(to top, var(--blue451),var(--pink-950)) ;
    clip-path: circle(20% at right 70%);
}

.circle:nth-child(1) {
    border: 10px solid white;
    left: 45%;
    top: 25%;
    border-radius: 50%;

}

.circle:nth-child(2) {
    border: 10px solid white;
    border-radius: 50%;
    left: 43%;
    top: 50%;
    height: 80px;
    width: 80px;
}

.circle:nth-child(3) {
    border: 5px solid white;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    height: 40px;
    width: 40px;
}

.text {
    position: relative;
    font-weight: 1000;
    color: transparent;

}

.text::after {
    content: attr(data-text);
    position: absolute;
    width: 0%;
    height: 100%;
    left: 0;
    top: 0;
    font-size: 32px;
    font-weight: 900;
    overflow: hidden;
    filter: hue-rotate(0deg);
    color: var(--pink-950);
    border-bottom:2px solid var(--pink-950) ;
    animation: animate 3s infinite linear;
}

@keyframes animate {
    0% {
        width: 0%;
        transform: translateX(2px);

    }

    90% {
    filter: hue-rotate(360deg);
        width: 100%;
        filter:hue-rotate(180deg);
        transform: translateX(0);


    }

}
@media screen {
    
}
</style>