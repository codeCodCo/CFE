<template>
    <div class='mob'>
        <div class='mob-title'>
            <div>watch</div>
            <div class='title-info'>标头信息</div>
        </div>
        <div class='mob-info'>模块信息</div>
        <div class='mob-content'>
            <div>case1: <input v-model="message" type="text"></div>
            <div>case2: <input v-model="message2" type="text"></div>
            <div>case3: <input v-model="message3.foo.bar.name" type="text"></div> 
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
let message = ref<string>("小满")
let message2 = ref<string>("小满2")

let message3 = reactive({
    foo: {
        bar: {
            name: "Bob",
            age:"18"
        }
    }
})
watch([message, message2], (newVal, oldVal) => {
    console.log("新值:" + newVal, "旧值：" + oldVal)
})
watch(()=>message3.foo.bar.name,(newVal,oldVal)=>{
    console.log(newVal,oldVal)
},{
    deep:true,//开启深度监听
    immediate:true,
    flush:"pre"//pre组件更新之前调用 sync 同步执行 post 组件更新后执行 控制watch执行顺序
})
</script>

<style scop lang='less'></style>