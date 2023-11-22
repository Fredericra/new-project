<script setup>
import { ref } from "vue";
const play = ref(true);
const ProjetList = ref(
    [
    { "image": "../../public/project/vue-monde.png", "titre": "LIST PAYS | UNIVERSITY | AIRPORT", "techo": "VUE JS", "link": "https://pays-monde-air.netlify.app/"
    },
    { "image": "../../public/project/diary.png", "titre": "DIARY AI", "techo": "VUE JS", "link": "https://aide-game-ai-response.netlify.app/"
    },
    { "image": "../../public/project/note.png", "titre":"NOTE BOOK", "techo": "VUE JS", "link": "https://note-frederic.netlify.app"
    },
    { "image": "../../public/project/inscrire.png", "titre": "REGISTRE FICHIER", "techo": "REACT JS", "link": "https://fichier-registre.netlify.app/"
    },
    { "image": "../../public/project/monde.png", "titre": "MONDE WITH FLAG", "techo": "REACT JS", "link": "https://react-world-flag.netlify.app"
    },
    { "image": "../../public/project/ecole.png", "titre": "GESTION ECOLE", "techo": "LARAVEL | INERTIA", "link": "https://github.com/Fredericra/inertia-scolaire-gestion"
    }
]
)
</script>
<template>
    <div class="media">
        <div class="col-span-4"></div>
        <div class="col-span-4 mb-10">
            <div class=" px-5">
                <p class="titre">Projet personel</p>
            </div>
            <div class="mt-10 flex justify-center items-center space-x-5">
                <button class="transition-all duration-1000" @click="()=>{play = !play}">
                    <div class="btn1 duration-1000" v-if="play">Stop Carouselle</div>
                    <div class="btn duration-1000" v-else>Play Carouselle</div>
                </button>
            </div>
        </div>
        <div class="col-span-4"></div>
    </div>
    <el-carousel height="200px" direction="horizontal" type="card" :autoplay="play">
        <div class="" v-for="(value, index) in ProjetList" :key="index">
                <div class="">
                    <el-carousel-item class=" rounded-2xl shadow-lg">
                        <div class="common-layout">
                            <el-container>
                                <el-aside width="400px">
                                <div class="px-2 py-4">
                                    <div class="text-cener">
                                        <p class="">
                                            <span class="">
                                                Framework
                                            </span>
                                            <span class="">
                                                {{ value.techo }}
                                            </span>
                                        </p>
                                        <p class="titre1">
                                        {{ value.titre }}
                                        </p>
                                    </div>
                                    <div class="flex justify-center items-end py-4">
                                        <div class="flex space-x-2">
                                            <a href="" class="btn">Source Code</a>
                                            <a :href="value.link" class="btn1">Demo</a>
                                        </div>
                                    </div>
                                </div>
                                </el-aside>
                                <el-main>
                                    <img :src="value.image" alt="" class="h-[220px] w-[320px] rounded-t-2xl shadow-lg shadow-indigo-900 object-cover">
                                </el-main>
                            </el-container>
                        </div>
                    </el-carousel-item>
                </div>
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
.el-carousel__item:nth-child(n){
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: 120px;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>