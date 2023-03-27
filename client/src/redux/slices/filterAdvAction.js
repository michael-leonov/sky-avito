import { createAction } from '@reduxjs/toolkit';

export const filterAdv = createAction('filter/adv', (searchValue, advsArr) => ({
  payload: {
    searchValue,
    advsArr,
  },
}));
