import { monthNameToNumber } from 'utils/dates';

function generateMonthlySchedule(month) {
  const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
  const scheduleArray = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const dayObject = {
      day: day,
      manha: {
        entrada: '',
        saida: ''
      },
      tarde: {
        entrada: '',
        saida: ''
      },
      noite: {
        entrada: '',
        saida: ''
      },
      totalHoras: 0,
      assinatura: ''
    };
    scheduleArray.push(dayObject);
  }

  return scheduleArray;
}

function generateMonthlyScheduleByMonthName(monthName) {
  const monthNumber = monthNameToNumber(monthName);
  return generateMonthlySchedule(monthNumber);
}

const getFrequency = (month) => {
  console.log('reuisição de frequencia para o mÊs de ', month);
  const monthName = 'agosto';
  return generateMonthlyScheduleByMonthName(monthName);
};

const postFrequency = (data) => {
  console.log('salvar frequencia ', data);
};

export { getFrequency, postFrequency };
