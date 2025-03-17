import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBag, faMortarPestle, faUsers, faSignOut } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Styles/AdminSidebar.css';

const sidebarItems = [
  { name: 'Dashboard', path: '/', icon: faHome },
  { name: 'Orders', path: '/orders', icon: faShoppingBag },
  { name: 'Products', path: '/products', icon: faMortarPestle },
  { name: 'Customers', path: '/customers', icon: faUsers },
  { name: 'Logout', path: '/logout', icon: faSignOut },
];

const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="AdminSidebar">
      <ul className="AdminSidebar-list list-unstyled">
        {sidebarItems.map((item) => {
          const isActive =
            item.name === 'Products'
              ? currentPath.startsWith('/products') || currentPath.startsWith('/addproduct') || currentPath.startsWith('/updateproduct')
              : item.path === '/'
              ? currentPath === '/' || currentPath === '/'
              : currentPath === item.path;

          return (
            <li key={item.name} className="AdminSidebar-item">
              <Link
                to={item.path}
                className={`AdminSidebar-link ${isActive ? 'AdminSidebar-active' : ''}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <FontAwesomeIcon icon={item.icon} className="AdminSidebar-icon" />
                <span className="AdminSidebar-text">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminSidebar;
