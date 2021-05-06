<template>
  <a-table :columns="columns" :data-source="userlist" row-key="id" size="middle" bordered>
  </a-table>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import Http from '../../../Axios/index'
  import Apis from '../../../Axios/Apis'
  import { getStorage } from '../../../util'
  export default defineComponent({
    setup() {
      let userlist = ref(getStorage('userlist'))
      const columns = [
        {
          title: '#',
          customRender(obj: any) {
            return obj.index
          },
          align: 'center'
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'id',
          align: 'center'
        },
        {
          title: '出生年月',
          dataIndex: 'time',
          key: 'id',
          align: 'center'
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'id',
          align: 'center'
        }
      ]
      if (!userlist.value) {
        Http.get(Apis.userList).then((res) => {
          userlist.value = res.data.data
        })
      }

      return {
        userlist,
        columns
      }
    }
  })
</script>

<style></style>
