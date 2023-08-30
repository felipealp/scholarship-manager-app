// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';

const Campus = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <List />
      </Grid>
    </Grid>
  );
};

export default Campus;
