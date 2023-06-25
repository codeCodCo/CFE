<template>
    <div class="mob">
        <div class="mob-title">
            <div>模块零、基础</div>
            <div class="title-info">vue3基础语法</div>
        </div>
        <div class="mob-info">
            1、基础
        </div>
        <div class="mob-content">
            <!-- 基礎 -->
            <div>
                {{ a + "好的" }}
                {{ a ? "true" : "false" }}
                {{ b.map(v => ({ "num": v })) }}
            </div>
            <div v-text="c"></div>
            <!-- <div v-html=""></div> -->
            <div v-show="d">这是v-show</div>
            <button @click="showClose" class="buttonAtar">开启</button>
            <div v-once>
                {{ a }}
            </div>
            <!-- v-memo配合v-for使用，当item==2时 只执行一次调出 -->
            <div :key="index" v-for="(item, index) in arr" v-memo="[item == 1]">
                adsad
            </div>

            <div v-if="esc == 'a'">
                A
            </div>
            <div v-else-if="esc == 'b'">
                B
            </div>
            <div v-else>
                C
            </div>
            <div @click="parent">
                <!-- .stop -->
                <button @[event].once="ssd" class="buttonAtar">{{ event }}</button>
            </div>

            <div v-bind:id="id" :style="style">mao</div>

            <div :class="['asd', 'fgh', 'jkl']"></div>
        </div>
    </div>
</template>

<script setup lang='ts'> 
import { ref, reactive } from 'vue'
// 基础 
const a: string = "好好学习vue";
const b: number[] = [1, 2, 3, 4, 5];
const c: string = '会好点';
const d: boolean = true;
const arr = [1, 2, 3];
const esc: string = 'a';
const event = 'click';
const id: string = '123';

const style = {
    color: "#000000",
    border: "1px solid red"
}
const showClose = () => {
    alert("sdaa")
}

const ssd = () => {
    alert("event")
}

const parent = () => {
    alert("冒泡到父级")
}
</script>

<style scop lang='less'></style>