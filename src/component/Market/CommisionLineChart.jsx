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
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default function CommisionLineChart({ chartData }) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
                label: (context) => `Revenue: ${formatCurrency(context.parsed.y.toLocaleString())}`
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
      <div style={{ width: '98%', height: '80%' ,padding:'1rem'}}>
       <Line options={options} data={chartData} />
      </div>
    );
}