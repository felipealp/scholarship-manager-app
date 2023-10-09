const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
];

function monthNameToNumber(monthName) {
  const monthIndex = months.findIndex((month) => month.toLowerCase() === monthName.toLowerCase());

  if (monthIndex === -1) {
    throw new Error('Mês inválido');
  }

  return monthIndex + 1;
}

function monthNumberToName(monthNumber) {
  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error('Número de mês inválido');
  }

  return months[monthNumber - 1];
}

const getStringDate = (date) => {
  const year = date.$y;
  const month = String(date.$M + 1).padStart(2, '0');
  const day = String(date.$D).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

function calcularHoras(entrada, saida) {
  const entradaParts = entrada.split(':');
  const saidaParts = saida.split(':');
  const entradaDate = new Date(0, 0, 0, entradaParts[0], entradaParts[1]);
  const saidaDate = new Date(0, 0, 0, saidaParts[0], saidaParts[1]);
  const diffMillis = saidaDate - entradaDate;
  return diffMillis / 1000 / 3600;
}

function calculateTotalHours(day) {
  const manhaEntrada = day.manha.entrada;
  const manhaSaida = day.manha.saida;
  const tardeEntrada = day.tarde.entrada;
  const tardeSaida = day.tarde.saida;
  const noiteEntrada = day.noite.entrada;
  const noiteSaida = day.noite.saida;

  let totalHoras = 0;

  if ((manhaEntrada && manhaSaida) || (tardeEntrada && tardeSaida) || (noiteEntrada && noiteSaida)) {
    if (manhaEntrada && manhaSaida) {
      const manhaHoras = calcularHoras(manhaEntrada, manhaSaida);
      totalHoras += manhaHoras;
    }

    if (tardeEntrada && tardeSaida) {
      const tardeHoras = calcularHoras(tardeEntrada, tardeSaida);
      totalHoras += tardeHoras;
    }

    if (noiteEntrada && noiteSaida) {
      const noiteHoras = calcularHoras(noiteEntrada, noiteSaida);
      totalHoras += noiteHoras;
    }

    day.totalHoras = totalHoras;
  }

  return totalHoras;
}

export { monthNameToNumber, monthNumberToName, getStringDate, calculateTotalHours };
