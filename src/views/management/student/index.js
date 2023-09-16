import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import SkeletonEarningCard from 'components/Skeleton';

// models
import { getStudents } from 'models/student';

const Student = () => {
  const [isLoading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const columns = [
    { field: 'matricula', headerName: 'Matrícula', renderCell: (params) => params.row.user.matricula, flex: 1 },
    { field: 'name', headerName: 'Nome', renderCell: (params) => params.row.user.name, flex: 1 },
    { field: 'email', headerName: 'Email', renderCell: (params) => params.row.user.email, flex: 1 }
  ];

  const requestGetStudents = async () => {
    setLoading(true);
    const data = await getStudents();

    if (data) {
      setStudents(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    requestGetStudents();
  }, []);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <List title="Lista de Bolsistas" urlRegister="/cadastro-de-usuario" columns={columns} rows={students} />
      </Grid>
    </Grid>
  );
};

export default Student;
