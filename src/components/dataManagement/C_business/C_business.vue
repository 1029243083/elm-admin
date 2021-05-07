<template>
  <a-table
    :columns="columns"
    :data-source="dataRef"
    row-key="id"
    @change="pageChange"
    @expand="expand"
  >
    <template #action="{ record, index }">
      <a-button type="primary" ghost @click="changeShow(record, index)">
        <template #icon><EditOutlined /></template>
      </a-button>
      <a-button type="danger" ghost @click="deleteData(index)">
        <template #icon><DeleteOutlined /></template>
      </a-button>
    </template>
    <template #expandedRowRender="{ record }">
      <a-tag color="pink">食品名称:</a-tag>
      <a-tag v-for="item in record.food" :key="item" color="green" closable>
        {{ item }}
      </a-tag>
      <a-input
        v-if="isShowInput"
        ref="inputRef"
        v-model:value="inputValue"
        type="text"
        size="small"
        :style="{ width: '78px' }"
        @keyup.enter="handleInputConfirm"
      />
      <a-tag v-else style="background: #fff; border-style: dashed" @click="showInput">
        <PlusOutlined />
        New Tag
      </a-tag>
    </template>
  </a-table>

  <a-modal v-model:visible="visible" title="修改信息" @ok="handleOk">
    <a-form :rules="rules" :model="formState">
      <a-form-item label="店铺名称" name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="店铺地址" name="address">
        <a-input v-model:value="formState.address" />
      </a-form-item>
      <a-form-item label="店铺描述" name="desc">
        <a-input v-model:value="formState.desc" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Index from './index'
  import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons-vue'
  export default defineComponent({
    components: {
      DeleteOutlined,
      EditOutlined,
      PlusOutlined
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
