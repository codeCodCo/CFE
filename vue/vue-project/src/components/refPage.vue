<template>
    <div class="mob">
        <div class="mob-title">
            <div>模块一、Ref用法</div>
            <div class="title-info">ref用来动态更新渲染视图、获取DOM等功能</div>
        </div>
        <div class="mob-info">
            1、Ref isRef 语法
        </div>
        <div class="mob-content">
            <div>
                REF:{{ man }}
            </div>
            <div>
                shallowRef:{{ man2 }}
            </div>
            <div>
                customRef:{{ obj }}
            </div>
            <div>
                <button @click="changes">切换</button>
            </div>
        </div>
        <div class="mob-info">
            2、Ref 获取DOM
        </div>
        <div class="mob-content">
            <div ref="dom">我是dom</div>
        </div>
    </div>
</template>

<script setup lang='ts'> 
import { ref, reactive, readonly ,shallowReactive} from 'vue'
import { Ref, ShallowRef, shallowRef, triggerRef, customRef } from 'vue'

// ref reactive 
// ref 支持所有的类型 reactive 引用类型 Array Object Map Set
// ref 取值赋值 都需要加.value reactive是不需要加 .value
type M = {
    name: string
}
const man = ref<M>({ name: "小满" });
const man2 = shallowRef<M>({ name: "小满2" });
const dom = ref<HTMLDivElement>();

// ref shalllowRef 
// ref 深层次 shallowRef 浅层次的响应
// 浅层次的响应只更新数据不更新视图
// ref 和 shallowRef 是不能写在一起的 不然会影响shallowRef 造成shallowRef 的视图更新
const obj = MyRef<string>("小满3")
//const man: Ref<M> = ref({ n ame: "小满" });   控制接收类，自定义接收参数类别
const changes = () => {
    man.value.name = "大满1"
    // man2.value.name = "shallowRef 大满2"
    console.log(man2);
    console.log(dom.value?.innerText)
    // shallowRef 正确用法
    // man2.value ={
    //     name:"shallowRef 大满2"
    // }
    // console.log(man2)
    // shallowRef 用法 强制更新视图
    // triggerRef(man2) 
    // triggerRef 强制更新视图
    // obj.value = "customRef 大满3"
    // console.log(man)
}
function MyRef<T>(value: T) {
    let timer: any;
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newVal) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    console.log("修改了");
                    value = newVal;
                    timer = null;
                    trigger()
                }, 500)

            }
        }
    })
}
</script>

<style scop lang='less'></style>