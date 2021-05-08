import Http from '../../../Axios/index'
import Apis from '../../../Axios/Apis'
import { ref } from '@vue/reactivity'

const tableDataRef = ref([])

const columns = [
  {
    title: '食品名称',
    dataIndex: 'name'
  },
  {
    title: '食品介绍',
    dataIndex: 'desc'
  },
  {
    title: '评分',
    dataIndex: 'score'
  },
  {
    title: '操作',
    key: 'action',
    slots: {
      customRender: 'action'
    }
  }
]

export default function () {
  async function getData() {
    tableDataRef.value = await (await Http.get(Apis.foodList)).data.data
  }
  getData()
  return {
    columns,
    tableDataRef
  }
}
