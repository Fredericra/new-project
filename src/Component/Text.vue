<script setup>
import { onMounted,onUnmounted,ref } from 'vue';
const text = ref("hello")
function commence()
{
   const text = [
    "Bonjour, je suis développeur "
   ]
}
onUnmounted(() => {
  commence()
})
onMounted(() => {
  commence()
})
</script>
<template>
    <div class="not">
        <div class="py-4 px-4">
            <div class="flex justify-center h-[1000px]">
                <div class="flex justify-center items-center">
                    <p class="">
                    
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.not {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

.text{
    font-weight: 1000;
    font-size:32px;
    

}
.not::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: var(--vt-c-divider-light-1);
    clip-path: circle(20% at 60% 20%);
}

#text1 {
    -webkit-text-stroke: 2px var(--pink-950);
    color: white;
    font-weight: 400;
}

.not::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background:linear-gradient(to top, var(--blue451),var(--pink-950)) ;
    clip-path: circle(20% at left 70%);
}

.circle:nth-child(1) {
    border: 10px solid white;
    left: 45%;
    top: 25%;
    border-radius: 50%;

}

.circle:nth-child(2) {
    border: 10px solid white;
    border-radius: 50%;
    left: 43%;
    top: 50%;
    height: 80px;
    width: 80px;
}

.circle:nth-child(3) {
    border: 5px solid white;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    height: 40px;
    width: 40px;
}

.text {
    position: relative;
    font-weight: 1000;
    color: transparent;

}


</style>