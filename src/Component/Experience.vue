<script setup>
import { ref } from "vue"
import Tous from "../Donne/Expert.json"
import CardVue from './Card.vue'
</script>
<template>
    <div>
        <div class="media">
            <div class="col-span-4"></div>
            <div class="col-span-4">
                <div class="px-4 mb-4">
                    <div class="">
                        <p class="titre">Expérience</p>
                    </div>
                </div>
                <div class="card">
                    <div class="mt-10 mb-20 space-y-4 line">
                        <card-vue v-for="(value, index) in Tous" :key="index" :card="value" :isa="index" class="px-5"></card-vue>
                    </div>
                </div>
            </div>
            <div class="col-span-4">

            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
 .line{
        position: relative;
    }
    .line::before{
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        height: 100%;
        border-left: 2px solid var(--pink-950);
    }
</style>