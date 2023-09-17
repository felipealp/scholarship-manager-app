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

const Dean = () => {
  const [isLoading, setLoading] = useState(true);
  const [toastSuccess, setToastSuccess] = useState(false);
  const [toastError, setToastError] = useState(false);
  const [deans, setDeans] = useState([]);

  const columns = [
    { field: 'matricula', headerName: 'Matrícula', renderCell: (params) => params.row.user.matricula, flex: 1 },
    { field: 'name', headerName: 'Nome', renderCell: (params) => params.row.user.name, flex: 1 },
    { field: 'email', headerName: 'Email', renderCell: (params) => params.row.user.email, flex: 1 }
  ];

  const requestDeansList = async () => {
    setLoading(true);
    const data = await getAll('proreitor');

    if (data) {
      setDeans(data);
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteRegister('proreitor', item.id);
      setToastSuccess(true);
      requestDeansList();
    } catch (err) {
      setToastError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestDeansList();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Toast
          type="success"
          message={`Reitor apagado com sucesso!`}
          open={toastSuccess}
          handleClose={() => {
            setToastSuccess(false);
          }}
        />
        <Toast
          type="error"
          message={`Reitor não pôde ser apagado!`}
          open={toastError}
          handleClose={() => {
            setToastError(false);
          }}
        />

        <List
          title="Lista de Reitores"
          urlRegister="/cadastro-de-usuario/reitor"
          handleDelete={handleDelete}
          columns={columns}
          rows={deans}
        />
      </Grid>
    </Grid>
  );
};

export default Dean;
