export const drawChart = () => {
  document.querySelector('.ageChart').addEventListener('click', function() {
    // Hiển thị modal
    const modal = new bootstrap.Modal(document.getElementById('employeeChartModal'));
    modal.show();

    // Gửi yêu cầu đến API để lấy dữ liệu
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        // Xử lý dữ liệu từ API để tính số lượng nhân viên theo nhóm tuổi
        const ageGroups = {
          'Under 25': 0,
          '25-34': 0,
          '35-44': 0,
          '45 and over': 0
        };

        data.forEach(user => {
          const age = user.age;
          if (age < 25) {
            ageGroups['Under 25']++;
          } else if (age >= 25 && age <= 34) {
            ageGroups['25-34']++;
          } else if (age >= 35 && age <= 44) {
            ageGroups['35-44']++;
          } else {
            ageGroups['45 and over']++;
          }
        });

        // Tạo dữ liệu cho biểu đồ
        const chartData = {
          labels: Object.keys(ageGroups),
          datasets: [{
            label: 'Number of Employees',
            data: Object.values(ageGroups),
            backgroundColor: ['red', 'blue', 'green', 'yellow']
          }]
        };

        // Tạo biểu đồ
        const ctx = document.getElementById('employeeChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar', // Loại biểu đồ: bar, line, pie, etc.
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
}
