// assets
import { IconBuildingSkyscraper, IconClipboardData, IconSchool, IconUsers, IconBrandApplePodcast } from '@tabler/icons';

// constant
const icons = { IconBuildingSkyscraper, IconClipboardData, IconSchool, IconUsers, IconBrandApplePodcast };

const management = {
  id: 'management',
  title: 'Gerenciamento',
  type: 'group',
  caption: 'Controle de Instituições',
  children: [
    {
      id: 'campus',
      title: 'Campus',
      type: 'item',
      url: '/cadastro',
      icon: icons.IconBuildingSkyscraper,
      breadcrumbs: false
    },
    {
      id: 'projects',
      title: 'Projetos',
      type: 'item',
      url: '/cadastro',
      icon: icons.IconClipboardData,
      breadcrumbs: false
    },
    {
      id: 'students',
      title: 'Bolsistas',
      type: 'item',
      url: '/cadastro',
      icon: icons.IconSchool,
      breadcrumbs: false
    },
    {
      id: 'coordinators',
      title: 'Coordenadores',
      type: 'item',
      url: '/cadastro',
      icon: icons.IconUsers,
      breadcrumbs: false
    },
    {
      id: 'deans',
      title: 'Pró-Reitores',
      type: 'item',
      url: '/cadastro',
      icon: icons.IconBrandApplePodcast,
      breadcrumbs: false
    }
  ]
};

export default management;
