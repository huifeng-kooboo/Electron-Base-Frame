<script setup lang="ts">
import { ElRow, ElCol, ElLink } from 'element-plus';
</script>
<template>
  <ElRow class="titleBar">
    <ElCol class="titleBarContent" :span="24">
      <el-link type="primary" class="titleInfo" :underline="false">有光推流客户端</el-link>
    </ElCol>
  </ElRow>
</template>

<style lang="less">
@import './assets/css/styles.less';
</style>

<style scoped>
.el-link {
  color: white;
}
</style>
