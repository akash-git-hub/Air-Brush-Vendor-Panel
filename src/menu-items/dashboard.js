// assets
import { DashboardOutlined, UsergroupAddOutlined, SolutionOutlined, FileProtectOutlined  } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  FileProtectOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'VendorList',
      title: 'Add Events',
      type: 'item',
      url: '/add-event',
      icon: icons.UsergroupAddOutlined, 
      breadcrumbs: true
    },
    {
      id: 'EventList',
      title: 'Event List',
      type: 'item',
      url: '/event-list',
      icon: icons.SolutionOutlined,
      breadcrumbs: true
    },
    {
      id: 'OrderList',
      title: 'Order List',
      type: 'item',
      url: '/order-list',
      icon: icons.FileProtectOutlined,
      breadcrumbs: true
    }
  ]
};

export default dashboard;
