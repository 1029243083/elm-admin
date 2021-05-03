<template>
  <div class="header-wrapper">
    <h1>后台管理系统</h1>
    <div class="user-box">
      <div class="head-portrait">
        <img :src="urlRef" />
      </div>
      <div class="name">{{ nameRef }}</div>
      <a-button type="primary" size="small" shape="round" ghost @click="signOut">退出登录</a-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import UserInfo from './index'
  export default defineComponent({
    setup() {
      return {
        ...UserInfo
      }
    }
  })
</script>

<style scoped>
  .header-wrapper {
    width: 100%;
    height: 100%;
    background-color: #001529;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
  .header-wrapper h1 {
    display: flex;
    font-size: 1.3rem;
    justify-content: center;
    color: rgb(255, 255, 255);
    align-items: center;
    cursor: pointer;
  }
  .header-wrapper .user-box {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(221, 219, 219);
    cursor: pointer;
  }
  .header-wrapper .user-box .head-portrait {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
    overflow: hidden;
  }
  .header-wrapper .user-box .head-portrait img {
    width: 100%;
    height: 100%;
  }
  .header-wrapper .user-box .name {
    margin-right: 0.3rem;
  }
</style>
