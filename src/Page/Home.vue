<script setup>
    import HeadVue from '../Component/Head.vue';
    import ExperienceVue from "../Component/Experience.vue"
    import ProjetVue from "../Component/Projet.vue"
    import DiplomeVue from "../Component/Diplome.vue"
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
    </div>
</template>
<style scoped>

</style>