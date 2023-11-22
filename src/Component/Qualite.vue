<script setup>
import Qualite from "../Donne/Qualite.json"
</script>
<template>
    <div>
        <div class="py-4">
            <div class="media">
                <div class="col-span-4"></div>
                <div class="col-span-4">
                    <div class="px-5">
                        <p class="titre">Qualite personel</p>
                    </div>
                    <div class="py-5">
                        
                    </div>
                </div>
                <div class="col-span-4"></div>
            </div>
            <div class="py-4 px-5">
                <div class="media gap-4">
                    <div class="col-span-4" v-for="(value,index) in Qualite" :key="index">
                        <div class="px-5 py-5">
                            <div class=" rounded-2xl overflow-hidden shadow-lg ">
                                <div class=" bg-fuchsia-200 hover:bg-orange-700 duration-1000" >
                                    <div class="text-center py-2">
                                        <p class="font-bold text-[18px]">
                                        {{ value.titre }}
                                        </p>
                                    </div>
                                </div>
                                <div class="relative bg-gray-400 h-[240px] hover:h-[260px] hover:bg-indigo-700 hover:shadow-lg hover:text-white shadow-indigo-900 duration-1000 hv">
                                    <div class="px-5 py-4 space-y-4">
                                        <p class=" indent-4 font-bold" v-for="(text,index) in value.value" :key="index">
                                            {{ text }}
                                        </p>
                                    </div>
                                    <div class="absolute duration-1000 bottom-0 w-full bg-gray-900 h-0 hvr"></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.hv:hover .hvr{
    height: 25px;
}

</style>