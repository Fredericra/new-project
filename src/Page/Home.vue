<script setup>
    import HeadVue from '../Component/Head.vue';
    import ExperienceVue from "../Component/Experience.vue"
    import ProjetVue from "../Component/Projet.vue"
    import DiplomeVue from "../Component/Diplome.vue"
    import CompotenceVue from '../Component/Compotence.vue';
    import QualiteVue from "../Component/Qualite.vue"
    import FooterVue from "../Component/Footer.vue"
    const props = defineProps(['time'])
</script>
<template>
    <div class="space-y-4">
        <div class="">
            <head-vue :value="time"></head-vue>
        </div>
        <div class="">
            <experience-vue></experience-vue>
        </div>
        <div class="px-10 py-10">
            <projet-vue></projet-vue>
        </div>
        <div class="">
            <diplome-vue></diplome-vue>
        </div>
        <div class="">
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