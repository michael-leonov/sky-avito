import React, { useState, useContext, useMemo, createContext } from 'react';

export const isShowAdvForm = false;

export const ShowAdvFormContext = createContext({
  isShowAdvForm,
  toggleShowAdvForm: () => {},
});

export function ShowAdvFormContextProvider({ children }) {
  const [isShow, setIsShow] = useState(isShowAdvForm);

  const toggleShowAdvForm = () => {
    setIsShow(!isShow);
  };

  const ShowAdvFormContextMemo = useMemo(
    () => ({ ShowAdvFormContext: isShow, toggleShowAdvForm }),
    [isShow, toggleShowAdvForm]
  );

  return (
    <ShowAdvFormContext.Provider value={ShowAdvFormContextMemo}>
      {children}
    </ShowAdvFormContext.Provider>
  );
}

export const useShowAdvFormContext = () => {
  const ShowContext = useContext(ShowAdvFormContext);

  if (!ShowContext) return false;

  return ShowContext;
};
