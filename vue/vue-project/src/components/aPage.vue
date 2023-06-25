<template>
    <div class='mob'>
        <div class='mob-title'>

            <div>我是好家伙组件</div>
            <div ref="div">{{ str }}</div>
            <button @click="change">修改Str</button>
        </div>

    </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance, ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue'
//beforeCreate created setup语法糖模式是没有这两个生命周期的 setup 去代替
// onBeforeMount 读不到dom onMounted 可以读取dom

//onBeforeUpate 获取的是更新之前的dom onupdated 获取更新之后 dom
const instace = getCurrentInstance()
console.log('setup', instace)
const str = ref<string>("小满")
const div = ref<HTMLDivElement>()
const change = () => {
    str.value = '我被修改了'
}
//创建
onBeforeMount(() => {
    console.log("创建之前=========》", div.value)
})
onMounted(() => {
    console.log("创建完成=========》", div.value)
})
// 更新的钩子
onBeforeUpdate(() => {
    console.log("更新组件之前=========》", div.value?.innerText)
})
onUpdated(() => {
    console.log("更新组件完成=========》", div.value?.innerText)
})
onBeforeUnmount(() => {
    console.log("销毁之前=========》")
})
onUnmounted(() => {
    console.log("销毁完成=========》")
})

onRenderTracked((e) => {
    console.log(e)
})

//触发依赖更新
onRenderTriggered((e) => {
    console.log(e)
})

// 函数柯里化
const curry = (f) => {
    return function (a) {
        return function (b) {
            return f(a, b);
        }
    }
}

const sum = (a, b) => {
    return a + b;
}
let curriedSum = curry(sum);
alert(curriedSum(1)(2))

</script>

<style scop lang='less'></style>