import { Ref, ref } from '@vue/reactivity'
import { message } from 'ant-design-vue'
import Router from '../../../router/index'
interface fromStateType {
  foodName?: string
}

const formState: Ref<fromStateType> = ref({})
const selectOptins = ref([
  {
    key: 'TopSellingList',
    value: '热销榜'
  },
  {
    key: 'DiscountList',
    value: '折扣榜'
  },
  {
    key: 'delicious',
    value: '好吃的😀'
  }
])
const labelCol = { span: 8 }

const wrapperCol = { span: 14 }

const handleOk = () => {
  if (formState.value.foodName) {
    message.success('提交成功')
    formState.value = {}
    Router.push('/c_business')
  } else {
    message.info('必须填写食品名称')
  }
}

export default function () {
  return {
    formState,
    selectOptins,
    labelCol,
    wrapperCol,
    handleOk
  }
}
