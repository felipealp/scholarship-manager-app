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

export { monthNameToNumber, monthNumberToName, getStringDate };
