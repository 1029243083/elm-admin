<template>
  <div id="wrapper">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="wrapper">
      <div class="sider">
        <slot name="sider"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>

<style scoped>
  #wrapper {
    height: 100%;
  }
  .header {
    width: 100%;
    height: 5rem;
  }
  .wrapper {
    display: flex;
    height: calc(100% - 5rem);
  }
  .wrapper .sider {
    width: 15%;
    height: 100%;
    background-color: red;
  }
  .wrapper .content {
    width: 85%;
    height: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    overflow-y: auto;
    /* background-color: #222222; */
  }
  @media screen and (max-width: 500px) {
    .wrapper .content {
      width: 70%;
      height: 100%;
    }
    .wrapper .sider {
      width: 30%;
      height: 100%;
      background-color: red;
    }
  }
</style>
