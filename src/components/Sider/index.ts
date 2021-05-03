import { ref } from '@vue/reactivity'
import Http from '../../Axios/index'
const menuData = ref([])
const selectedKeys = ref(['sub-1-1'])
const openKeys = ref(['sub-1'])

function getMenuData() {
  Http.get('/api/menu').then((res) => {
    menuData.value = res.data.data
  })
}
getMenuData()

export default {
  menuData,
  selectedKeys,
  openKeys,
  getMenuData
}
