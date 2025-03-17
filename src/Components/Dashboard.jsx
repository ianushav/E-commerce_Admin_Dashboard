import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCartPlus, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import '../Components/Styles/Dashboard.css';
import Categories from './PieChart'
import BarChart from './BarChart'
import DashboardCustomers from './DashboardCustomers'
import DashboardRecentOrders from './DashboardRecentOrders'
import DashboardProducts from './DashboardProducts'

// Reusable DataBox component for total values
const DataBox = ({ title, value, icon }) => {
  return (
    <div className="total-box">
      <div className="header-with-icon">
        <h3>{title}</h3>
        <div className="icon-circle">
          <span className="icon"><FontAwesomeIcon icon={icon} /></span>
        </div>
      </div>
      <p className="total-sales">{value}</p>
    </div>
  );
};

const Dashboard = () => {
  // Initial Data
  const initialData = {
    totalSales: "₹823,434.22",
    totalOrders: "9,967,254",
    visitors: "993,434",
  };

  const [totalData] = useState(initialData);

  return (
    <>
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>

      {/* Total Section */}
      <div className="total-section">
        <DataBox 
          title="Total Sales" 
          value={totalData.totalSales} 
          icon={faDollarSign} 
        />
        <DataBox 
          title="Total Orders" 
          value={totalData.totalOrders} 
          icon={faCartPlus} 
        />
        <DataBox 
          title="Visitors" 
          value={totalData.visitors} 
          icon={faUserAlt} 
        />
      </div>
    </div>
    <div className="dashboard-container1">
      <div className="left-container">
        <BarChart />
      </div>
      <div className="right-container">
        <Categories />
      </div>
    </div>
      <div>
        <DashboardCustomers />
      </div>
      <div>
        <DashboardRecentOrders />
      </div>
      <div>
        <DashboardProducts />
      </div>
    </>
  );
};

export default Dashboard;
