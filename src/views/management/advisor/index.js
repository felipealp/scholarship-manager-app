import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import SkeletonEarningCard from 'components/cards/Skeleton/EarningCard';

// models
import { getAdvisors } from 'models/advisor';

const Advisor = () => {
  const [isLoading, setLoading] = useState(true);
  const [advisors, setAdvisors] = useState([]);

  const columns = [
    { field: 'matricula', headerName: 'Matrícula', renderCell: (params) => params.row.user.matricula, flex: 1 },
    { field: 'name', headerName: 'Nome', renderCell: (params) => params.row.user.name, flex: 1 },
    { field: 'email', headerName: 'Email', renderCell: (params) => params.row.user.email, flex: 1 }
  ];

  const requestGetAdvisors = async () => {
    setLoading(true);
    const data = await getAdvisors();

    if (data) {
      setAdvisors(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestGetAdvisors();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <List title="Lista de Orientadores" urlRegister="/cadastro-de-usuario" columns={columns} rows={advisors} />
      </Grid>
    </Grid>
  );
};

export default Advisor;
