<script setup>
import Diplone from "../Donne/Diplome.json"

</script>
<template>
    <div class="">
        <div class="media">
            <div class="col-span-4"></div>
            <div class="col-span-4">
                <div class="px-5">
                    <p class="titre ">Diplome et Formation</p>
                </div>
            </div>
            <div class="col-span-4"></div>
        </div>
        <div class="media py-10 px-5">
            <div class="col-span-2">
            </div>
            <div class="col-span-8">
                <div class="relative">
                    <div class="absolute w-4 h-10 bg-pink-950 -top-5 left-[50%] -translate-x-[6px] filter blur-[2px] rounded-t-full"></div>
                </div>
                <div class=" line">
                    <ul class="m-0 p-0">
                        <li v-for="(value, index) in Diplone" :key="index">
                            <div class="content px-4 space-y-2">
                                <p class=" text-indigo-900 font-bold">
                                    {{ value.diplome }}
                                </p>
                                <p class="titre1">
                                    {{ value.ecole }}
                                </p>
                                <p class="liue items-center space-x-2">
                                    <span class="fas fa-map-marker-alt"></span>
                                    <span class="">
                                        {{ value.lieu }}
                                    </span>
                                </p>
                                <p class="date">
                                    <el-popover placement="bottom-start" :title="value.diplome" :width="400" trigger="hover"
                                    :content="`${value.ecole} à ${value.lieu}`">
                                    <template #reference>
                                        <button class="px-4 py-1 text-white font-bold btn">
                                            {{ value.date }}
                                        </button>
                                    </template>
                                </el-popover>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-2"></div>
        </div>
    </div>
</template>
<style scoped>

.line{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
   
}
.line::before{
    content: "";
    position: absolute;
    left: 50%;
    height: 95%;
    width: 100%;
    border-left: 2px solid var(--pink-950);
}
.line ul li{
    position: relative;
    width: 50%;
    box-sizing: border-box;
    padding: 10px;
}
.line ul li:nth-child(even)::after{
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 15px;
    left: calc(-16px / 2);
    border-radius: 50%;
    border: 1px solid var(--blue-400);
    background: var(--pink-950);
    filter: blur(2px);
}
.line ul li:nth-child(odd)::after{
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 15px;
    right: calc(-18px / 2);
    border-radius: 50%;
    border: 1px solid white;
    overflow: hidden;
    background: var(--pink-950);
    filter: blur(2px);
}
.line ul li:nth-child(odd){
    float: left;
    text-align: right;
    clear: both;
}
.line ul li:nth-child(even){
    float: right;
    clear: both;
    text-align: left;
}

</style>