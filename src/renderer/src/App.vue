<script setup lang="ts">
import { ElRow, ElCol, ElLink, ElImage } from 'element-plus'
</script>

<template>
  <ElRow class="titleBar">
    <ElCol class="titleBarContent" :span="24">
      <el-image  style="width: 20px; height: 20px;" class="logo"  src="https://ytouch-1258011219.cos.ap-nanjing.myqcloud.com/uPic/logo.png" fit="cover" ></el-image>
      <el-link type="primary" :underline="false">有光推流客户端</el-link>
    </ElCol>
  </ElRow>
</template>
<style lang="less">
@import './assets/css/styles.less';
</style>
<style scoped>
.el-link {
  color: white;
  font-size: 12px;
  margin-top: -10px;
  margin-left: 10px;
}

.logo {
  margin-left: 15px;
  margin-top: 14px;
}
</style>
