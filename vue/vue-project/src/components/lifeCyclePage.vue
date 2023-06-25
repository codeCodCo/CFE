<template>
    <div class='mob'>
        <div class='mob-title'>
            <div>生命周期</div>
            <div class='title-info'>标头信息</div>
        </div>
        <div class='mob-info'>模块信息</div>
        <div class='mob-content'>
            <APage v-if="flag" />

            <button @click="des">创建-销毁</button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import APage from './aPage.vue';
const flag = ref<Boolean>(true)

const des = () => [
    flag.value = !flag.value
]
</script>

<style scop lang='less'></style>