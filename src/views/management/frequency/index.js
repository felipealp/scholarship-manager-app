import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Grid } from '@mui/material';

// project imports
import MainCard from 'components/cards';
import Table from './table';
import { gridSpacing } from 'store/constant';
import SkeletonEarningCard from 'components/Skeleton';
import Report from './report';

const Frequency = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  const [month, setMonth] = useState('');
  const handleMonth = (month) => {
    setLoading(true);
    setMonth(month);
    navigate('/frequencia/' + month);
  };

  const hanbleGenerateReport = () => {
    console.log(frequency);
    generatePDF();
  };

  useEffect(() => {
    console.log(isLoading);
    setTimeout(function () {
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month]);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>

      <img src="src/assets/images/brasao.png" alt="Brasão" />
        <MainCard title="Frequência">
          <div>
            <label htmlFor="month">Mês: </label>
            <select value={month} onChange={(e) => handleMonth(e.target.value)}>
              <option value="janeiro">janeiro</option>
              <option value="fevereiro">fevereiro</option>
              <option value="março">março</option>
              <option value="abril">abril</option>
              <option value="maio">maio</option>
              <option value="junho">junho</option>
              <option value="julho">julho</option>
              <option value="agosto">agosto</option>
              <option value="setembro">setembro</option>
              <option value="outrubro">outrubro</option>
              <option value="novembro">novembro</option>
              <option value="dezembro">dezembro</option>
            </select>

            <button onClick={() => console.log(frequency)}>Salvar</button>
            <button onClick={hanbleGenerateReport}>Imprimir Folha</button>
            <Report />
          </div>

          <Table />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Frequency;
