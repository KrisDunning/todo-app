import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{
const [hideComplete, setHideComplete] = useState(true);
const [numberItemsShown, setNumberItemsShown] = useState(4);
const [sortDefault, setSortDefault] = useState('difficulty');

const settingsValues = {
  hideComplete,
  setHideComplete,
  numberItemsShown,
  setNumberItemsShown,
  sortDefault,
  setSortDefault,
}

return (
  <SettingsContext.Provider value={settingsValues}>
    {children}
  </SettingsContext.Provider>
)
};

export default SettingsProvider;