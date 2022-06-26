<template>
  <div class="page">
    <highchart
      class=""
      :options="chartOptions"
      :update="['options.title', 'options.series']"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Fruit Consumption',
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges'],
        },
        yAxis: {
          title: {
            text: 'Fruit eaten',
          },
        },
        series: [
          {
            name: 'Jane',
            data: [1, 0, 4],
          },
          {
            name: 'John',
            data: [5, 7, 3],
          },
        ],
      },
    }
  },
  methods: {},
}
</script>
