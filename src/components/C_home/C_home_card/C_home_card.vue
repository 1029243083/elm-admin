<template>
  <div class="wrapper">
    <div class="card-box" :style="{ background: color }">
      <h1>{{ title }}</h1>
      <div class="num">{{ num }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  //   interface Props {
  //     title: string
  //     num: number
  //   }
  export default defineComponent({
    props: ['title', 'num', 'color'],
    setup(prop) {
      return {
        ...prop
      }
    }
  })
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  }
  .card-box {
    width: 12rem;
    height: 7rem;
    background-color: #444693;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    justify-content: center;
    color: #fff;
    align-items: center;
    transition: all 0.3s;
  }
  .card-box:hover {
    transform: scale(1.1);
  }
  .card-box h1 {
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  .card-box .num {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 500px) {
    .card-box {
      width: 13rem;
      height: 7rem;
      background-color: #444693;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      align-items: center;
      margin: 0 auto;
      margin-bottom: 0.5rem;
      transition: all 0.3s;
    }
  }
</style>
