const getStringDate = (date) => {
  const year = date.$y;
  const month = String(date.$M + 1).padStart(2, '0'); // Adicione 1 ao mês, pois janeiro é 0
  const day = String(date.$D).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export { getStringDate };
