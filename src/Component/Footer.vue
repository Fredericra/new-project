<script setup>
import { saveAs } from 'file-saver'
function cv()
{
    const url = "../../public/frederic.pdf";
    saveAs(url,"randriatsilavinafrederic.pdf");
}
</script>
<template>
    <div>
        <div class="py-2 bg-gray-600">
            <div class="flex justify-between items-center">
                <div class="col-span-4">
                    <div class="px-2 flex justify-start items-center">
                        <p class="text-white font-thin">randriatsilavinafrederic <span class=" text-[12px]">copieright <i class="fas fas fa-copyright"></i> 2023</span></p>
                    </div>
                </div>
                <div class="col-span-4">
                    <div class="flex justify-center items-center cache">
                       <div class="space-x-2">
                        <i class="fab fa-twitter icon"></i>
                        <i class="fab fa-facebook icon"></i>
                        <i class="fab fa-youtube icon"></i>
                       </div>
                    </div>
                </div>
                <div class="col-span-4">
                    <div class="flex justify-end items-center px-5">
                        <button class="btn duration-1000" @click="cv">
                            Télecharger cv
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.icon{
filter: drop-shadow(5px 5px rgba(0,0,0,0.5));
transition: 2s;
}
.icon:hover{
filter: drop-shadow(5px 5px 2px rgba(0,0,0,0.5));
    
}
</style>
