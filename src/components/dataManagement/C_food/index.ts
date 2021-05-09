import Http from '../../../Axios/index'
import Apis from '../../../Axios/Apis'
import { Ref, ref } from '@vue/reactivity'
import { message } from 'ant-design-vue'

const tableDataRef: Ref<tableType[]> = ref([]) // 表格数据
const visible = ref(false) // 是否显示对话框

// 表单数据
const formState: Ref<tableType> = ref({
  name: '',
  desc: '',
  foodClassify: ''
})

let currentPage = 0 // 当前页数
let currentIndex = 0 // 当前要修改的数据索引

// 表格每一项类型
interface tableType {
  name: string
  desc: string
  foodClassify: string
}
// 食品分类数据
const selectOptions = [
  '乳与乳制品',
  '脂肪、油和乳化脂肪制品',
  '冷冻饮品',
  '粮食和粮食制品',
  '焙烤食品',
  '肉及肉制品',
  '水产品及其制品',
  '蛋及蛋制品',
  '甜味料',
  '调味品',
  '特殊营养食品',
  '饮料类',
  '酒类'
]

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

// 表单规则
const rules = {
  name: [
    {
      required: true,
      message: '必须填写名称',
      trigger: 'blur'
    }
  ],
  desc: [
    {
      required: true,
      message: '必须填写描述',
      trigger: 'blur'
    }
  ],
  foodClassify: [
    {
      required: true,
      message: '必须填写分类',
      trigger: 'blur'
    }
  ]
}

// 点击对话框的ok按钮
const handleOk = () => {
  tableDataRef.value[currentIndex].name = formState.value.name
  tableDataRef.value[currentIndex].desc = formState.value.desc
  tableDataRef.value[currentIndex].foodClassify = formState.value.foodClassify
  visible.value = false
}

// 点击编辑按钮
const edit = (record: any, index: number) => {
  currentIndex = (currentPage - 1 < 0 ? 0 : currentPage - 1) * 10 + index
  visible.value = true
}

// 点击删除数据
const confirm = (index: number) => {
  currentIndex = (currentPage - 1 < 0 ? 0 : currentPage - 1) * 10 + index
  tableDataRef.value.splice(currentIndex, 1)
  message.success('删除成功')
}

// 改变分页
const pageChange = (a: any) => {
  currentPage = a.current
}

export default function () {
  // 获取数据
  async function getData() {
    tableDataRef.value = await (await Http.get(Apis.foodList)).data.data
  }
  getData()
  return {
    columns,
    tableDataRef,
    visible,
    formState,
    selectOptions,
    rules,
    handleOk,
    edit,
    pageChange,
    confirm
  }
}
