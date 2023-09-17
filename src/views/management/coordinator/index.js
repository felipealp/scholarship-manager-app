import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import Toast from 'components/toast';
import SkeletonEarningCard from 'components/Skeleton';

// models
import { getAll, deleteRegister } from 'models/user';

const Coordinator = () => {
  const [isLoading, setLoading] = useState(true);
  const [toastSuccess, setToastSuccess] = useState(false);
  const [toastError, setToastError] = useState(false);
  const [coordinators, setCoordinators] = useState([]);

  const columns = [
    { field: 'matricula', headerName: 'Matrícula', renderCell: (params) => params.row.user.matricula, flex: 1 },
    { field: 'name', headerName: 'Nome', renderCell: (params) => params.row.user.name, flex: 1 },
    { field: 'email', headerName: 'Email', renderCell: (params) => params.row.user.email, flex: 1 }
  ];

  const requestCoordinatorsList = async () => {
    setLoading(true);
    const data = await getAll('coordenador');

    if (data) {
      setCoordinators(data);
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteRegister('coordenador', item.id);
      setToastSuccess(true);
      requestCoordinatorsList();
    } catch (err) {
      setToastError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestCoordinatorsList();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Toast
          type="success"
          message={`Coordenador apagado com sucesso!`}
          open={toastSuccess}
          handleClose={() => {
            setToastSuccess(false);
          }}
        />
        <Toast
          type="error"
          message={`Coordenador não pôde ser apagado!`}
          open={toastError}
          handleClose={() => {
            setToastError(false);
          }}
        />

        <List
          title="Lista de Coordenadores"
          urlRegister="/cadastro-de-usuario/coordenador"
          handleDelete={handleDelete}
          columns={columns}
          rows={coordinators}
        />
      </Grid>
    </Grid>
  );
};

export default Coordinator;
