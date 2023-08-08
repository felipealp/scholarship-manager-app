import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import Table from './Table'
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [
    isLoading, 
    setLoading] = useState(true);
  useEffect(() => {
    console.log(isLoading)
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            diga?
            {/* <EarningCard isLoading={isLoading} /> */}
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            diga?
            {/* {/* <TotalOrderLineChartCard isLoading={isLoading} /> */}
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
            diga?
                {/* {/* <TotalIncomeDarkCard isLoading={isLoading} /> */}
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {/* {/* <TotalIncomeLightCard isLoading={isLoading} /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={12}>
            {/* <PopularCard isLoading={isLoading} /> */}
            <Table />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
