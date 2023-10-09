import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import Toast from 'components/toast';
import SkeletonEarningCard from 'components/Skeleton';

// models
import { getAll, deleteRegister } from 'models/campus';

const Campus = () => {
  const [isLoading, setLoading] = useState(true);
  const [toastSuccess, setToastSuccess] = useState(false);
  const [toastError, setToastError] = useState(false);
  const [campus, setCampus] = useState([]);

  const columns = [
    { field: 'nome', headerName: 'Nome', flex: 1 },
    { field: 'endereco', headerName: 'Endereço', flex: 1 }
  ];

  const requestCampusList = async () => {
    setLoading(true);
    const data = await getAll();

    if (data) {
      setCampus(data);
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteRegister(item.id);
      setToastSuccess(true);
      requestCampusList();
    } catch (err) {
      setToastError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestCampusList();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Toast
          type="success"
          message={`Campus apagado com sucesso!`}
          open={toastSuccess}
          handleClose={() => {
            setToastSuccess(false);
          }}
        />
        <Toast
          type="error"
          message={`Campus não pôde ser apagado!`}
          open={toastError}
          handleClose={() => {
            setToastError(false);
          }}
        />

        <List title="Lista de Campus" urlRegister="/cadastro-de-campus" handleDelete={handleDelete} columns={columns} rows={campus} />
      </Grid>
    </Grid>
  );
};

export default Campus;
