import PropTypes from 'prop-types';

import './style.scss';

const Table = ({ frequency, handleTime }) => {
  return (
    <table id="frequency-table">
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

Table.propTypes = {
  frequency: PropTypes.array,
  handleTime: PropTypes.func
};

export default Table;
