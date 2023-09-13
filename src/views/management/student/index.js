import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// project imports
import List from 'components/list';
import SkeletonEarningCard from 'components/cards/Skeleton/EarningCard';

// models
import { getStudents } from 'models/student';

const Student = () => {
  const [isLoading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const columns = [
    { field: 'nome', headerName: 'Nome', flex: 1 },
    { field: 'endereco', headerName: 'Endereço', flex: 1 }
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
        <List title="Lista de Bolsistas" columns={columns} rows={students} />
      </Grid>
    </Grid>
  );
};

export default Student;
