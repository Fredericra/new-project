<script setup>
import { onMounted, ref } from "vue";
import TextVue from "./Text.vue";
const value = defineProps(['value']);
const menu = ref([
    { value: "Antananarivo,Madagascar", icon: "fas fa-location-arrow", title: "Adress" },
    { value: "Malagasy", icon: "fas fa-address-card", title: "Nationalite" },
    { value: "+261 32 22 303 69", icon: "fas fa-map-marker-alt", title: "Telephone" },
    { value: "25 ans", icon: "fas fa-hand-holding-heart", title: "age" },
])


function animation() {
    const nom = document.querySelector(".nome");
    setTimeout(() => {
        nom.classList.add("nom");
    }, value.value + 4500);
}
onMounted(animation)

</script>

<template>
    <div class="relative mb-10 head">
        <div class="absolute">

        </div>
        <div class="media">
            <div class="col-span-3">
                <!-- left -->
                <div class="cache">
                    <text-vue></text-vue>
                </div>
                <!-- left -->
            </div>
            <div class="col-span-6 px-5">
                <div class="py-4">
                    <div class="flex justify-center h-[120px] items-center">
                        <div class="flex space-x-3">
                            <p class="bon fill-gray-200">Bonjour, je suis</p>
                            <p class="nome" id="nom" data-text="Frederic">Frederic</p>
                        </div>
                    </div>
                    <div class="relative px-10">
                        <div class="py-2 px-4 relative z-[1000]">
                            <div class="flex justify-center items-center">
                                <div class="relative">

                                    <div class="flex justify-center items-center">
                                        <div class="w-[200px] rounded-full overflow-hidden sary">
                                            <img src="../../public/image/frederic.jpg" alt="" class=" object-cover">
                                        </div>
                                    </div>
                                    <div class="py-4 text-center space-y-3">
                                        <p class="text-[24px] simple">RANDRIATSILAVINA Frederic</p>
                                        <p class="text-[22px] simple">Développeur Javascript/PHP</p>
                                        <p class="text-[22px] simple">LARAVEL ET VUE JS</p>
                                    </div>
                                    <div class="py-4">
                                        <p class="indent-8 text-slate-700 font-bold">
                                            En tant que developeur PHP et Javascript, Je suis développeur passionné
                                            spécialisé dans les
                                            techologies
                                            <span
                                                class=" bg-clip-text text-transparent bg-gradient-to-r to-indigo-950 from-orange-900">
                                                Laravel </span> et
                                            <span
                                                class=" bg-clip-text text-transparent bg-gradient-to-r to-indigo-950 from-orange-900">
                                                Vue js </span> .
                                            Avec solide éxpérience dans la création d'application web robustes et
                                            convivales, je
                                            m'efforce de combine l'efficacité de
                                            <span
                                                class=" bg-clip-text text-transparent bg-gradient-to-r to-indigo-950 from-orange-900">
                                                Laravel </span> côte serveur avec
                                            la fluidité de
                                            <span
                                                class=" bg-clip-text text-transparent bg-gradient-to-r to-indigo-950 from-orange-900">
                                                Vue js </span>
                                            au côte client. Explorez mon portfolio pour découvrir mes projets innovants et
                                            ma maîtrise
                                            dans cet domaine.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="px-4">
                                <ul class="space-y-2 font-bold  text-violet-800">
                                    <li class="grid grid-cols-12" v-for="(value, index) in menu" :key="index">
                                        <div class="col-span-3">
                                            <span class="text-sm underline underline-offset-2 flex items-center">
                                                <el-icon v-if="index===0"><LocationInformation /></el-icon>
                                                <el-icon v-if="index===1"><Ship /></el-icon>
                                                <el-icon v-if="index===2"><PhoneFilled /></el-icon>
                                                <el-icon v-if="index===3"><Trophy /></el-icon>
                                                {{ value.title }} </span>
                                        </div>
                                        <div class="col-span-9">
                                            <span class="ml-[105px]">{{ value.value }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="py-5 mt-4">
                                <div class="flex justify-center items-center">
                                    <button @click="bas"  style="font-size: 20px" class=" -space-y-4 px-2 py-2 outline outline-2 outline-indigo-950 rounded-full hover:translate-y-2 hover:outline-blue-400 duration-1000">
                                       <div class="i" style="--time:0.4;">
                                            <el-icon><ArrowDownBold /></el-icon>
                                       </div>
                                       <div class="i" style="--time:0.8;">
                                            <el-icon><ArrowDownBold /></el-icon>
                                       </div>
                                       <div class="i" style="--time:1.2;">
                                            <el-icon><ArrowDownBold /></el-icon>
                                       </div>
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="absolute top-0 w-full z-[0]">
                            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg" class="duration-1000">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color: rgb(238, 205, 163);"></stop>
                                        <stop offset="100%" style="stop-color: rgb(239, 98, 159);"></stop>
                                    </linearGradient>
                                </defs>
                                <path id="blob" fill="url(#gradient)">
                                    <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M390.5,333.5Q346,417,246.5,423Q147,429,120,339.5Q93,250,132.5,182.5Q172,115,273,75Q374,35,404.5,142.5Q435,250,390.5,333.5Z;M430.5,350.5Q366,451,264,426.5Q162,402,117,326Q72,250,112.5,165.5Q153,81,239.5,100Q326,119,410.5,184.5Q495,250,430.5,350.5Z;
                                                    M381.5,324.5Q336,399,239,418Q142,437,114.5,343.5Q87,250,108.5,145.5Q130,41,239,60.5Q348,80,387.5,165Q427,250,381.5,324.5Z;
                                                    M410,354Q370,458,264,433.5Q158,409,79.5,329.5Q1,250,68.5,151.5Q136,53,232.5,83Q329,113,389.5,181.5Q450,250,410,354Z;
                                                    M390.5,333.5Q346,417,246.5,423Q147,429,120,339.5Q93,250,132.5,182.5Q172,115,273,75Q374,35,404.5,142.5Q435,250,390.5,333.5Z
                                                    "></animate>
                                </path>
                            </svg>
                        </div>

                    </div>
                </div>

            </div>
            <div class="col-span-3">
                <div class="py-10 relative cache">
                    <div class="absolute ">

                    </div>
                    <div class="absolute left-[80%]">
                        <div class="space-y-8 ac">
                            <div class="">
                                <el-popover placement="top-start" title="Fredericra" :width="200" trigger="hover"
                                    content="mon compte github ">
                                    <template #reference>

                                        <a href="https://github.com/Fredericra">
                                            <img src="../../public/svg/github.svg" alt="" class="icon1">
                                        </a>

                                    </template>
                                </el-popover>
                            </div>
                            <div class="">
                                <el-popover placement="top-start" title="ERIC RATSILA" :width="200" trigger="hover"
                                    content="mon compte LINKEDIN ">
                                    <template #reference>
                                        <a href="https://www.linkedin.com/in/randria-tsilavina-eric">
                                            <img src="../../public/svg/linkedin.svg" alt="" class="icon1">
                                        </a>

                                    </template>
                                </el-popover>
                            </div>
                            <div class="">
                                <el-popover placement="bottom-start" title="Gmail google" :width="200" trigger="hover"
                                    content="mon compte google ">
                                    <template #reference>
                                        <a href="mailto:randriatsilavinafrederic0@gmail.com">
                                            <img src="../../public/svg/gmail.svg" alt="" class="icon1">
                                        </a>
                                    </template>
                                </el-popover>
                            </div>
                            <div class="">
                                <el-popover placement="bottom-end" title="ERIC RANDRIA" :width="200" trigger="hover"
                                    content="mon compte facebook ">
                                    <template #reference>
                                        <a href="https://www.facebook.com/profile.php?id=100086853551559">
                                            <img src="../../public/svg/facebook.svg" alt="" class="icon1">
                                        </a>
                                    </template>
                                </el-popover>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fixed top-0"></div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center sm:hidden md:visilbe">
        <div class="flex space-x-5 value">
            <div class="">
                <el-popover placement="top-start" title="Fredericra" :width="200" trigger="hover"
                    content="mon compte github ">
                    <template #reference>

                        <a href="https://github.com/Fredericra">
                            <img src="../../public/svg/github.svg" alt="" class="icon2">
                        </a>

                    </template>
                </el-popover>
            </div>
            <div class="">
                <el-popover placement="top-start" title="ERIC RATSILA" :width="200" trigger="hover"
                    content="mon compte LINKEDIN ">
                    <template #reference>
                        <a href="https://www.linkedin.com/in/randria-tsilavina-eric">
                            <img src="../../public/svg/linkedin.svg" alt="" class="icon2">
                        </a>

                    </template>
                </el-popover>
            </div>
            <div class="">
                <el-popover placement="bottom-start" title="Gmail google" :width="200" trigger="hover"
                    content="mon compte google ">
                    <template #reference>
                        <a href="mailto:randriatsilavinafrederic0@gmail.com">
                            <img src="../../public/svg/gmail.svg" alt="" class="icon2">
                        </a>
                    </template>
                </el-popover>
            </div>
            <div class="">
                <el-popover placement="bottom-end" title="ERIC RANDRIA" :width="200" trigger="hover"
                    content="mon compte facebook ">
                    <template #reference>
                        <a href="https://www.facebook.com/profile.php?id=100086853551559">
                            <img src="../../public/svg/facebook.svg" alt="" class="icon2">
                        </a>
                    </template>
                </el-popover>
            </div>
        </div>

        <div class="absolute w-screen  right-0">

        </div>
    </div>
</template>
<script>
export default {
    methods: {
        bas()
        {
            this.$emit('scroll-bas')
        }
    },
}
</script>
<style scoped>
.bon {
    font-weight: 800;
    font-size: 26px;
    -webkit-text-fill-color: white;
    filter: url(#wavy);
}

.sary {
    filter: drop-shadow(10px 20px 2px rgba(0, 0, 0, 0.5));
}

.head {
    position: relative;
    background: url('../../public/svg/animate.svg');
    background-repeat: no-repeat;
    background-position-x: -25%;
    background-position-y: 20%;
}
.nom{
    font-weight: 900;
    font-size: 28px;
    color:transparent;
}
.head::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: var(--pink-950);
    filter: drop-shadow(-50px -10px rgba(0, 0, 0, 0.5));
    clip-path: circle(20% at right 25%);
}

@media screen and (max-width:720px) {
    .head::before {
        content: "";
        position: absolute;
        z-index: -100;
    }
}

#nom::before {
    content: attr(data-text);
    position: absolute;
    height: 100%;
    width: 0%;
    left: 0;
    top: 0;
    font-weight: 900;
    overflow: hidden;
    color: var(--pink-950);
    animation: nom 2s forwards;

}

@keyframes nom {
    100% {
        width: 100%;
    }
    
}
.i{
    opacity:0.2;
    animation:fred 2s infinite linear;
}
@keyframes fred {
    0%{
        opacity: 0.2;
    }
    50%{
        opacity: 1;
        color:aqua;
    }
}
.i:nth-child(n)
{
    animation-delay: calc(1s * var(--time)) ;
}

</style>