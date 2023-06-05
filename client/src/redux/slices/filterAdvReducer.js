/* eslint-disable no-return-assign */
import { createReducer } from '@reduxjs/toolkit';
import { filterAdv } from './filterAdvAction';

const initialState = {
  filteredAdvs: [],
};

const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(filterAdv, (state, { payload }) => {
    const { searchValue } = payload;
    const { advsArr } = payload;

    if (searchValue === '') {
      state.filteredAdvs = advsArr;
    } else {
      const filteredAdvs = advsArr.filter((adv) =>
        adv?.title.toLowerCase().includes(searchValue.toLowerCase())
      );

      state.filteredAdvs = filteredAdvs;
    }
  });
});

export default filterReducer;
