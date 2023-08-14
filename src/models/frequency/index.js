// const frequencyRequest = [
//   {
//     day: 1,
//     manha: {
//       entrada: '',
//       saida: ''
//     },
//     tarde: {
//       entrada: '',
//       saida: ''
//     },
//     noite: {
//       entrada: '',
//       saida: ''
//     },
//     totalHoras: 0,
//     assinatura: ''
//   },
//   {
//     day: 2,
//     manha: {
//       entrada: '',
//       saida: ''
//     },
//     tarde: {
//       entrada: '',
//       saida: ''
//     },
//     noite: {
//       entrada: '',
//       saida: ''
//     },
//     totalHoras: 0,
//     assinatura: ''
//   },
// ];

// const format = {
//   manha: {
//     entrada: '',
//     saida: ''
//   },
//   tarde: {
//     entrada: '',
//     saida: ''
//   },
//   noite: {
//     entrada: '',
//     saida: ''
//   },
//   totalHoras: 0,
//   assinatura: ''
// };

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

function monthNameToNumber(monthName) {
  const months = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];

  const monthIndex = months.findIndex(month => month.toLowerCase() === monthName.toLowerCase());

  if (monthIndex === -1) {
    throw new Error('Mês inválido');
  }

  return monthIndex + 1; // Adicionamos 1 porque os meses em JavaScript são baseados em índices de 0 a 11
}

function generateMonthlyScheduleByMonthName(monthName) {
  const monthNumber = monthNameToNumber(monthName);
  return generateMonthlySchedule(monthNumber);
}

// const monthName = 'agosto';
// const scheduleForAugust = generateMonthlyScheduleByMonthName(monthName);

const getFrequency = (month) => {
  console.log('reuisição de frequencia para o mÊs de ', month);
  // return generateMonthlySchedule(8);
  const monthName = 'agosto';
  return generateMonthlyScheduleByMonthName(monthName)
};
export { getFrequency };
