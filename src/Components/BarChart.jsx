import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../Components/Styles/BarChart.css"; // Import the CSS file

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueOrdersChart = () => {
  const [selectedOption, setSelectedOption] = useState("Week");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Current month (0-11)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Current year
  const [selectedWeekStart, setSelectedWeekStart] = useState(new Date()); // Start date of the selected week

  // Function to get the start and end dates of the selected week
  const getWeekRange = (startDate) => {
    const startOfWeek = new Date(startDate);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); 
  
    // Format the dates as "date month year"
    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" }); 
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    };
  
    return `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;
  };

  // Function to get the name of the selected month
  const getMonthName = (monthIndex) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[monthIndex];
  };

  // Function to handle month change
  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  // Function to handle year change
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  // Function to handle week start date change
  const handleWeekStartChange = (event) => {
    const startDate = new Date(event.target.value);
    setSelectedWeekStart(startDate);
  };

  // Data for the chart
  const dataByPeriod = {
    Week: {
      labels: ["S", "M", "T", "W", "Th", "F", "Sa"],
      datasets: [
        {
          label: "Revenue (INR)",
          data: [60000, 82700, 75000, 70000, 80000, 85000, 90000],
          backgroundColor: "#32CD32",
          yAxisID: "y-axis-revenue",
        },
        {
          label: "Orders (No.)",
          data: [500, 700, 650, 600, 750, 800, 850],
          backgroundColor: "#FFA500",
          yAxisID: "y-axis-orders",
        },
      ],
    },
    Month: {
      labels: Array.from({ length: 31 }, (_, i) => (i + 1).toString()), // Days of the month
      datasets: [
        {
          label: "Revenue (INR)",
          data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 1000000)),
          backgroundColor: "#32CD32",
          yAxisID: "y-axis-revenue",
        },
        {
          label: "Orders (No.)",
          data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 1000)),
          backgroundColor: "#FFA500",
          yAxisID: "y-axis-orders",
        },
      ],
    },
    Year: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Revenue (INR)",
          data: [8000000, 10000000, 12000000, 14000000, 0],
          backgroundColor: "#32CD32",
          yAxisID: "y-axis-revenue",
        },
        {
          label: "Orders (No.)",
          data: [70000, 85000, 90000, 95000, 10],
          backgroundColor: "#FFA500",
          yAxisID: "y-axis-orders",
        },
      ],
    },
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,
            family: "'Times New Roman', Times, serif",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const datasetLabel = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw;
            return `${datasetLabel}: ${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      "y-axis-revenue": {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Revenue (INR)",
        },
        ticks: {
          callback: (value) => `₹${value.toLocaleString()}`,
        },
      },
      "y-axis-orders": {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Orders (No.)",
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: (value) => `${value} orders`,
        },
      },
      x: {
        title: {
          display: true,
          text: "Time Period",
        },
      },
    },
  };

  // Handle dropdown change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

   // Generate year options from 2010 to the current year
   const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 2020; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2 className="chart-title">Revenue vs Orders</h2>
        <div className="filters">
          <select
            className="chart-dropdown"
            onChange={handleDropdownChange}
            value={selectedOption}
          >
            <option value="Week">Week</option>
            <option value="Month">Month</option>
            <option value="Year">Year</option>
          </select>
          {selectedOption === "Week" && (
            <div className="week-selector">
              <input
                type="date"
                value={selectedWeekStart.toISOString().split("T")[0]}
                onChange={handleWeekStartChange}
              />
              <span className="c">
                {getWeekRange(selectedWeekStart)}
              </span>
            </div>
          )}
          {selectedOption === "Month" && (
            <div className="month-year-selector">
              <select value={selectedMonth} onChange={handleMonthChange}>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>
                    {getMonthName(i)}
                  </option>
                ))}
              </select>
              <select value={selectedYear} onChange={handleYearChange}>
                {generateYearOptions().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedOption === "Year" && (
            <div className="year-selector">
            <select value={selectedYear} onChange={handleYearChange}>
                {generateYearOptions().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
      <Bar data={dataByPeriod[selectedOption]} options={options} />
    </div>
  );
};

export default RevenueOrdersChart;