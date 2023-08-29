// assets
import { IconHomePlus, IconTemperaturePlus, IconUserPlus } from '@tabler/icons';

// constant
const icons = { IconHomePlus, IconTemperaturePlus, IconUserPlus };

const registers = {
  id: 'registers',
  title: 'Cadastros',
  type: 'group',
  caption: 'Controle de Usuários',
  children: [
    {
      id: 'campus-register',
      title: 'Cadastro de Campus',
      type: 'item',
      url: '/cadastro',
      icon: icons.IconHomePlus,
      breadcrumbs: false
    },
    {
      id: 'campus-register',
      title: 'Cadastro de Projetos',
      type: 'item',
      url: '/cadastro',
      icon: icons.IconTemperaturePlus,
      breadcrumbs: false
    },
    {
      id: 'usuarios',
      title: 'Cadastro de Usuários',
      type: 'item',
      url: '/usuarios/cadastro',
      icon: icons.IconUserPlus,
      breadcrumbs: false
    }
  ]
};

export default registers;
