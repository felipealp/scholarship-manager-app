import PropTypes from 'prop-types';

import './style.scss';
import brasao from 'assets/images/brasao.png';

const Template = ({ data }) => {
  return (
    <div
      style={{
        width: '210mm',
        height: '297mm',
        margin: '0 auto',
        background: 'white'
      }}
    >
      <div className="header">
        <img src={brasao} alt="Brasão" />
        <p>UNIVERSIDADE FEDERAL RURAL DO SEMI-ÁRIDO</p>
        <p>PRÓ-REITORIA DE ASSUNTOS ESTUDANTIS</p>
        <p>PROGRAMA INSTITUCIONAL DE ASSISTÊNCIA ESTUDANTIL</p>

        <p style={{ marginTop: '2rem', fontFamily: 'Roboto Bold, Arial, sans-serif' }}>FOLHA DE FREQUÊNCIA DA BOLSA ACADÊMICA</p>

        <div className="header-infos">
          <div>
            Mês: Janeiro<span style={{ margin: '0 3rem' }}></span> Ano: 2023
          </div>

          <div className="header-infos-field">
            <span style={{ margin: '0 1rem' }}></span> Bolsista:
            <span style={{ fontFamily: 'Roboto'}}> {data.student}</span>
            <span style={{ margin: '0 8.6rem' }}></span> Matrícula:
            <span style={{ fontFamily: 'Roboto'}}> {data.matriculation}</span>
          </div>

          <div className="header-infos-field">
            <span style={{ margin: '0 1rem' }}></span>Orientador:
            <span style={{ fontFamily: 'Roboto'}}> {data.advisor}</span>
            <span style={{ margin: '0 7rem' }}></span> Setor:
            <span style={{ fontFamily: 'Roboto'}}> {data.sector}</span>
          </div>
        </div>
      </div>

      <table id="template-table">
        <thead>
          <tr>
            <th rowSpan="2">Dia</th>
            <th colSpan="2" style={{ fontWeight: 'normal', fontFamily: 'Roboto Bold, Arial, sans-serif' }}>
              Manhã
            </th>
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
          {data.frequency.map((element, index) => {
            return (
              <tr key={index}>
                <td>
                  <b>{element.day}</b>
                </td>

                {/* manhã */}
                <td>{element.manha.entrada}</td>
                <td>{element.manha.saida}</td>

                {/* tarde */}
                <td>{element.tarde.entrada}</td>
                <td>{element.tarde.entrada}</td>

                {/* noite */}
                <td>{element.noite.entrada}</td>
                <td>{element.noite.entrada}</td>

                {/* total de horas */}
                <td>{element.totalHoras}</td>

                {/* assinatura */}
                <td>{element.assinatura}</td>
              </tr>
            );
          })}
          <tr>
            <td style={{ border: '0' }} colSpan="4"></td>
            <td colSpan="4">
              <span style={{ fontFamily: 'Roboto Bold, Arial, sans-serif' }}>Total de horas no mês:</span>

              <span style={{ fontFamily: 'Roboto' }}> {data.monthlyHours} </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="footer">
        <div className="quadro">
          <div className="coluna">
            <span>Assinatura do bolsista</span>
          </div>
          <div className="coluna">
            <span>Assinatura e carimbo do orientador</span>
          </div>
        </div>

        <p>
          <strong>Obs.:</strong> Segundo o Regulamento do Programa Institucional Assistência Estudantil, o bolsista deve cumprir a carga
          horária de
        </p>
        <b>10 (dez) horas semanais.</b>
      </div>
    </div>
  );
};

Template.propTypes = {
  data: PropTypes.object
};

export default Template;
