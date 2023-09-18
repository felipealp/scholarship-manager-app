import React from 'react';
// material-ui
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getFrequency } from 'models/frequency';

import './style.scss';
import brasao from 'assets/images/brasao.png';
// project imports

// Seu componente React personalizado
const MyCustomComponent = () => {
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
            Mês: <span style={{margin: '0 3rem'}}></span> Ano:
          </div>

          <div className="header-infos-field">
            <span style={{margin: '0 1rem'}}></span> Bolsista: <span style={{margin: '0 13.5rem'}}></span> Matrícula:
          </div>

          <div className="header-infos-field">
            <span style={{margin: '0 1rem'}}></span>Orientador: <span style={{margin: '0 13rem'}}></span> Setor:
          </div>
        </div>
      </div>

      <table id="report-table">
        {/* titles */}
        <thead>
          <tr>
            <th rowSpan="2">Dia</th>
            <th colSpan="2" style={{ fontWeight: 'normal', fontFamily: 'Roboto Bold, Arial, sans-serif' }}>Manhã</th>
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
                <td><b>{element.day}</b></td>
                {/* manhã */}
                <td>12:26</td>
                <td>12:26</td>
                {/* tarde */}
                <td>12:26</td>
                <td>12:26</td>
                {/* noite */}
                <td>12:26</td>
                <td>12:26</td>
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

export default MyCustomComponent;
