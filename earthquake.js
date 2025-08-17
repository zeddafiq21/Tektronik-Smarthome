
 


  const ctx1 = document.getElementById('seismicChart').getContext('2d');
  const seismicChart = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Magnitude',
        data: [],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 7
        }
      }
    }
  });

  function simulateEarthquake() {
    const magnitude = (Math.random() * 7).toFixed(1);
    const statusElement = document.getElementById('status');
    const magnitudeElement = document.getElementById('magnitude');
    const timestampElement = document.getElementById('timestamp');

    const currentTime = new Date().toLocaleTimeString();

    // Update dashboard data
    magnitudeElement.textContent = magnitude;
    timestampElement.textContent = currentTime;

    // Update status
    if (parseFloat(magnitude) >= 4.5) {
      statusElement.textContent = 'Status: Gempa Terdeteksi!';
      statusElement.className = 'status-earthquake';
    } else {
      statusElement.textContent = 'Status: Normal';
      statusElement.className = 'status-normal';
    }

    // Update Chart Data
    if (seismicChart.data.labels.length >= 10) {
      seismicChart.data.labels.shift();
      seismicChart.data.datasets[0].data.shift();
    }
    seismicChart.data.labels.push(currentTime);
    seismicChart.data.datasets[0].data.push(magnitude);
    seismicChart.update();
  }
  setInterval(simulateEarthquake, 4000);
    



