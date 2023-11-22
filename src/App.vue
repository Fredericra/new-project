<script setup>
import { ref,onMounted,onUnmounted } from "vue"
import { RouterLink, RouterView } from 'vue-router'

const loadHeigh = ref(window.innerHeight);
const timeLoad = ref(0);
const pageScale = ref(0);
function pageStart(){
  let timePerfomance = performance.now();
  timeLoad.value = timePerfomance + 2000;
  setTimeout(() => {
    loadHeigh.value = 0;
    pageScale.value = window.innerHeight
  }, timePerfomance + 2000);
}
onUnmounted(() => {
  pageStart()
})
onMounted(() => {
  pageStart()
})
</script>

<template>
  <div class="">
      <div class="loader h-screen duration-1000" :style="{height:`${loadHeigh}px`,opacity:loadHeigh}">
          <div class="flex h-screen justify-center items-center">
                <div class="flex space-x-2">
                    <div class="bg-orange-600 anime" v-for="i in 25" :style="`--i:${i+1}`" :key="i"></div>
                </div>
          </div>
      </div>
      <div class="duration-1000 bg-gradient-to-b to-indigo-600 from-purple-200" v-if="loadHeigh===0" :style="{opacity:`${pageScale}`}">
        <router-view :time="timeLoad"></router-view>
      </div>
     
  </div>
</template>

<style scoped>
.loader{
  position: relative;
  overflow: hidden;
}
.loader::after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  right:0;
  top:0;
  background: var(--blue-400); 
  clip-path: circle(20% at right 80%);

}

.loader::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--pink-950); 
  clip-path: circle(40% at left 35%);

}

.anime{
  height: 10px;
  width: 4px;
  border-radius: 20px;
  filter:hue-rotate(80deg);
  animation: animation 1.6s infinite linear;

}
@keyframes animation {
  0%{
    transform: scaleY(0) scaleX(0) rotateZ(0deg);
  }
  50%{
    transform: scaleY(10) scaleX(1) rotateZ(12deg);
    filter: hue-rotate(360deg);
  }
}
.anime:nth-child(n){
  animation-delay: calc(0.2s * var(--i));
}
</style>
