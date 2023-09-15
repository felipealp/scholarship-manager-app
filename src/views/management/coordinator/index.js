import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import SkeletonEarningCard from 'components/cards/Skeleton/EarningCard';

// models
import { getCoordinators } from 'models/coordinator';

const Coordinator = () => {
  const [isLoading, setLoading] = useState(true);
  const [coordinators, setCoordinators] = useState([]);

  const columns = [
    { field: 'matricula', headerName: 'Matrícula', renderCell: (params) => params.row.user.matricula, flex: 1 },
    { field: 'name', headerName: 'Nome', renderCell: (params) => params.row.user.name, flex: 1 },
    { field: 'email', headerName: 'Email', renderCell: (params) => params.row.user.email, flex: 1 }
  ];

  const requestGetCoordinators = async () => {
    setLoading(true);
    const data = await getCoordinators();

    if (data) {
      setCoordinators(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestGetCoordinators();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <List title="Lista de Coordenadores" urlRegister="/cadastro-de-usuario" columns={columns} rows={coordinators} />
      </Grid>
    </Grid>
  );
};

export default Coordinator;
