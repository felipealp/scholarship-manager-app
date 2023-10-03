import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// material-ui
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { Button } from '@mui/material';
import { IconClipboardList } from '@tabler/icons';

// project imports
import MainCard from 'components/cards';
import Table from './table';
import SkeletonEarningCard from 'components/Skeleton';
import Report from './report';
import { monthNumberToName } from 'utils/dates';

// models
import { getFrequency, postFrequency } from 'models/frequency';

const Frequency = () => {
  const navigate = useNavigate();
  const { mes } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [month, setMonth] = useState('');
  const [frequency, setFrequency] = useState([]);
  const [reportData, setReportData] = useState({});

  const hangleChangeMonth = (month) => {
    setLoading(true);
    setMonth(month);
    navigate('/frequencia/' + month);
  };

  // set time in frequency
  const handleTime = (event, index, turno, movimentacao) => {
    const frequencyData = frequency;
    frequencyData[index][turno][movimentacao] = event.target.value;

    // calculate total hours
    // frequencyData[index].totalHoras = 5;

    setFrequency(frequencyData);

    setReportData({
      ...reportData,
      frequency
    });
  };

  useEffect(() => {
    const currentMonth = monthNumberToName(new Date().getMonth() + 1);
    setMonth(mes || currentMonth);

    const frequencyRequest = getFrequency(month);
    setFrequency(frequencyRequest);
  }, [mes, month]);

  useEffect(() => {
    setReportData({
      student: 'Nome Aluno',
      advisor: 'Nome Orientador',
      month: 'Janeiro',
      year: '2023',
      monthlyHours: 0,
      frequency
    });
  }, [frequency]);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 500);
  }, [month]);

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <MainCard title="Frequência">
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
            <div style={{ width: '65%' }}>
              <FormControl style={{ height: '40px', width: '100%' }}>
                <InputLabel id="month-label">Mês</InputLabel>
                <Select
                  labelId="month-label"
                  id="month"
                  label="Mês"
                  value={month}
                  onChange={(e) => hangleChangeMonth(e.target.value)}
                  style={{ minWidth: '150px' }}
                >
                  <MenuItem value="janeiro">Janeiro</MenuItem>
                  <MenuItem value="fevereiro">Fevereiro</MenuItem>
                  <MenuItem value="março">Março</MenuItem>
                  <MenuItem value="abril">Abril</MenuItem>
                  <MenuItem value="maio">Maio</MenuItem>
                  <MenuItem value="junho">Junho</MenuItem>
                  <MenuItem value="julho">Julho</MenuItem>
                  <MenuItem value="agosto">Agosto</MenuItem>
                  <MenuItem value="setembro">Setembro</MenuItem>
                  <MenuItem value="outubro">Outubro</MenuItem>
                  <MenuItem value="novembro">Novembro</MenuItem>
                  <MenuItem value="dezembro">Dezembro</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <Button
                variant="contained"
                style={{ margin: '0 0.5rem', backgroundColor: '#1e88e5', color: 'white', height: '50px' }}
                onClick={() => postFrequency({ month, frequency })}
                startIcon={<IconClipboardList />}
              >
                Salvar Horários
              </Button>
            </div>
            <Report data={reportData} />
          </div>

          <Table frequency={frequency} handleTime={handleTime} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Frequency;
