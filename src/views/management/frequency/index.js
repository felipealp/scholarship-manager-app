import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

import Table from './table'
import { gridSpacing } from 'store/constant';

// ============================== Frequency Page ============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(isLoading)
    setTimeout(function() {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={12}>
            {/* <PopularCard isLoading={isLoading} /> */}
            <Table isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
