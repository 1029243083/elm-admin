<template>
  <a-table :data-source="tableDataRef" :columns="columns" bordered row-key="id">
    <template #action="">
      <a-button type="primary" ghost>
        <template #icon><EditOutlined /></template>
      </a-button>
      <a-button type="danger" ghost>
        <template #icon><DeleteOutlined /></template>
      </a-button>
    </template>
    <template #expandedRowRender="{ record }">
      <div class="wrapper">
        <div class="desc-box">
          <span class="text">食品名称：</span>
          <span>
            <a-tag color="blue">{{ record.name }}</a-tag>
          </span>
        </div>
        <div class="desc-box">
          <span class="text">餐馆名称：</span>
          <a-tag color="blue">{{ record.shopName }}</a-tag>
        </div>
        <div class="desc-box">
          <span class="text">食品ID：</span>
          <a-tag color="blue">{{ record.id }}</a-tag>
        </div>
        <div class="desc-box">
          <span class="text">餐馆 ID：</span>
          <a-tag color="blue">{{ record.shopId }}</a-tag>
        </div>
        <div class="desc-box">
          <span class="text">食品介绍：</span>
          <a-tag color="blue">{{ record.desc }}</a-tag>
        </div>
        <div class="desc-box">
          <span class="text">餐馆地址：</span>
          <a-tag color="blue">{{ record.shopAddress }}</a-tag>
        </div>
        <div class="desc-box">
          <span class="text">食品评分：</span>
          <a-tag color="blue">{{ record.score }}</a-tag>
        </div>
        <div class="desc-box">
          <span class="text">食品分类：</span>
          <a-tag color="blue">{{ record.foodClassify }}</a-tag>
        </div>
        <div class="desc-box">
          <span class="text">月销量：</span>
          <a-tag color="blue">{{ record.salesVolume }}</a-tag>
        </div>
      </div>
    </template>
  </a-table>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Data from './index'
  import { DeleteOutlined, EditOutlined } from '@ant-design/icons-vue'
  export default defineComponent({
    components: {
      DeleteOutlined,
      EditOutlined
    },
    setup() {
      return {
        ...Data()
      }
    }
  })
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .desc-box {
    width: 50%;
    padding-bottom: 1rem;
  }
  .text {
    display: inline-block;
    font-size: 0.7rem;
    width: 4rem;
    color: rgb(129, 129, 129);
  }
</style>
