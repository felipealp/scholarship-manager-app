const frequencyRequest = [
  {
    day: 1,
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
  },
  {
    day: 2,
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
  },
];

const getFrequency = (month) => {
  console.log('reuisição de frequencia para o mÊs de ', month);
  return frequencyRequest;
};
export { getFrequency };
