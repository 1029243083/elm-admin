import { ref } from '@vue/reactivity'
import Http from '../../../Axios/index'
import Apis from '../../../Axios/Apis'
import { randomArr } from '../../../util'
import { Ref } from 'vue'
const dataRef: Ref<resultType[]> = ref([])
const visible = ref(false)
const columns = [
  {
    title: '店铺名称',
    dataIndex: 'name'
  },
  {
    title: '店铺地址',
    dataIndex: 'address'
  },
  {
    title: '店铺描述',
    dataIndex: 'desc',
    ellipsis: true
  },
  {
    title: '操作',
    key: 'action',
    slots: {
      customRender: 'action'
    }
  }
]

interface resultType {
  address: string
  desc: string
  food: string[]
  name: string
  id: string
}
function getData() {
  Http.get(Apis.business).then((res) => {
    const result: resultType[] = res.data.data
    result.forEach((item) => {
      item.food = randomArr(item.food) // 随机在数组中取几项
    })
    dataRef.value = result
  })
}

getData()

function handleOk() {
  console.log('ok')
}

function changeShow(record: object) {
  console.log(record)
  visible.value = true
}

export default {
  getData,
  handleOk,
  changeShow,
  dataRef,
  columns,
  visible
}
