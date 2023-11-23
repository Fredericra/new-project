<script setup>
    import { ref } from "vue"
    import HeadVue from '../Component/Head.vue';
    import ExperienceVue from "../Component/Experience.vue"
    import ProjetVue from "../Component/Projet.vue"
    import DiplomeVue from "../Component/Diplome.vue"
    import CompotenceVue from '../Component/Compotence.vue';
    import QualiteVue from "../Component/Qualite.vue"
    import FooterVue from "../Component/Footer.vue"
    const props = defineProps(['time'])
    const menu = ref([
        "Expérience",
        "Diplome",
        "Compétence",
        "Qualite Pérsonel"
    ])
    function scrolly(){
        const bodyHeigh = document.body.scrollHeight
        window.scrollTo({
            behavior:"smooth",
            top:bodyHeigh
        });
    }
</script>
<template>
    <div class="space-y-4 relative">
        <div class="">
            <head-vue :value="time" @scroll-bas="scrolly"></head-vue>
        </div>
        <div class="">
            <experience-vue></experience-vue>
        </div>
        <div class="px-10 py-10">
            <projet-vue></projet-vue>
        </div>
        <div class=" overflow-hidden">
            <diplome-vue></diplome-vue>
        </div>
        <div class=" overflow-hidden">
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

</style>