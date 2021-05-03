<template>
  <div class="wrapper">
    <transition appear>
      <div class="login-box">
        <h1>后台管理系统</h1>
        <a-input v-model:value="loginId" placeholder="admin" />
        <a-input-password v-model:value="loginPwd" placeholder="123123" @press-enter="pressEnter" />
        <a-button type="primary" block @click="loginFun">登录</a-button>
        <div class="verification-box">
          <div class="input">
            <a-input
              v-model:value="captchaInput"
              placeholder="验证码"
              @change="captchaCookie"
              @press-enter="pressEnter"
            />
          </div>
          <div class="image" @click="resetCaptchaRes">
            <div v-text="captcha" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import LoginObj from './index'
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      return {
        ...LoginObj
      }
    }
  })
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      45deg,
      rgba(234, 241, 167, 0.377),
      rgba(139, 219, 243, 0.616)
    );
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper .login-box {
    position: relative;
    width: 25%;
    padding: 2rem;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .wrapper .login-box h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
  }
  .wrapper .login-box .ant-input {
    margin-bottom: 1rem;
  }
  .wrapper .login-box .ant-btn {
    margin-top: 1rem;
  }
  .v-enter-from {
    transform: scale(0);
  }
  .v-enter-active {
    transition: all 0.5s;
  }
  .v-enter-to {
    transform: scale(1);
  }
  .verification-box {
    margin-top: 1rem;
    display: flex;
    height: 2rem;
  }
  .verification-box .input {
    flex: 3;
  }
  .verification-box .image {
    flex: 1;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
  }
  .verification-box .image div {
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
    color: #1890ff;
  }
  @media screen and (max-width: 500px) {
    .wrapper .login-box {
      width: 70%;
    }
  }
</style>
