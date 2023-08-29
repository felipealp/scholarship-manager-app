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
      id: 'campus',
      title: 'Cadastro de Campus',
      type: 'item',
      url: '/cadastro/campus',
      icon: icons.IconHomePlus,
      breadcrumbs: false
    },
    {
      id: 'projeto',
      title: 'Cadastro de Projetos',
      type: 'item',
      url: '/cadastro/projeto',
      icon: icons.IconTemperaturePlus,
      breadcrumbs: false
    },
    {
      id: 'usuario',
      title: 'Cadastro de Usuários',
      type: 'item',
      url: '/cadastro/usuario',
      icon: icons.IconUserPlus,
      breadcrumbs: false
    }
  ]
};

export default registers;
