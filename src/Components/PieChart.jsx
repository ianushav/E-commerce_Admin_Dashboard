import { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../Components/Styles/PieChart.css"; 

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new ChartJS(chartRef.current, {
      type: "pie",
      data: {
        labels: ["Hair Care", "Baby Care", "Skin Care", "Medicine"],
        datasets: [
          {
            data: [30, 20, 25, 25],
            backgroundColor: ["#6b8e23", "#ff4500", "#ffa500", "#4169e1"],
            borderWidth: 1,
            borderColor: "#fff",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { color: "#333", font: { size: 14 }, boxWidth: 10, padding: 15 } },
          tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.raw}%` } },
        },
      },
    });

    return () => chartInstance.destroy();
  }, []);

  return (
    <div className="pie-chart-container">
      <h2 className="pie-chart-title">Sales by Top Categories</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
