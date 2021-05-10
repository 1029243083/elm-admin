<template>
  <a-table :data-source="adminList" :columns="columns" bordered row-key="id" />
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Http from '../../../Axios/index'
  import Apis from '../../../Axios/Apis'
  const adminList = ref([])
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '注册时间',
      dataIndex: 'cTime'
    },
    {
      title: '地址',
      dataIndex: 'address'
    },
    {
      title: '权限',
      dataIndex: 'jurisdiction'
    }
  ]
  export default defineComponent({
    setup() {
      Http.get(Apis.adminlist).then((res) => {
        adminList.value = res.data.data
      })

      return {
        adminList,
        columns
      }
    }
  })
</script>

<style></style>
