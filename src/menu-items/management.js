// assets
import { IconDashboard, IconSchool, IconClipboardList } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconSchool, IconClipboardList };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Gerenciamento',
  type: 'group',
  caption: 'Controle de Bolsa Acadêmica',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'pesquisa',
      title: 'Dados da Bolsa',
      type: 'item',
      url: '/pesquisa',
      icon: icons.IconSchool,
      breadcrumbs: false
    },
    {
      id: 'frequencia',
      title: 'Frequência',
      type: 'item',
      url: '/frequencia',
      icon: icons.IconClipboardList,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
