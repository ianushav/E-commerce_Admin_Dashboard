import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "../Components/Styles/PieChart.css"; 

// ✅ Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Chart Data
  const data = {
    labels: [
      "Electronics", "Fashion", "Beauty", "Home", "Health", 
      "Grocery", "Sports", "Toys", "Books", "Automobiles"
    ],
    datasets: [
      {
        data: [15, 10, 12, 10, 8, 9, 7, 8, 6, 5, 4, 3, 2, 1], // Sample sales distribution
        backgroundColor: [
          "#6b8e23", "#ff4500", "#ffa500", "#4169e1", 
          "#8a2be2", "#dc143c", "#ff69b4", "#20b2aa", "#008080", 
          "#ffd700", "#ff6347", "#8b4513"
        ],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: { 
        position: "bottom", 
        labels: { 
          color: "#333", 
          font: { size: 14 }, 
          boxWidth: 10, 
          padding: 15 
        } 
      },
      tooltip: { 
        callbacks: { 
          label: (tooltipItem) => `${tooltipItem.raw}%` 
        } 
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <h2 className="pie-chart-title">Sales by Top Categories</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
