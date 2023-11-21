<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
    <div>
        <div class="px-5 py-5">
                <div class="media">
                    <div class="col-span-3">

                    </div>
                    <div class="col-span-6">
                        <div class="py-10 px-10">
                            <div class="text-center">
                                <p class="space-x-4"><span class="value">Bonjour,</span> <span class="value1">je suis Frederic</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3">
                        <div class="relative">
                            <div class="relative z-[1000]">
                                <img src="../../public/image/frederic.jpg" alt="image" class="h-[200px] rounded-full object-cover">
                                <div class="py-4 text-center">
                                    <p class="value1">RANDRIATSILAVINA Frederic</p>
                                </div>
                            </div>
                            <div class="absolute top-0 z-[2]">
                                <img src="../../public/svg/animate.svg" alt="" class="h-[450px] w-[450px] object-fill">
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<style scoped>
.value{
    font-weight: 600;
    font-size: 28px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke:0.2px white;
}
.value1{
    font-weight: 600;
    font-size: 28px;
    -webkit-text-fill-color: white;
}
</style>