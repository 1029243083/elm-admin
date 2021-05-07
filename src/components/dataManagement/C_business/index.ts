import { reactive, ref } from '@vue/reactivity'
import Http from '../../../Axios/index'
import Apis from '../../../Axios/Apis'
import { randomArr } from '../../../util'
import { Ref } from 'vue'
const dataRef: Ref<resultType[]> = ref([])
const visible = ref(false)
let currentPage = 0 // 当前页数
let currentIndex = 0
const isShowInput = ref(false) // 添加食品的input
let expandData: resultType
const inputValue = ref('')
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

const rules = {
  name: {
    required: true,
    message: '未填写店铺名字',
    trigger: 'blur'
  },
  address: {
    required: true,
    message: '未填写店铺地址',
    trigger: 'blur'
  },
  desc: {
    required: true,
    message: '未填写店铺描述',
    trigger: 'blur'
  }
}

// 表单数据
const formState = reactive({
  name: '',
  address: '',
  desc: ''
})

interface resultType {
  address: string
  desc: string
  food: string[]
  name: string
  id: string
}

// 获取数据
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

// 对话框的ok按钮
function handleOk() {
  dataRef.value[currentIndex].name = formState.name
  dataRef.value[currentIndex].address = formState.address
  dataRef.value[currentIndex].desc = formState.desc
  visible.value = false
}

// 显示对话框
function changeShow(record: resultType, index: number) {
  formState.name = record.name
  formState.address = record.address
  formState.desc = record.desc
  visible.value = true
  currentIndex = (currentPage - 1 < 0 ? 0 : currentPage - 1) * 10 + index
}

// 分页变化
function pageChange(a: { current: number; pageSize: number }) {
  currentPage = a.current
}

// 删除一项
function deleteData(index: number) {
  currentIndex = (currentPage - 1 < 0 ? 0 : currentPage - 1) * 10 + index
  dataRef.value.splice(currentIndex, 1)
}

// 显示添加食品的input框
function showInput() {
  isShowInput.value = true
}

// 可以获取展开那一行的数据
function expand(expanded: any, record: any) {
  expandData = record
}

// 添加食品
function handleInputConfirm() {
  expandData.food.push(inputValue.value)
  isShowInput.value = false
  inputValue.value = ''
}

export default {
  getData,
  handleOk,
  changeShow,
  pageChange,
  deleteData,
  showInput,
  expand,
  handleInputConfirm,
  inputValue,
  dataRef,
  columns,
  visible,
  rules,
  formState,
  isShowInput
}
