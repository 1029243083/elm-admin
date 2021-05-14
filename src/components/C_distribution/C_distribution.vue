<template>
  <div ref="echars" :style="{ width: '100%', height: '30rem' }"></div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import * as echarts from 'echarts'
  export default defineComponent({
    setup() {
      const echars = ref()
      onMounted(() => {
        const myChart = echarts.init(echars.value)
        myChart.setOption({
          title: {
            text: '用户地址分布',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: '北京' },
                { value: 735, name: '上海' },
                { value: 580, name: '广州' },
                { value: 484, name: '深圳' },
                { value: 300, name: '长沙' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      })
      return {
        echars
      }
    }
  })
</script>

<style></style>
