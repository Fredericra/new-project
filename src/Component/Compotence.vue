<script setup>
import { ref } from "vue";
import data from "../Donne/competence.json"
import LangageVue from "./Langage.vue";
</script>
<template>
    <div>
        <div class="media">
            <div class="col-span-4"></div>
            <div class="col-span-4 px-5">
                <div class="">
                    <p class="titre">
                        Compétence
                    </p>
                </div>
            </div>
            <div class="col-span-4"></div>
        </div>
        <div class="py-10">
            <langage-vue :langage="data[0].os" :titre="`Systeme d'exploitation`" :grid="true"></langage-vue>
        </div>
        <div class="py-1">
            <langage-vue :langage="data[1].langage" :titre="`Langages`" :grid="false"></langage-vue>
        </div>
        <div class="">
            <langage-vue :langage="data[2].librairy" :titre="`Framework et Librairy`" :grid="false"></langage-vue>
        </div>
        <div class="">
            <langage-vue :langage="data[3].outil" :titre="`Outils`" :grid="false"></langage-vue>
        </div>
    </div>
</template>