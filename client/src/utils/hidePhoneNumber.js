/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
export const isPhoneNumberValid = (phone) => {
  // внутрироссийский номер
  if (phone.startsWith('8')) return /^[0-9]{0,11}$/g.test(phone);

  const params = getCodeParams(clearPhone(phone));

  // если нет в списке CODE_PARAMS
  if (!params) return /^[+0-9]{0,1}[0-9]{0,12}$/g.test(phone);

  // если в списке CODE_PARAMS, применяем правила и проверяем макс длину из CODE_PATRAMS
  const regexp = new RegExp(
    `^[+0-9]{0,1}[0-9]{0,${xCount(params.mask) - 1}}$`,
    'g'
  );
  return regexp.test(phone);
};

const CODE_PARAMS = {
  '+7': { mask: 'XX XXX XXX XX XX' }, // Россия
  8: { mask: 'X XXX XXX XX XX' },

  '+1': { mask: 'XX XXX XXX XX XX' }, // США
  '+49': { mask: 'XXX XXX XXX XX XX' }, // Германия
  '+61': { mask: 'XXX X XXX XXX' }, // Австралия
};

const getCodeParams = (clearedPhone) => {
  for (const i in CODE_PARAMS)
    if (clearedPhone.startsWith(i)) return CODE_PARAMS[i];
  return null;
};

export const clearPhone = (ph = '') => {
  if (!ph) return '';
  return ph.replace(/[^0-9|+]/gi, '');
};

// сичтаем количество символов маски
const xCount = (mask = '') => mask.split(/x/gi).length - 1;

// получаем спиок фрагментов маски
const getXArr = (mask = '') => mask.match(/(x+)/gi) || [];

// получаем разделители из маски
const getSepArr = (mask = '') => mask.split(/x+/gi);

const isValid = (ph = '', codeParams) => ph.length === xCount(codeParams.mask);

const formatByCodeParams = (ph, cp) => formatString(ph, cp.mask);

const maskByCodeParams = (ph, cp) => {
  const sep = getSepArr(cp.mask);

  // const maskArray = cp.mask.split(' ')
  const maskArray = getXArr(cp.mask);

  if (maskArray.length === 1) return 'XXXXXXXXXXXX';

  const phoneFormatted = formatByCodeParams(ph, cp);

  if (maskArray.length === 2) {
    return (
      phoneFormatted.slice(0, maskArray[0].length) +
      (sep[0] || sep[1]) +
      joinXArr(cp.mask, 1)
    );
  }

  if (maskArray.length > 2) {
    const prefixLen = maskArray[0].length + maskArray[1].length + 1; // +1 на пробел в шаблоне
    return (
      phoneFormatted.slice(0, prefixLen) +
      (sep[0] ? sep[1] : sep[2]) +
      joinXArr(cp.mask, 2)
    );
  }
};

const joinXArr = (mask, start, end) => {
  const xArr = getXArr(mask);
  const len = xArr.length;
  const sepArr = getSepArr(mask);

  // сдвиг индекса разделителей маски
  const offset = sepArr[0] ? 0 : 1;

  const res = [];
  for (let i = start; i < (end || len); i++) {
    res.push(xArr[i] + sepArr[i + offset]);
  }
  return res.join('');
};

export const formatPhone = (ph = '') => {
  const phoneCleared = clearPhone(ph);
  const params = getCodeParams(phoneCleared);

  if (params && isValid(phoneCleared, params))
    return formatByCodeParams(phoneCleared, params);

  return phoneCleared || 'Номер не предоставлен';
};

const formatString = (s = '', format = '') => {
  const sArr = s.split('').reverse();
  const res = [];
  for (const fl of format)
    fl.toLowerCase() === 'x' ? res.push(sArr.pop()) : res.push(fl);

  return res.join('');
};

export const getPhoneMasked = (ph = '') => {
  const phoneCleared = clearPhone(ph);
  const codeParams = getCodeParams(phoneCleared);

  if (codeParams && isValid(phoneCleared, codeParams))
    return maskByCodeParams(phoneCleared, codeParams);

  return 'X XXX XXX XX XX';
};
