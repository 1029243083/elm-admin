<template>
  <a-table :columns="columns" :data-source="dataRef" row-key="id">
    <template #action="{ record }">
      <a-button type="primary" ghost @click="changeShow(record)">
        <template #icon><EditOutlined /></template>
      </a-button>
      <a-button type="danger" ghost>
        <template #icon><DeleteOutlined /></template>
      </a-button>
    </template>
    <template #expandedRowRender="{ record }">
      <a-tag color="pink">食品名称:</a-tag>
      <a-tag v-for="item in record.food" :key="item" color="green">{{ item }}</a-tag>
    </template>
  </a-table>

  <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Index from './index'
  import { DeleteOutlined, EditOutlined } from '@ant-design/icons-vue'
  export default defineComponent({
    components: {
      DeleteOutlined,
      EditOutlined
    },
    setup() {
      return {
        ...Index
      }
    }
  })
</script>

<style scoped>
  .ant-btn {
    margin-right: 1rem !important;
  }
</style>
