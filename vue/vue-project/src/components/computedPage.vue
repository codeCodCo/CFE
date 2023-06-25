<template>
    <div class='mob'>
        <div class='mob-title'>
            <div>计算属性</div>
            <div class='title-info'>这里是计算属性</div>
        </div>
        <div class='mob-info'>模块信息</div>
        <div class='mob-content'>
            <div>
                姓：<input v-model="firstName" type="text">
            </div>
            <div>
                名：<input v-model="lastName" type="text">
            </div>
            <div>
                全名：{{ name }}
            </div>
            <div>
                <button @click="changeName">set更换姓名</button>
            </div>
        </div>
        <div class='mob-info'>实战</div>
        <div class='mob-content'>
            <div>
                <input v-model="keyword" placeholder="搜索" type="text">
            </div>
            <div>
                <table width="600px" border cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th>物品名称</th>
                            <th>物品单价</th>
                            <th>物品数量</th>
                            <th>物品总价</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key="index" v-for="(item, index) in searchData">
                            <td>{{ item.name }}</td>
                            <td>{{ item.price }}</td>
                            <td>
                                <button @click="item.num > 1 ? item.num-- : null">-</button>
                                {{ item.num }}
                                <button @click="item.num < 99 ? item.num++ : null">+</button>
                            </td>
                            <td>{{ item.num * item.price }}</td>
                            <td><button @click="del(index)">删除</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" align="right">总价：{{ total }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, computed, reactive } from 'vue'
let firstName = ref("张")
let lastName = ref("三")

//1、选项式写法：支持一个对象传入get函数以及set函数自定义操作

let name = computed<string>({
    get() {
        return firstName.value + '-' + lastName.value;
    },
    set(newVal) {
        [firstName.value, lastName.value] = newVal.split("-");
        console.log(newVal)
    }
})

const changeName = () => {
    name.value = '小-满'
}
//2、函数式写法 只能支持一个getter函数不允许修改值的

// let name = computed(() => firstName.value + '-' + lastName.value);

// const changeName = ()=>{
//     name.value = '小-满'
// }
let keyword = ref<string>("")
interface Data {
    name: string,
    price: number,
    num: number,
}

let data = reactive<Data[]>([
    {
        name: "绿帽子",
        price: 500000000,
        num: 1
    },
    {
        name: "红衣服",
        price: 1212,
        num: 1
    },
    {
        name: "黑袜子",
        price: 111,
        num: 1
    }
])

//实战
// const total = () => {
//     data.reduce((prev: number, next: Data) => {
//         return prev + next.num * next.price
//     }, 0) 
// }

const total = computed<number>(() => {
    return data.reduce((prev: number, next: Data) => {
        return prev + next.num * next.price
    }, 0)
})

const del = (index: number) => {
    data.splice(index, 1)
}

const searchData = computed(() => {
    return data.filter((item: Data) => {
        return item.name.includes(keyword.value)
    })
})

</script>

<style scop lang='less'></style>