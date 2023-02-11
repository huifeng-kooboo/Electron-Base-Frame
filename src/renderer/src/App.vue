<script setup lang="ts">
import { ElRow, ElCol, ElLink } from 'element-plus'
</script>
<template>
  <ElRow class="titleBar">
    <ElCol class="titleBarContent" :span="24">
      <el-image :src="url" style="width: 20px; height: 20px;" class="logo"></el-image>
      <el-link type="primary" class="titleInfo" :underline="false">有光推流客户端</el-link>
    </ElCol>
  </ElRow>
</template>
<style lang="less">
@import './assets/css/styles.less';
</style>

<script lang="ts">
export default {
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  }
}
</script>
<style scoped>
.el-link {
  color: white;
}

.logo {
  margin-left: 5 px;
  margin-top: 14px;
}
</style>
