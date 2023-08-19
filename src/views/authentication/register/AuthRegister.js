import { useState } from 'react';

// material-ui
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';

// project imports
import FormRegister from './FormRegister';

const AuthRegister = () => {
  const [userType, setUserType] = useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const hasdad = () => {
    if (userType) {
      return <FormRegister userType={userType} />;
    } else {
      return (
        <div style={{ textAlign: 'center', margin: '20px', color: '#999999' }}>
          Para prosseguir com o cadastro é importante selecionar esse campo considerando que o sistema fornece as funcionalidades de acordo
          com o seu perfil
        </div>
      );
    }
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Registre-se com os Dados Acadêmicos</Typography>
          </Box>
        </Grid>
      </Grid>

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
            <MenuItem value="Coordenador">Coordenador</MenuItem>
            <MenuItem value="Reitoria">Reitoria</MenuItem>
          </Select>
        </FormControl>
      </div>

      {hasdad()}
    </>
  );
};

export default AuthRegister;
