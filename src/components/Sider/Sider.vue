<template>
  <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 100%; height: 100%"
    mode="inline"
    theme="dark"
  >
    <a-sub-menu v-for="item in menuData" :key="item.key">
      <template #title>
        <span>
          <span>{{ item.title }}</span>
        </span>
      </template>
      <a-menu-item v-for="s_item in item.children" :key="s_item.key">
        <router-link :to="s_item.to">{{ s_item.title }}</router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
  import Data from './index'
  import { defineComponent } from 'vue'
  import router from '../../router/index'
  export default defineComponent({
    setup() {
      router.push('/c_home')
      return {
        ...Data
      }
    }
  })
</script>

<style></style>
