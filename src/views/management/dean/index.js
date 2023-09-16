import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import SkeletonEarningCard from 'components/Skeleton';

// models
import { getDeans } from 'models/dean';

const Dean = () => {
  const [isLoading, setLoading] = useState(true);
  const [deans, setDeans] = useState([]);

  const columns = [
    { field: 'matricula', headerName: 'Matrícula', renderCell: (params) => params.row.user.matricula, flex: 1 },
    { field: 'name', headerName: 'Nome', renderCell: (params) => params.row.user.name, flex: 1 },
    { field: 'email', headerName: 'Email', renderCell: (params) => params.row.user.email, flex: 1 }
  ];

  const requestGetDeans = async () => {
    setLoading(true);
    const data = await getDeans();
    if (data) {
      setDeans(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestGetDeans();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <List title="Lista de Pró-Reitores" urlRegister="/cadastro-de-usuario" columns={columns} rows={deans} />
      </Grid>
    </Grid>
  );
};

export default Dean;
