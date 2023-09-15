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
      id: 'cadastro-de-projeto',
      title: 'Cadastro de Projetos',
      type: 'item',
      url: '/cadastro-de-projeto',
      icon: icons.IconTemperaturePlus,
      breadcrumbs: false
    },
    {
      id: 'cadastro-de-usuario',
      title: 'Cadastro de Usuários',
      type: 'item',
      url: '/cadastro-de-usuario',
      icon: icons.IconUserPlus,
      breadcrumbs: false
    }
  ]
};

export default registers;
