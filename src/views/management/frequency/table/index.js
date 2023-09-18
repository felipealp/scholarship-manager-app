// material-ui
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFrequency } from 'models/frequency';

import './style.scss';

// project imports

const Table = () => {
  const { mes } = useParams();

  const [month, setMonth] = useState('');
  const [frequency, setFrequency] = useState([]);

  useEffect(() => {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    setMonth(mes || currentMonth);
    const frequencyRequest = getFrequency(month);
    setFrequency(frequencyRequest);
  }, [mes, month]);

  const handleTime = (event, index, turno, movimentacao) => {
    // 👇 Get input value from "event"
    console.log('????', index, event);
    const altera = frequency;
    altera[index][turno][movimentacao] = event.target.value;
    setFrequency(altera);
    // setMessage(event.target.value);
  };

  return (
    <table id="my-table">
      {/* titles */}
      <thead>
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
      </thead>
      <tbody>
        {/* values */}
        {frequency.map((element, index) => {
          return (
            <tr key={index}>
              {/* dia do mês */}
              <td>{element.day}</td>
              {/* manhã */}
              <td>
                <input type="time" onChange={(event) => handleTime(event, index, 'manha', 'entrada')} min="00:00" max="23:59" />
              </td>
              <td>
                <input type="time" onChange={(event) => handleTime(event, index, 'manha', 'saida')} min="00:00" max="23:59" />
              </td>
              {/* tarde */}
              <td>
                <input type="time" onChange={(event) => handleTime(event, index, 'tarde', 'entrada')} min="00:00" max="23:59" />
              </td>
              <td>
                <input type="time" onChange={(event) => handleTime(event, index, 'tarde', 'saida')} min="00:00" max="23:59" />
              </td>
              {/* noite */}
              <td>
                <input type="time" onChange={(event) => handleTime(event, index, 'noite', 'entrada')} min="00:00" max="23:59" />
              </td>
              <td>
                <input type="time" onChange={(event) => handleTime(event, index, 'noite', 'saida')} min="00:00" max="23:59" />
              </td>
              {/* total de horas */}
              <td>{element.totalHoras}</td>
              {/* assinatura */}
              <td>{element.assinatura}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
