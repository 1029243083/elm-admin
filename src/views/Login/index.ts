import { ref } from 'vue'
import Http from '../../Axios/index'
import Apis from '../../Axios/Apis'
import { setStorage } from '../../util/index'
import store from '../../store/index'
import { message } from 'ant-design-vue'
import router from '../../router/index'

const loginId = ref('')
const loginPwd = ref('')
const captcha = ref('')
const captchaInput = ref('')

interface captchaRes {
  code: string
}

/**
 * 按下enter键时
 */
const pressEnter = function () {
  loginFun()
}

/**
 * 获取图片验证码
 */
const getCaptcha = async function () {
  const res = await Http.post<captchaRes>(Apis.captchas)
  captcha.value = res.data.code
}

getCaptcha()

/**
 * 刷新图片验证码
 */
const resetCaptchaRes = function () {
  getCaptcha()
}

const captchaCookie = function () {
  setStorage('cap', captchaInput.value)
}

/**
 * 登录函数
 */
const loginFun = async function () {
  const res = await Http.post(
    Apis.login,
    {
      username: loginId.value,
      password: loginPwd.value,
      captcha_code: captchaInput.value
    },
    {
      withCredentials: true
    }
  )
  if (res.data) {
    setStorage('user', JSON.stringify(res.data) + '')
    store.commit('setUser', res.data)
    message.success('登录成功', 1)
    router.push('/')
  } else {
    message.error('账号,密码,验证码错误')
  }
}

export default {
  loginId,
  loginPwd,
  captcha,
  captchaInput,
  pressEnter,
  resetCaptchaRes,
  loginFun,
  captchaCookie
}
