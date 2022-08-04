import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Data } from "types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      // display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      display: true,
      title: {
        display: true,
        text: "Sales",
      },
    },
    x: {
      title: {
        display: true,
        text: "Months",
      },
    },
  },
};

const buildChartData = (data: Data[]) => {
  return {
    labels: data.map(({ label }) => label),
    datasets: [
      {
        label: "Sales",
        data: data.map(({ value }) => value),
        backgroundColor: "rgb(59 130 246 / 1)",
      },
    ],
  };
};

const Chart = (props: { data: Data[] }) => {
  const { data } = props;
  const chartData = buildChartData(data);
  return <Bar data={chartData} options={options as any} />;
};

export default Chart;
