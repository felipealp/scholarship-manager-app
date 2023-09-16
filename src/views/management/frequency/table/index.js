// material-ui
import { useState, useEffect } from 'react';
import { getFrequency } from 'models/frequency';
import { useParams, useNavigate } from 'react-router-dom';

import './style.scss';

// project imports
import MainCard from 'components/cards';
import SkeletonEarningCard from 'components/Skeleton';

const Table = () => {
  const { mes } = useParams();
  const navigate = useNavigate();

  const [month, setMonth] = useState('');
  const [frequency, setFrequency] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    setMonth(mes || currentMonth);
    const frequencyRequest = getFrequency(month);
    setFrequency(frequencyRequest);

    // see loading [remove before]
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [mes, month]);

  const handleMonth = (month) => {
    setMonth(month);
    navigate('/frequencia/' + month);
  };

  const handleTime = (event, index, turno, movimentacao) => {
    // 👇 Get input value from "event"
    console.log('????', index, event);
    const altera = frequency;
    altera[index][turno][movimentacao] = event.target.value;
    setFrequency(altera);
    // setMessage(event.target.value);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard title="Frequência">
          <div>
            <label htmlFor="month">Mês: </label>
            <select value={month} onChange={e => handleMonth(e.target.value)}>
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
            <button onClick={() => console.log(frequency)}>Imprimir Folha</button>
          </div>

          <table>
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
        </MainCard>
      )}
    </>
  );
};

export default Table;
