const months = {
  '01': 'января',
  '02': 'февраля',
  '03': 'марта',
  '04': 'апреля',
  '05': 'мая',
  '06': 'июня',
  '07': 'июля',
  '08': 'августа',
  '09': 'сентября',
  10: 'октября',
  11: 'ноября',
  12: 'декабря',
};

const formatSellsFrom = (date) => {
  const dateSplit = date.split('-');

  const year = dateSplit[0];

  if (dateSplit.length < 2) return year;

  const month = dateSplit[1];
  const msg = `${months[month]} ${year}`;

  return msg;
};

export default formatSellsFrom;
