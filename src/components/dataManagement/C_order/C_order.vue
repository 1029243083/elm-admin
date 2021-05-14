<template>
  <a-table :data-source="tableData" :columns="columns" row-key="id">
    <template #expandedRowRender="{ record }">
      <div class="wrapper">
        <div v-for="item in childrenText" :key="item.key" class="wrapper-box">
          <div class="children-title">{{ item.key }}：</div>
          <div class="text">
            <a-tag color="purple">{{ record[item.value] }}</a-tag>
          </div>
        </div>
      </div>
    </template>
  </a-table>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import data from './index'
  export default defineComponent({
    setup() {
      return {
        ...data()
      }
    }
  })
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .wrapper-box {
    display: flex;
    width: 50%;
    padding-bottom: 1rem;
  }
  .wrapper-box .children-title {
    width: 5rem;
    color: rgb(112, 112, 112);
  }
  @media screen and (max-width: 500px) {
    .wrapper {
      display: flex;
      flex-direction: column;
    }
  }
</style>
