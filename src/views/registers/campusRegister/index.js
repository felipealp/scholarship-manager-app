// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import MainCard from 'components/cards/MainCard';
import FormRegister from './FormRegister';

const CampusRegister = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={12}>
            <MainCard title="Cadastro de Campus">
              <FormRegister />
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CampusRegister;
