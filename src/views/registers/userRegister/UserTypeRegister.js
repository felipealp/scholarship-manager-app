import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// material-ui
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// project imports
import FormRegister from './FormRegister';

const UserTypeRegister = () => {
  const { type } = useParams();

  const userTypeLogged = localStorage.getItem('user_type');
  const [userType, setUserType] = useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const requestUserRegister = async () => {
    if (type) {
      setUserType(type.charAt(0).toUpperCase() + type.slice(1));
    }
  };

  const getOptions = () => {
    if (userTypeLogged === 'Bolsista') {
      return [];
    } else if (userTypeLogged === 'Orientador') {
      return ['Bolsista', 'Orientador'];
    } else if (userTypeLogged === 'Coordenador') {
      return ['Bolsista', 'Orientador', 'Coordenador'];
    } else if (userTypeLogged === 'ProReitor' || userTypeLogged === 'Usuário Padrão') {
      return ['Bolsista', 'Orientador', 'Coordenador', 'Pró-Reitor'];
    } else {
      return [];
    }
  };

  const userTypeOptions = getOptions();

  useEffect(() => {
    requestUserRegister();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {userTypeOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {userTypeContent()}
    </>
  );
};

export default UserTypeRegister;
