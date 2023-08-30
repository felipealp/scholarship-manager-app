import { useState } from 'react';

// material-ui
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// project imports
import FormRegister from './FormRegister';

const UserTypeRegister = () => {
  const [userType, setUserType] = useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const userTypeContent = () => {
    if (userType) {
      return <FormRegister userType={userType} />;
    } else {
      return (
        <div style={{ textAlign: 'center', margin: '20px', color: '#364152' }}>
          Para prosseguir com o cadastro é necessário selecionar o tipo de usuário que deseja cadastrar
        </div>
      );
    }
  };

  return (
    <>
      <div style={{ marginTop: '25px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo de Usuário</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userType}
            label="Tipo de Usuário"
            onChange={handleChange}
          >
            <MenuItem value="Bolsista">Bolsista</MenuItem>
            <MenuItem value="Orientador">Orientador</MenuItem>
            <MenuItem value="Coordenador">Coordenador</MenuItem>
            <MenuItem value="Pró-Reitor">Pró-Reitor</MenuItem>
          </Select>
        </FormControl>
      </div>

      {userTypeContent()}
    </>
  );
};

export default UserTypeRegister;
