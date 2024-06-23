<template>
  <div class="admin-charts q-mt-md">
    <div class="bar-chart">
      <bar-chart :data="barChartData" :options="barChartOptions"></bar-chart>
    </div>
    <div class="pie-chart">
      <pie-chart :data="pieChartData" :options="pieChartOptions"></pie-chart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Bar, Pie } from 'vue-chartjs';
import 'chartjs-adapter-date-fns';

export default defineComponent({
  name: 'AdminCharts',
  components: {
    BarChart: Bar,
    PieChart: Pie
  },
  data() {
    return {
      barChartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales Data',
            backgroundColor: '#41B883',
            data: [40, 20, 30, 10, 50]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      pieChartData: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            data: [300, 50, 100]
          }
        ]
      },
      pieChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    // Render the charts
    this.$refs.barChart.renderChart(this.barChartData, this.barChartOptions);
    this.$refs.pieChart.renderChart(this.pieChartData, this.pieChartOptions);
  }
});
</script>

<style scoped>
.admin-charts {
  display: flex;
  justify-content: space-between;
}

.bar-chart, .pie-chart {
  width: 45%;
  max-width: 400px;
  margin-bottom: 20px;
}
</style>
