<template>
  <a-table
    :data-source="tableDataRef"
    :columns="columns"
    bordered
    row-key="id"
    @change="pageChange"
  >
    <template #action="{ record, index }">
      <a-button type="primary" ghost @click="edit(record, index)">
        <template #icon><EditOutlined /></template>
      </a-button>

      <a-popconfirm title="是否确认删除" ok-text="Yes" cancel-text="No" @confirm="confirm(index)">
        <a-button type="danger" ghost>
          <template #icon><DeleteOutlined /></template>
        </a-button>
      </a-popconfirm>
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
  <a-modal v-model:visible="visible" title="食品修改" @ok="handleOk">
    <a-form :model="formState" :rules="rules">
      <a-form-item label="食品名称" name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="食品介绍" name="desc">
        <a-input v-model:value="formState.desc" />
      </a-form-item>
      <a-form-item label="食品分类" name="foodClassify">
        <a-select v-model:value="formState.foodClassify" style="width: 12rem">
          <a-select-option v-for="item in selectOptions" :key="item" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
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
