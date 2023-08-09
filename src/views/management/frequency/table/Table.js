// material-ui
// import { Typography } from '@mui/material';

import './style.scss';

// project imports
import MainCard from 'components/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

// const 

const SamplePage = () => (
  <MainCard title="Sample Card">
    {/* <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography> */}

    <table>
      {/* titles */}
      <tr>
        <th rowSpan="2">Dia</th>
        <th colSpan="2">Manhã</th>
        <th colSpan="2">Tarde</th>
        <th colSpan="2">Noite</th>
        <th rowSpan="2">Horas por dia</th>
        <th rowSpan="2">Assinatura do Bolsista</th>
      </tr>

      <tr>
        <th>Entrada</th>
        <th>Saída</th>
        <th>Entrada</th>
        <th>Saída</th>
        <th>Entrada</th>
        <th>Saída</th>
      </tr>

      {/* values */}
      <tr>
        {/* dia do mês */}
        <td>1</td>
        {/* manhã */}
        <td>
          <input type="time" />
        </td>
        <td>
          <input type="time" />
        </td>
        {/* tarde */}
        <td>
          <input type="time" />
        </td>
        <td>
          <input type="time" />
        </td>
        {/* noite */}
        <td>
          <input type="time" />
        </td>
        <td>
          <input type="time" />
        </td>
        {/* total de horas */}
        <td>12hr</td>
        {/* assinatura */}
        <td>12hr</td>
      </tr>
    </table>
  </MainCard>
);

export default SamplePage;
