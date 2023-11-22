<script setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
defineProps(['langage', 'titre', 'grid'])
</script>
<template>
    <div>
        <div class="media">
            <div class="col-span-4"></div>
            <div class="col-span-4 px-5">
                <div class="">
                    <div class="px-5 py-4 text-center">
                        <p class="btn1 py-2">
                            {{ titre }}
                        </p>
                    </div>
                </div>
                <div class="">

                </div>
            </div>
            <div class="col-span-4"></div>
        </div>
        <div class="media">
            <div class="col-span-3"></div>
            <div class="col-span-6">
                <div class="py-4 px-5 media">
                    <div class="m-2" :class="grid ? 'col-span-6 px-10' : 'col-span-4'" v-for="(value, index) in langage"
                        :key="index">
                        <div :class="index % 2 === 0 ? ' hover:text-white hover:bg-purple-400 ' : ' hover:hue-rotate-180  hover:bg-orange-400'"
                            class="flex space-x-3 justify-between text-orange-950 hover:text-indigo-950 font-bold items-center px-4 duration-1000 rounded-md bg-slate-300 py-2 objet1">
                            <div class="" :class="value.icon ? '' : 'py-2'">
                                {{ value.value }}
                            </div>
                            <img :src="value.icon" alt="" class="image object-cover" :class="value.icon ? '' : 'hidden py-4'">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

svg{
    width: 0;
    height: 0;
}
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
}

.lime {
    position: relative;
}
.objet1:hover{
        filter: drop-shadow(20px 2px 0px var(--bal));
        -webkit-filter: drop-shadow(10px 2px 0px var(--bal));
}
.lime::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: 2px solid var(--pink-950);
}</style>