<script setup>
    import { ref,onUnmounted,onMounted } from "vue"
    import HeadVue from '../Component/Head.vue';
    import ExperienceVue from "../Component/Experience.vue"
    import ProjetVue from "../Component/Projet.vue"
    import DiplomeVue from "../Component/Diplome.vue"
    import CompotenceVue from '../Component/Compotence.vue';
    import QualiteVue from "../Component/Qualite.vue"
    import FooterVue from "../Component/Footer.vue"
import { startCase } from "lodash";
    const props = defineProps(['time'])
    const menu = ref([
        {value:"Expérience",id:"exper_1"},
        {value:"Diplome",id:"dipl_1"},
        {value:"Compétence",id:"comp_1"},
       

    ])
    let scal = ref(0);
    function scrolly(){
        const bodyHeigh = document.body.scrollHeight
        window.scrollTo({
            behavior:"smooth",
            top:bodyHeigh
        });
    }

    function scrollStart(event)
    {
        const exper = document.getElementById("exper");
        const Diplome = document.getElementById("dipl");
        const comptence = document.getElementById("comp");
       const heightScroll = window.scrollY;
       
        if(heightScroll> 960)
        {
            scal.value= 1;
        }
        else{
            scal.value=0;
        }
       function afficheElement(Objet)
       {
        const position = Objet.getBoundingClientRect();
        const top = position.top;
        const bottom = position.bottom;
        const idObjet = Objet.getAttribute('id');
        const id = `${idObjet}_1`
        const ObjetChild = document.getElementById(id);
            if(top <= 0 && bottom >= 0)
            {
                ObjetChild.classList.add('active')
            }
            else {
                ObjetChild.classList.remove('active')
            }
       }

       afficheElement(exper);
       afficheElement(Diplome);
       afficheElement(comptence);
    
    }
    onMounted(() => {
        window.addEventListener('scroll',scrollStart)
       
    })
    onUnmounted(() => {
        window.addEventListener('scroll',scrollStart)
    })
</script>
<template>
    <div class="space-y-4 relative">
        <div class="">
            <head-vue :value="time" @scroll-bas="scrolly"></head-vue>
        </div>
        <div class="" id="exper">
            <experience-vue></experience-vue>
        </div>
        <div class="media fixed top-5 w-full cache">
            <div class="col-span-3">
                <div class="px-5 py-5 space-y-4 duration-500 " style="transform-origin: top left;" :style="`transform:scaleY(${scal})`">
                    <div class="py-2 transform duration-1000 rounded-lg text-center bg-indigo-500 shadow-lg shadow-indigo-950 cursor-pointer" v-for="(value,index) in menu" :key="index" :id="`${value.id}`">
                        <p class="font-bold text-white">
                        {{ value.value }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-span-9"></div>
            <div class="col-span-3"></div>
        </div>
        <div class="px-10 py-10">
            <projet-vue></projet-vue>
        </div>
        <div class=" overflow-hidden" id="dipl">
            <diplome-vue></diplome-vue>
        </div>
        <div class=" overflow-hidden" id="comp">
            <compotence-vue></compotence-vue>
        </div>
        <div class="">
            <qualite-vue></qualite-vue>
        </div>
        <div class="">
            <footer-vue></footer-vue>
        </div>
    </div>
</template>
<style scoped>
.active{
    background: var(--pink-950);
    filter: drop-shadow(10px 10px 2px rgba(0,0,0,0.5));
    transform: translateX(20px);
}
</style>