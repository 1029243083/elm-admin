<template>
  <div class="wrapper">
    <h1>管理员设置</h1>
    <div class="box">
      <div v-for="item in data" :key="item.key" class="box-item">
        <div class="title">{{ item.key }}</div>
        <div v-if="item.key != '头像：'" class="value">{{ item.value }}</div>
        <img v-else :src="item.value" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, Ref, ref } from 'vue'
  import Http from '../../Axios/index'
  import Apis from '../../Axios/Apis'
  interface DataType {
    key: string
    value: string
  }
  export default defineComponent({
    setup() {
      const data: Ref<DataType[]> = ref([])

      Http.get(Apis.adminData).then((res) => {
        console.log(res.data)
        data.value = res.data.data
      })

      return {
        data
      }
    }
  })
</script>

<style scoped>
  .wrapper {
    width: 100%;
  }
  .wrapper h1 {
    text-align: center;
    font-size: 1.6rem;
  }
  .box {
    width: 80%;
    margin: 0 auto;
    margin-top: 1rem;
    background-color: rgba(231, 231, 231, 0.774);
    padding: 1rem;
    border-radius: 1rem;
  }
  .box-item {
    display: flex;
    padding-bottom: 3rem;
  }
</style>
