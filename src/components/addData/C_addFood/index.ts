import { Ref, ref } from '@vue/reactivity'
import { message } from 'ant-design-vue'
import router from '../../../router/index'

interface formStateType {
  activity?: number | undefined
  activityDesc?: string
  name?: string
  type?: string
  address?: string
  phone?: string
  desc?: string
  title?: string
  classify?: string
  DistributionFee?: string
  StartingPrice?: string
  dateStart?: string
  dateEnd?: string
}

interface dataSourceType {
  title?: string
  desc?: string
  name?: string
}

const formState: Ref<formStateType> = ref({})
const selectOptions = ['虚拟', '服装', '美容', '数码', '家居', '母婴', '食品', '文体', '服务']
const switchData = ref([
  {
    key: 'brand',
    value: '品牌保证',
    checked: true
  },
  {
    key: 'SpecialDelivery',
    value: '峰鸟专送',
    checked: true
  },
  {
    key: 'newShop',
    value: '新开店铺',
    checked: true
  },
  {
    key: 'takeOutInsurance',
    value: '外卖保',
    checked: true
  },
  {
    key: 'arriveOnTime',
    value: '准时达',
    checked: true
  },
  {
    key: 'drawABill',
    value: '开发票',
    checked: true
  }
])

const dataSource: Ref<dataSourceType[]> = ref([])
const columns = [
  {
    title: '活动标题',
    dataIndex: 'title'
  },
  {
    title: '活动名称',
    dataIndex: 'name',
    customRender(obj: any) {
      if (obj.text === '1') {
        return '减慢优惠'
      } else if (obj.text === '2') {
        return '优惠大酬宾'
      } else if (obj.text === '3') {
        return '新用户立减'
      } else {
        return '进店零券'
      }
    }
  },
  {
    title: '活动详情',
    dataIndex: 'desc'
  },
  {
    title: '操作',
    key: 'action',
    slots: {
      customRender: 'action'
    }
  }
]

const labelCol = {
  span: 8
}

const wrapperCol = { span: 14 }

const selectChange = (activity: number) => {
  console.log(activity)
  visible.value = true
}

const visible = ref(false)

const handleOk = () => {
  visible.value = false
  const obj: {
    title: string
    desc: string
    name: string
  } = {
    title: '',
    desc: '',
    name: ''
  }
  if (formState.value.activity && formState.value.activity == 1) {
    obj.title = '减'
  } else if (formState.value.activity && formState.value.activity == 2) {
    obj.title = '特'
  } else if (formState.value.activity && formState.value.activity == 3) {
    obj.title = '新'
  } else {
    obj.title = '领'
  }
  // console.log(obj.title, formState.value.activity, formState.value.activityDesc)
  if (formState.value.activity) {
    obj.name = (formState.value.activity as unknown) as string
  }
  if (formState.value.activityDesc) {
    obj.desc = formState.value.activityDesc
  }
  const newArr = [...dataSource.value, obj]
  dataSource.value = newArr
  formState.value.activityDesc = ''
}

const handleCancel = () => {
  formState.value.activity = undefined
  formState.value.activityDesc = ''
  message.info('活动取消')
}

const deleteActivity = (index: number) => {
  dataSource.value.splice(index, 1)
}

const newShop = () => {
  router.push('/c_business')
}

export default function () {
  return {
    formState,
    selectOptions,
    switchData,
    labelCol,
    wrapperCol,
    visible,
    selectChange,
    handleOk,
    handleCancel,
    deleteActivity,
    newShop,
    dataSource,
    columns
  }
}
