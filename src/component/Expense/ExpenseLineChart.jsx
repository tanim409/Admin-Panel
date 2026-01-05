import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  plugins,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ExpenseLineChart({ chartData }) {

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins:{
          legend:{
            display:false,
          },
          tooltip: {
            backgroundColor: 'rgba(17, 24, 39, 0.95)',
            titleColor: '#f9fafb',
            bodyColor: '#f9fafb',
            borderColor: 'rgba(99, 102, 241, 0.2)',
            borderWidth: 1,
            padding: 12,
            displayColors: false,
            callbacks: {
                label: (context) => `Revenue: ${formatCurrency(context.parsed.y)}`
            }
        }
        },
        scales: {
          x: {
              grid: {
                  color: 'rgba(99, 102, 241, 0.1)',
                  drawBorder: false
              },
              ticks: {
                  color: '#9ca3af',
                  font: {
                      size: 11
                  }
              }
          },
          y: {
              grid: {
                  color: 'rgba(99, 102, 241, 0.1)',
                  drawBorder: false
              },
              ticks: {
                  color: '#9ca3af',
                  font: {
                      size: 11
                  },
                  callback: (value) => '$' + value.toLocaleString()
              }
          }
      },
      };

    return (
      <div>
       <Line options={options} data={chartData} />
      </div>
    );
}