<template>
    <div class="test">test scss</div>
    <div>{{ obj.apiResult }}</div>
    <el-row class="tac">
        <el-col :span="12">
            <h5 class="mb-2">Custom colors</h5>
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon><document /></el-icon>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import API from '@/api';
import { reactive } from 'vue'
let obj = reactive({ apiResult: {} });
const requestRes = async () => {
    let result = await API.login('zhangsan', '123456')
    obj.apiResult = result
};
requestRes();
</script>

<style lang="scss">
//?????????????????????
@import '@/style/globalMixin.scss';
.test {
    background-color: $bg-color;
    @include box-shadow;
}
.tac {
    color: #fff;
    .mb-2 {
        color: #ffffff;
    }
}
</style>
