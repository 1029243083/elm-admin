import { RouteRecordRaw } from 'vue-router'
import Login from '../views/Login/Login.vue'
import Home from '../views/Home/Home.vue'

// 数据管理组件
import C_home from '../components/C_home/C_home.vue'
import C_userList from '../components/dataManagement/C_userList/C_userList.vue'
import C_business from '../components/dataManagement/C_business/C_business.vue'
import C_food from '../components/dataManagement/C_food/C_food.vue'
import C_adminList from '../components/dataManagement/C_adminList/C_adminList.vue'
import C_order from '../components/dataManagement/C_order/C_order.vue'

// 添加数据组件
import C_addFood from '../components/addData/C_addFood/C_addFood.vue'
import C_addShop from '../components/addData/C_addShop/C_addShop.vue'

// 用户分布
import C_distribution from '../components/C_distribution/C_distribution.vue'

// 设置
import C_setup from '../components/C_setup/C_setup.vue'

// 说明
import C_explain from '../components/C_explain/C_explain.vue'

const routes: RouteRecordRaw[] = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Home,
    children: [
      { path: 'c_home', component: C_home },
      { path: 'c_userlist', component: C_userList },
      { path: 'c_business', component: C_business },
      { path: 'c_food', component: C_food },
      { path: 'c_adminList', component: C_adminList },
      { path: 'c_order', component: C_order },
      { path: 'c_addfood', component: C_addFood },
      { path: 'c_addshop', component: C_addShop },
      { path: 'c_distribution', component: C_distribution },
      { path: 'c_setup', component: C_setup },
      { path: 'c_explain', component: C_explain }
    ]
  }
]
export default routes
