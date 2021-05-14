<template>
  <div class="card-wrapper">
    <template v-for="item in cardData" :key="item.title">
      <C_home_card :title="item.title" :num="item.num" :color="item.color" />
    </template>
  </div>
  <div ref="echars" :style="{ width: '100%', height: '30rem' }"></div>
</template>

<script lang="ts">
  import C_home_card from './C_home_card/C_home_card.vue'
  import { defineComponent, onMounted, Ref, ref } from 'vue'
  import * as echarts from 'echarts'
  import Http from '../../Axios/index'
  import Apis from '../../Axios/Apis'
  interface carDataType {
    title: string
    num: number
    color: string
  }
  export default defineComponent({
    components: {
      C_home_card
    },
    setup() {
      const cardData: Ref<carDataType[]> = ref([])
      const echars = ref()
      Http.get(Apis.getHomeCard).then((res) => {
        cardData.value = res.data.data
      })

      onMounted(() => {
        const myChart = echarts.init(echars.value)
        myChart.setOption({
          title: { text: '总销量' },
          xAxis: {
            data: ['2016', '2017', '2018', '2019', '2020', '2021']
          },

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            formatter: function (params: any) {
              return (
                params[0].name +
                '<br/>' +
                params[0].seriesName +
                ' : ' +
                params[0].value +
                '<br/>' +
                params[1].seriesName +
                ':' +
                params[1].value +
                '<br />' +
                params[2].seriesName +
                ' : ' +
                params[2].value
              )
            }
          },
          yAxis: {
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ]
          },
          series: [
            {
              name: '注册用户',
              type: 'line',
              data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              lineStyle: {
                color: '#ef5b9c'
              }
            },
            {
              name: '销量',
              type: 'line',
              data: [1.5, 2.9, 3.7, 6.8, 5.1, 6.5, 7.8, 8.9, 9.9, 10.1, 11.8, 12.7]
            },
            {
              name: '新增订单',
              type: 'line',
              data: [3.5, 9.9, 7.7, 8.8, 5.1, 6.5, 8.8, 8.9, 10.9, 12.1, 13.8, 14.7]
            }
          ]
        })
      })
      return {
        cardData,
        echars
      }
    }
  })
</script>

<style scoped>
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 500px) {
    .card-wrapper {
      flex-direction: column;
      margin: 0 auto;
    }
  }
</style>
