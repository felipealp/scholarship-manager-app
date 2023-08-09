// assets
import { IconListSearch, IconCheckupList, IconLayoutGridAdd } from '@tabler/icons';

// constant
const icons = { IconListSearch, IconCheckupList, IconLayoutGridAdd };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  title: 'Relatórios',
  type: 'group',
  caption: 'Controle de Atividades Realizadas',
  children: [
    {
      id: 'sample-page',
      title: 'Lista de Frequências',
      type: 'item',
      url: '/reports',
      icon: icons.IconListSearch,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'Plano de Trabalho',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconLayoutGridAdd,
      external: true,
      target: true
    },
    {
      id: 'sample-page',
      title: 'Relatório Semestral',
      type: 'item',
      url: '/reports',
      icon: icons.IconCheckupList,
      breadcrumbs: false
    }
  ]
};

export default other;
