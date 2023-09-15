import management from './management';
import other from './reports';

// student
import studentManagement from './student/management';
import studentRegisters from './student/registers';

// advisor
import advisorManagement from './advisor/management';
import advisorRegisters from './advisor/registers';

// coordinator
import coordinatorManagement from './coordinator/management';
import coordinatorRegisters from './coordinator/registers';

// dean
import deanManagement from './dean/management';
import deanRegisters from './dean/registers';

const userType = localStorage.getItem('user_type');

let menuItems;

if (userType === 'Bolsista') {
  menuItems = {
    items: [studentManagement, studentRegisters]
  };
} else if (userType === 'Orientador') {
  menuItems = {
    items: [advisorManagement, advisorRegisters]
  };
} else if (userType === 'Coordenador') {
  menuItems = {
    items: [coordinatorManagement, coordinatorRegisters]
  };
} else if (userType === 'ProReitor') {
  menuItems = {
    items: [deanManagement, deanRegisters]
  };
} else {
  menuItems = {
    items: [management, other]
  };
}

export default menuItems;
