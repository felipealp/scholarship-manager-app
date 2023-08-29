import management from './management';
import other from './reports';

// dean
import deanManagement from './dean/management';
import deanRegisters from './dean/registers';

const userType = localStorage.getItem('user_type');

let menuItems;

if (userType === 'reitor') {
  menuItems = {
    items: [deanManagement, deanRegisters]
  };
} else {
  menuItems = {
    items: [management, other]
  };
}

export default menuItems;
