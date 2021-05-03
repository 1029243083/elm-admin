import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router/index'
import 'ant-design-vue/dist/antd.css'
import './reset.css' // 重置css
import './iconfont.css' // 图标
import './mock/index' // 拦截ajax 模拟数据
import store from './store/index'

const app = createApp(App)
app.use(Antd).use(router).use(store).mount('#app')
