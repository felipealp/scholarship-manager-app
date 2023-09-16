// assets
import { IconBuildingSkyscraper, IconClipboardData, IconSchool, IconUsers, IconUser } from '@tabler/icons';

// constant
const icons = { IconBuildingSkyscraper, IconClipboardData, IconSchool, IconUser, IconUsers };

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
      url: '/campus',
      icon: icons.IconBuildingSkyscraper,
      breadcrumbs: false
    },
    {
      id: 'projetos',
      title: 'Projetos',
      type: 'item',
      url: '/projetos',
      icon: icons.IconClipboardData,
      breadcrumbs: false
    },
    {
      id: 'bolsistas',
      title: 'Bolsistas',
      type: 'item',
      url: '/bolsistas',
      icon: icons.IconSchool,
      breadcrumbs: false
    },
    {
      id: 'orientadores',
      title: 'Orientadores',
      type: 'item',
      url: '/orientadores',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'coordenadores',
      title: 'Coordenadores',
      type: 'item',
      url: '/coordenadores',
      icon: icons.IconUsers,
      breadcrumbs: false
    }
  ]
};

export default management;
