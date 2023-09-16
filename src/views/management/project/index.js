import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import Toast from 'components/toast';
import SkeletonEarningCard from 'components/Skeleton';

// models
import { getAll, deleteRegister } from 'models/project';

const Project = () => {
  const [isLoading, setLoading] = useState(true);
  const [toastSuccess, setToastSuccess] = useState(false);
  const [toastError, setToastError] = useState(false);
  const [projects, setProjects] = useState([]);

  const columns = [
    { field: 'nome', headerName: 'Nome', flex: 1 },
    { field: 'descricao', headerName: 'Descrição', flex: 1 },
    { field: 'data_inicio', headerName: 'Ínicio', flex: 1 },
    { field: 'data_fim', headerName: 'Fim', flex: 1 }
  ];

  const requestProjectsList = async () => {
    setLoading(true);
    const data = await getAll();

    if (data) {
      setProjects(data);
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteRegister(item.id);
      setToastSuccess(true);
      requestProjectsList();
    } catch (err) {
      setToastError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestProjectsList();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Toast
          type="success"
          message={`Projeto apagado com sucesso!`}
          open={toastSuccess}
          handleClose={() => {
            setToastSuccess(false);
          }}
        />
        <Toast
          type="error"
          message={`Projeto não pôde ser apagado!`}
          open={toastError}
          handleClose={() => {
            setToastError(false);
          }}
        />

        <List title="Lista de Projetos" urlRegister="/cadastro-de-projeto" handleDelete={handleDelete} columns={columns} rows={projects} />
      </Grid>
    </Grid>
  );
};

export default Project;
