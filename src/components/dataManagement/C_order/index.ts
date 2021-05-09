import Http from '../../../Axios/index'
import Apis from '../../../Axios/Apis'
import { Ref, ref } from '@vue/reactivity'

interface tableType {
  id: string
  price: number
  orderState: 0 | 1
  name: string
  shopName: string
  receivingAddress: string
  shopId: string
  shopAddress: string
}

interface orderStateType {
  text: number
  index: number
  record: tableType
}

const columns = [
  {
    title: '订单ID',
    dataIndex: 'id'
  },
  {
    title: '总价格',
    dataIndex: 'price'
  },
  {
    title: '订单状态',
    dataIndex: 'orderState',
    customRender: (data: orderStateType) => {
      return data.text === 0 ? '支付失败' : '支付成功'
    }
  }
]

const childrenText = [
  {
    key: '用户名',
    value: 'name'
  },
  {
    key: ' 店铺名称',
    value: 'shopName'
  },
  {
    key: '收货地址',
    value: 'receivingAddress'
  },
  {
    key: ' 店铺 ID',
    value: 'shopId'
  },
  {
    key: '店铺地址',
    value: 'shopAddress'
  }
]

const tableData: Ref<tableType[]> = ref([]) // 表格数据

const getData = async () => {
  const data = (await Http.get(Apis.orderlist)).data.data
  tableData.value = data
}

getData()

export default function () {
  return {
    tableData,
    columns,
    childrenText
  }
}
