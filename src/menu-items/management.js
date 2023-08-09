// assets
import { IconDashboard, IconClipboardList } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconClipboardList };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Gerenciamento',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'frequency',
      title: 'Frequência',
      type: 'item',
      url: '/frequency',
      icon: icons.IconClipboardList,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
