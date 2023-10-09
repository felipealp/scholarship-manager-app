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
      url: '/frequencias',
      icon: icons.IconListSearch
    },
    {
      id: 'plano-trabalho',
      title: 'Plano de Trabalho',
      type: 'item',
      url: '/plano-trabalho',
      icon: icons.IconLayoutGridAdd
    },
    {
      id: 'sample-page3',
      title: 'Relatório Semestral',
      type: 'item',
      url: '/relatorios',
      icon: icons.IconCheckupList
    }
  ]
};

export default other;
