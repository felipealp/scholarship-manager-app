import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import SkeletonEarningCard from 'components/cards/Skeleton/EarningCard';

// models
import { getCampus } from 'models/campus';

const Campus = () => {
  const [isLoading, setLoading] = useState(true);
  const [campus, setCampus] = useState([]);

  const columns = [
    { field: 'nome', headerName: 'Nome', flex: 1 },
    { field: 'endereco', headerName: 'Endereço', flex: 1 }
  ];

  const requestGetCampus = async () => {
    setLoading(true);
    const data = await getCampus();

    if (data) {
      setCampus(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestGetCampus();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <List title="Lista de Campus" columns={columns} rows={campus} />
      </Grid>
    </Grid>
  );
};

export default Campus;
