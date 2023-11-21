<script setup>
import Projet from "../Donne/Projet.json"
</script>
<template>
    <div class="media">
        <div class="col-span-4"></div>
        <div class="col-span-4 mb-10">
            <div class=" px-5">
                <p class="titre">Projet personel</p>
            </div>
        </div>
        <div class="col-span-4"></div>
    </div>
    <el-carousel height="200px" direction="horizontal" type="card" autoplay>
        <div class="" v-for="(value, index) in Projet" :key="index">
            <a :href="value.link" class=" overflow-hidden">
                <div class="">
                    <el-carousel-item class=" rounded-2xl shadow-lg">
                        <div class="relative">
                            <div class="absolute top-4 left-2">
                                <div class="text-indigo-950">
                                    <p class="text-[18px] titre1">
                                        {{ value.techo }}
                                    </p>
                                </div>
                            </div>
                            <img :src="value.image" class=" object-center" alt="">
                        </div>
                    </el-carousel-item>
                </div>
            </a>
        </div>
    </el-carousel>
</template>
  
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>