<template>
    <div>
        <!-- Vue 3 语法学习 -->
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <h2 class="vue-title">Vue 3 语法学习</h2>
        <div class="vue-info">下面是基础语法分模块练习</div>
        <BasePage />
        <RefPage />
        <ReactivePage />
        <ComputedPage />
        <WatchPage />
        <WatchEffectPage />
        <LifeCyclePage />
    </div>
</template>

<script setup lang='ts'>
import BasePage from "./basePage.vue";
import RefPage from "./refPage.vue";
import ReactivePage from "./reactivePage.vue";
import ComputedPage from "./computedPage.vue";
import WatchPage from "./watchPage.vue"
import WatchEffectPage from "./watchEffectPage.vue"
import LifeCyclePage from "./lifeCyclePage.vue";
</script>

<style scop lang='less'>
.logo {
    display: block;
    margin: 0 auto 2rem;
}

.vue-title {
    font-size: 34px;
    color: #fff;
    text-align: center;
}

.vue-info {
    color: #fff;
    padding: 4px;
    font-weight: bold;
    background-color: #15a569;
    box-shadow: -4px 4px 4px #0ed17096;
    border-radius: 2px;
    margin-bottom: 10px;
    margin-top: 10px;
}

.mob {
    background-color: #000;
    border-radius: 2px;
    box-shadow: -4px 4px 4px #00000096;
    margin-top: 20px;
    padding: 20px;

    button {
        border-radius: 2px;
        padding: 4px 16px;
        background-color: #0bacf7;
        border: none;
        color: #fff;
        margin-left: 4px;
        margin-right: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #3ebefa;
    }

    //变量的作用域是块级作用域 {}
    @color1: #869196;
    @selector: input;

    @{selector} {
        // box-sizing: border-box;
        // box-sizing:border-box;
        padding: 0;
        background-color: #eee;
        border: 1px solid transparent;
        // border: none;
        box-sizing: border-box;
        outline: none;
        width: 160px;
        padding-left: 10px;
        height: 24px;
        border-radius: 4px;
        margin-right: 15px;

        caret-color: #316a85;
        color: rgb(0, 88, 59);
    }

    @{selector}:hover {
        width: 160px;
        height: 24px;
        padding: 0;
        box-sizing: border-box;
        padding-left: 10px;
        border: 1px solid @color1;
    }

    @{selector}:focus {
        width: 160px;
        height: 24px;
        padding: 0;
        box-sizing: border-box;
        padding-left: 10px;
        border: 1px solid @color1;
    }

    @{selector}::placeholder {
        color: #c29292;
    }

    .inner:extend(@{selector}) {
        .block-input {
            display: block;
        }
    }


    .mob-title {
        color: #fff;
        margin-bottom: 10px;
    }

    .title-info {
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .title-info::before {
        content: "<<< ";
        color: #0bacf7;
    }

    .title-info::after {
        content: " >>>";
        color: #0bacf7;
    }

    .mob-info {
        color: gray;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .mob-content {
        border-radius: 2px;
        background-color: #251c2c;
        box-shadow: -4px 4px 4px #251f2b;
        padding: 10px;
        color: #ccc;
        width: 100%;
        min-height: 100px;
        margin-top: 20px;
        margin-bottom: 20px;

        div {
            display: block;
            margin-bottom: 20px;
        }

        table {
            td {
                text-align: center;
                padding: 2px;
            }
        }

    }
}
</style>