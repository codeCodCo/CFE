<template>
    <div class="mob">
        <div class="mob-title">
            <div>模块二、Reactive用法</div>
            <div class="title-info">用来绑定复杂的数据类型 例如 对象 数组</div>
        </div>
        <div class="mob-info">
            1、数组动态插入
        </div>
        <div class="mob-content">
            <div>
                <form action="">
                    <input v-model="form.name" type="text" placeholder="123">
                    <input v-model="form.age" type="text">

                    <input type="text" class="block-input">
                    <input type="text" class="block-input">
                    <button @click="submit">提交</button>
                </form>
            </div>
        </div>

        <div class="mob-content">
            <div ref="dom">我是dom</div>
        </div>
        <div class="mob-content">
            <div>
                <ul>
                    <li :key="item" v-for="item in list">{{ item }}</li>
                </ul>
            </div>
            <div>
                <button @click="add">添加</button>
            </div>
        </div>
        <div class="mob-content">
            <div>{{ read }}</div>
            <button @click="show">显示</button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, readonly, shallowReactive } from 'vue'
import { Ref, ShallowRef, shallowRef, triggerRef, customRef } from 'vue'


let form = reactive({
    name: "小满",
    age: 23
})

let objr = reactive({ name: "小满" });
const read = readonly(objr);
const objr2 = shallowReactive({

})

const show = () => {
    console.log(read);
}

const submit = () => {

}
let list = reactive<string[]>([]);

let lists = reactive<{ arr: string[] }>({
    arr: []
})
let timer: any;
const add = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        setTimeout(() => {
            let res = ["add1", "add2", "add3"];
            // list = res
            list.push(...res);
            lists.arr = res;
            console.log(list);
        }, 2000);
        list.push("EDG");
        timer = null;
    }, 500)

}
</script>

<style scop lang='less'></style>