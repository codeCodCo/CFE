<template>
    <div class="name-class">{{ name }}</div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
const name  = ref<string>('webpack success!')
</script>

<style scoped lang="less">
.name-class{
    background-color: #239861;
    color: #fff;
}
</style>