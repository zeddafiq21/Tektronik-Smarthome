   const tempEl = document.getElementById('temperature');
    const smokeEl = document.getElementById('smoke');
    const statusEl = document.getElementById('status');
    const alarmBtn = document.getElementById('alarmBtn');

    const ctx = document.getElementById('chart').getContext('2d');
    const data = {
      labels: [],
      datasets: [
        { label: 'Temperature (°C)', data: [], borderColor: 'red', fill: false },
        { label: 'Smoke Level (%)', data: [], borderColor: 'blue', fill: false }
      ]
    };

    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: { beginAtZero: true },
          x: { ticks: { autoSkip: true, maxTicksLimit: 10 } }
        }
      }
    });

    function updateDashboard() {
      const temp = parseFloat((20 + Math.random() * 40).toFixed(1)); // Simulasi
      const smoke = parseFloat((Math.random() * 100).toFixed(1));     // Simulasi

      tempEl.textContent = `${temp}°C`;
      smokeEl.textContent = `${smoke}%`;

      const fireDetected = temp > 50 || smoke > 70;


const statusBox = document.getElementById('statusBox');

// Ubah class berdasarkan kondisi fireDetected
if (fireDetected) {
  statusBox.classList.remove('normal');
  statusBox.classList.add('fire');
  statusBox.textContent = 'Status: FIRE DETECTED!';
} else {
  statusBox.classList.remove('fire');
  statusBox.classList.add('normal');
  statusBox.textContent = 'Status: Normal';
}
      const time = new Date().toLocaleTimeString();
      data.labels.push(time);
      data.datasets[0].data.push(temp);
      data.datasets[1].data.push(smoke);

      if (data.labels.length > 20) {
        data.labels.shift();
        data.datasets[0].data.shift();
        data.datasets[1].data.shift();
      }

      chart.update();
    }
    setInterval(updateDashboard, 3000);
