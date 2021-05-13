<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="店铺名称">
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item label="详细地址">
      <a-input v-model:value="formState.address" />
    </a-form-item>
    <a-form-item label="联系电话">
      <a-input v-model:value="formState.phone" />
    </a-form-item>
    <a-form-item label="店铺简介">
      <a-input v-model:value="formState.desc" />
    </a-form-item>
    <a-form-item label="店铺标语">
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item label="店铺分类">
      <a-select v-model:value="formState.classify" placeholder="请选择分类">
        <a-select-option v-for="item in selectOptions" :key="item" :value="item">
          {{ item }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="店铺特点">
      <div v-for="item in switchData" :key="item.key">
        {{ item.value }}
        <a-switch v-model:checked="item.checked" />
      </div>
    </a-form-item>
    <a-form-item label="配送费">
      <a-input v-model:value="formState.DistributionFee" />
    </a-form-item>
    <a-form-item label="起送价">
      <a-input v-model:value="formState.StartingPrice" />
    </a-form-item>
    <a-form-item label="营业时间">
      <a-time-picker v-model:value="formState.dateStart" />
      <a-time-picker v-model:value="formState.dateEnd" value-format="HH:mm" />
    </a-form-item>
    <a-form-item label="上传店铺头像"> <Update :form-state="formState" /></a-form-item>
    <a-form-item label="上传营业执照"> <Update :form-state="formState" /></a-form-item>
    <a-form-item label="上传餐饮服务许可证"> <Update :form-state="formState" /></a-form-item>
    <a-form-item label="优惠活动">
      <a-select
        v-model:value="formState.activity"
        placeholder="请选择分类"
        @change="selectChange(formState.activity)"
      >
        <a-select-option value="1">减满优惠</a-select-option>
        <a-select-option value="2">优惠大酬宾</a-select-option>
        <a-select-option value="3">新用户立减</a-select-option>
        <a-select-option value="4">进店领券</a-select-option>
      </a-select>
    </a-form-item>

    <a-form-item label="活动列表">
      <a-table
        :data-source="dataSource"
        :columns="columns"
        row-key="desc"
        bordered
        :row-class-name="(record, index) => (index % 2 === 1 ? 'table-striped' : null)"
        class="ant-table-striped"
        size="small"
      >
        <template #action="{ index }">
          <a-button type="danger" ghost @click="deleteActivity(index)">
            <template #icon><DeleteOutlined /></template>
          </a-button>
        </template>
      </a-table>
    </a-form-item>
  </a-form>
  <div class="btn-box">
    <a-button type="primary" class="btn" @click="newShop">创建店铺</a-button>
  </div>
  <a-modal v-model:visible="visible" title="提示" @ok="handleOk" @cancel="handleCancel">
    <p>请输入活动详情</p>
    <a-input v-model:value="formState.activityDesc" placeholder="请输入活动详情" />
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Update from './updata.vue'
  import { DeleteOutlined } from '@ant-design/icons-vue'

  import Data from './index'
  export default defineComponent({
    components: {
      Update,
      DeleteOutlined
    },
    setup() {
      return {
        ...Data()
      }
    }
  })
</script>

<style scoped>
  .ant-table-striped :deep(.table-striped) {
    background-color: #c9e5f5;
  }
  .btn-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
