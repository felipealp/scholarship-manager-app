import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import SkeletonEarningCard from 'components/cards/Skeleton/EarningCard';

// models
import { getProjects } from 'models/project';

const Project = () => {
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const columns = [
    { field: 'nome', headerName: 'Nome', flex: 1 },
    { field: 'descricao', headerName: 'Descrição', flex: 1 },
    { field: 'coordenador', headerName: 'Coordenador', flex: 1 },
    { field: 'data_inicio', headerName: 'Ínicio', flex: 1 },
    { field: 'data_fim', headerName: 'Fim', flex: 1 }
  ];

  const requestGetProjects = async () => {
    setLoading(true);
    const data = await getProjects();

    if (data) {
      setProjects(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestGetProjects();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <List title="Lista de Projetos" urlRegister="/cadastro-de-projeto" columns={columns} rows={projects} />
      </Grid>
    </Grid>
  );
};

export default Project;
