import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) {
    return <>Carregando...</>;
  }

  return <Grid>Dashboard</Grid>;
};

export default Dashboard;
