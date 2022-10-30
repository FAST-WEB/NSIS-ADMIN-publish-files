$(function () {
  var context = document.getElementById('mainChart').getContext('2d');
  var horizontalBarChart = new Chart(context, {
    type: 'horizontalBar',
    data: {
      labels: ["NEQIS 소개", "미국", "성능검증동향", "성능검증소식", "공지사항", "한국", "국내제도소개"],
      datasets: [{
        data: [2000, 4000, 6000, 8000, 10000, 12000, 14000],
        backgroundColor: "rgba(78, 115, 223, 1)",
      }]
    },
    options: {
      tooltips: {
        enabled: false
      },
      hover: {
        animationDuration: 0
      },
      responsive: true,
      legend: {
        display: false,
        position: 'bottom',
        fullWidth: true,
        labels: {
          boxWidth: 10,
          padding: 10
        }
      },
      scales: {
        yAxes: [{
          barPercentage: 0.75,
          gridLines: {
            display: true,
            drawTicks: true,
            drawOnChartArea: false
          },
          ticks: {
            fontColor: '#555759',
            fontSize: 11
          },
          barThickness: 18,
        }],
        xAxes: [{
          gridLines: {
            display: true,
            drawTicks: false,
            tickMarkLength: 5,
            drawBorder: false
          },
          ticks: {
            padding: 5,
            beginAtZero: true,
            fontColor: '#555759',
            fontSize: 11,
          },
          scaleLabel: {
            display: true,
            padding: 10,
            fontColor: '#555759',
            fontSize: 16,
            fontStyle: 700,
            labelString: '조회수'
          },

        }]
      },
      animation: {
        onComplete: function () {
          var chartInstance = this.chart;
          var ctx = chartInstance.ctx;
          ctx.textAlign = "center";
          ctx.font = "11px Open Sans";
          ctx.fillStyle = "#fff";

          Chart.helpers.each(
            this.data.datasets.forEach(function (dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              Chart.helpers.each(
                meta.data.forEach(function (bar, index) {
                  data = dataset.data[index];
                  ctx.fillText(data, bar._model.x - 25, bar._model.y + 4);
                }),
                this
              );
            }),
            this
          );
        }
      }
    }
  });
});