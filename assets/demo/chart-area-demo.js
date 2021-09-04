// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["05-08", "06-08", "07-08"],
    datasets: [{
      label: "Push Up (times)",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [15,20,14]
    },
{
      label: "Side Plank (second)",
      lineTension: 0.3,
      backgroundColor: "rgba(204,0,102,0.2)",
      borderColor: "rgba(204,0,102,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(204,0,102,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(204,0,102,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10,5,24]
    },
{
      label: "Shuttle (times)",
      lineTension: 0.3,
      backgroundColor: "rgba(153,153,0,0.2)",
      borderColor: "rgba(153,153,0,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(153,153,0,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(153,153,0,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [3,0,0]
    }
],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
