<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="选择食品种类">
      <a-select ref="select" v-model:value="formState.type" style="width: 50rem">
        <a-select-option v-for="item in selectOptins" :key="item.key" :value="item.key">
          {{ item.value }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="种类描述">
      <a-input v-model:value="formState.typeDesc"></a-input>
    </a-form-item>
    <a-form-item label="食品名称">
      <a-input v-model:value="formState.foodName"></a-input>
    </a-form-item>
    <a-form-item label="食品活动">
      <a-input v-model:value="formState.foodActivity"></a-input>
    </a-form-item>
    <a-form-item label="食品详情">
      <a-input v-model:value="formState.foodDesc"></a-input>
    </a-form-item>
    <a-form-item label="食品详情">
      <Update />
    </a-form-item>
    <a-form-item label="食品特点">
      <a-select
        ref="select"
        v-model:value="formState.characteristic"
        placeholder="请选择"
        style="width: 50rem"
      >
        <a-select-option value="新品">新品 </a-select-option>
        <a-select-option value="招牌">招牌 </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="包装费">
      <a-input v-model:value="formState.PackingFee"></a-input>
    </a-form-item>
    <a-form-item label="价格">
      <a-input v-model:value="formState.Price"></a-input>
    </a-form-item>
  </a-form>
  <div class="btn-wrapper">
    <a-button type="primary" @click="handleOk">提交</a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Update from '../C_addFood/updata.vue'
  import Data from './index'
  export default defineComponent({
    components: {
      Update
    },
    setup() {
      return {
        ...Data()
      }
    }
  })
</script>

<style scoped>
  .btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
