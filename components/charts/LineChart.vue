<template>
  <p>this is for test</p>

  <div class="mt-5 w-full">
    <client-only>
      <nuxt-plotly
          :data="pieChart.data"
          :layout="pieChart.layout"
          :config="pieChart.config"
          style="width: 100%"
      ></nuxt-plotly>
    </client-only>
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = reactive({
  labels: ["ja", "feb", "mar"],
  datasets: [ { data: [40, 20, 12] } ]
})

const chartOption = reactive({
  responsive: true,
})




</script>

<style scoped>

</style>