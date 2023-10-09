import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'components/cards';
import SkeletonEarningCard from 'components/Skeleton';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard>
          <h1 style={{ color: '#1e88e5', textAlign: 'center' }}>Bem-vindo</h1>
          <Typography style={{ textAlign: 'center' }} ariant="body1">
            Aqui você tem total gerenciamento para bolsa acadêmica.
          </Typography>{' '}
        </MainCard>
      </Grid>
      {/* <Grid item xs={6}>
        <MainCard>
          <h1 style={{ color: 'black', textAlign: 'center' }}>Bem-vindo</h1>
          <Typography style={{ textAlign: 'center' }} ariant="body1">
            Aqui você tem total gerenciamento para bolsa acadêmica.
          </Typography>{' '}
        </MainCard>
      </Grid>
      <Grid item xs={6}>
        <MainCard>
          <h1 style={{ color: 'black', textAlign: 'center' }}>Bem-vindo</h1>
          <Typography style={{ textAlign: 'center' }} ariant="body1">
            Aqui você tem total gerenciamento para bolsa acadêmica.
          </Typography>{' '}
        </MainCard>
      </Grid> */}
    </Grid>
  );
};

export default Dashboard;
