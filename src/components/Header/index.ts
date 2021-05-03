import { getStorage, removeStorage } from '../../util'
import { ref } from 'vue'
import store from '../../store'
import router from '../../router'
interface userType {
  username: string
  url: string
}

const user = getStorage('user')
const nameRef = ref('')
const urlRef = ref('')

if (user) {
  const userObj: userType = JSON.parse(user)
  nameRef.value = userObj.username
  urlRef.value = userObj.url
}

/**
 * 退出登录
 * 1. 删除vuex中的信息
 * 2. 删除strage中的信息
 * 3. 跳转登录页
 */
function signOut() {
  store.commit('setUser', {})
  removeStorage('user')
  router.push('/login')
}

export default {
  nameRef,
  urlRef,
  signOut
}
