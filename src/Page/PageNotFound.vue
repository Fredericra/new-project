<template>
    <div>
        <div class=" relative h-screen not">
            <div class="flex space-x-2 absolute top-[42%] left-[5%] w-full flex-wrap">
                <h1 id="text1">Je suis développeur,</h1>
                <h1 data-text="" id="text"></h1>
            </div>
            <div class="absolute top-4 left-[45%]">
                <img src="../../public/image/frederic.jpg" alt=""
                    class=" inset-0 w-[150px]  rounded-full border-[10px] border-white">
            </div>
            <div class="hello">
                <div class="positon absolute w-[125px] h-[125px] bg-indigo-950   circle"></div>
                <div class="positon absolute w-[125px] h-[125px] bg-indigo-950  circle"></div>
                <div class="positon absolute w-[125px] h-[125px] bg-indigo-950  circle"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        start() {
            const text = document.querySelector("#text");
            const menu = ["PHP", "JAVASCRIPT", "LARAVEL", "VUEJS","PYTHON"];
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
    },
    beforeDestroy() {
        this.start();
    },
    mounted() {
        this.start();
    },
}
</script>
<style scoped>
.not {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

.text {
    position: relative;
    font-weight: 1000;
    color: transparent;

}
.not::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #ec4899;
    clip-path: circle(40% at 20% 20%);
}

#text1 {
    -webkit-text-stroke: 2px var(--pink-950);
    color: white;
    font-weight: 600;
}

.not::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to left, var(--blue-400) 40%, var(--orange-400) 60%);
    clip-path: circle(20% at right 100%);
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
    font-weight: 800;
    color: transparent;

}

.text::after {
    content: attr(data-text);
    position: absolute;
    width: 0%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    color: var(--pink-950);
    animation: animate 3s infinite linear;
}

@keyframes animate {
    0% {
        width: 0%;

    }

    90% {
        width: 100%;

    }

}
@media screen {
    
}
</style>