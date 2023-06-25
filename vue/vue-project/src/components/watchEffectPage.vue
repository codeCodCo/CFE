<template>
    <div class='mob'>
        <div class='mob-title'>
            <div>watchEffect</div>
            <div class='title-info'>标头信息</div>
        </div>
        <div class='mob-info'>模块信息</div>
        <div class='mob-content'>
            <div id="domGet">我是dom</div>
            <div>case1: <input v-model="message" type="text"></div>
            <div>case2: <input v-model="message2" type="text"></div>
            <button @click="stopWatch">停止监听</button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watchEffect } from 'vue'
let message = ref<string>('飞机')
let message2 = ref<string>('飞机杯子')

const stop = watchEffect((oninvalidate) => {

    let ids:HTMLInputElement = document.querySelector('#domGet')
    console.log('message======>', message.value)
    console.log('message2======>', message2.value)

    console.log(ids,"asdahdjasasidsd")
    oninvalidate(() => { //作用：防抖，清除接口 退出页面了接口没调用完清除掉
        console.log("before")
    })
},{
    flush:"post",
    //开发模式下提供调试模式
    // onTrigger(event) {
    //     debugger
    // },
})

const stopWatch = () => stop
</script>

<style scop lang='less'></style>