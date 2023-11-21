<script setup>
const value = defineProps(['card', "isa"])
</script>
<template>
    <div class="relative">
        <div
            class="w-8 h-8 absolute -left-4 top-0 rounded-full flex justify-center items-center bg-pink-950 shadow-lg shadow-pink-950">
            <div class="text-white ">
                <el-popover placement="bottom-end" :title="` ${card.titre} | ${card.societe}`" :width="400" trigger="hover"
                    :content="card.type">
                    <template #reference>
                        {{ isa + 1 }}
                    </template>
                </el-popover>
            </div>
        </div>
        <div class="space-y-4 box-border">
            <div class="card-titre">
                <a :href="card.link ? card.link : ''" :class="card.link.length > 0 ? ' cursor-pointer' : ' cursor-none'">
                    <p class="titre1 indent-10">
                        {{ card.titre }}
                    </p>
                </a>
            </div>
            <div class="flex justify-center items-center card-societe">
                <a :href="card.link1 ? card.link1 : ''" :class="card.link1.length > 0 ? ' cursor-pointer' : ' cursor-none'">
                <p class="text-[16px] font-bold text-indigo-950" :class="card.societe ? '' : 'hidden'">
                    {{ card.societe }}
                </p>
            </a>
            </div>
            <div class="flex justify-end items-center card-action">
               
                    <p class="underline font-thin text-[16px]">
                        {{ card.type }}
                    </p>
               
            </div>
            <div class="card-intro">
                <p class="indent-12 font-bold text-[12px]">
                    {{ card.presentation }}
                </p>
            </div>
            <div class="py-4 card-value">
                <ul class="space-y-4">
                    <li class="" v-for="(value, index) in card.value" :key="index">
                        <div
                            class="font-bold bg-clip-text text-transparent bg-gradient-to-tl text-[12px] to-indigo-600 from-yellow-950">
                            <p class="indent-8">{{ value }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.bg- {
    background: var(--pink-950);
}
</style>