// assets
import { IconClipboardData, IconSchool, IconUser, IconBrandApplePodcast } from '@tabler/icons';

// constant
const icons = { IconClipboardData, IconSchool, IconUser, IconBrandApplePodcast };

const management = {
  id: 'management',
  title: 'Gerenciamento',
  type: 'group',
  caption: 'Controle de Instituições',
  children: [
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
    }
  ]
};

export default management;
