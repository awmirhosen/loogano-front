<!-- eslint-disable vue/html-self-closing -->
<template>
  <div>
    <h1>Test Re-Draw</h1>
    <button :onClick="changeData" style="width: 100%">Change Data</button>
    <button :onClick="changeLayout" style="width: 100%">Change Layout</button>
    <button :onClick="changeConfig" style="width: 100%">Change Config</button>
    <nuxt-plotly
        :data="pieChart.data"
        :layout="pieChart.layout"
        :config="pieChart.config"
        style="width: 100%"
    ></nuxt-plotly>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const data0 = [
  {
    values: [0, 10, 5],
    labels: ["Residential", "Non-Residential", "Utility"],
    type: "scatter",
  },
];

const layout0 = {
  title: "[layout0] Pie Chart on `PieChart.client.vue`",
};


const config0 = { scrollZoom: false, displayModeBar: false };

const pieChart = reactive({
  data: data0,
  config: config0,
  layout: layout0,
});

function changeData() {
  if (pieChart.changeDataNo === 1) {
    pieChart.data = data1;
    pieChart.changeDataNo = 0;
  } else {
    pieChart.data = data0;
    pieChart.changeDataNo = 1;
  }
}

function changeLayout() {
  if (pieChart.changeLayoutNo === 1) {
    pieChart.layout = layout1;
    pieChart.changeLayoutNo = 0;
  } else {
    pieChart.layout = layout0;
    pieChart.changeLayoutNo = 1;
  }
}

function changeConfig() {
  if (pieChart.changeConfigNo === 1) {
    pieChart.config = config1;
    pieChart.changeConfigNo = 0;
  } else {
    pieChart.config = config0;
    pieChart.changeConfigNo = 1;
  }
}
</script>