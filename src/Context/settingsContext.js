import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) =>{
const [hideComplete, setHideComplete] = useState(false);
const [numberItemsShown, setNumberItemsShown] = useState(4);
const [sortDefault, setSortDefault] = useState('difficulty');

const settingsValues = {
  hideComplete,
  numberItemsShown,
  sortDefault,
}

return (
  <SettingsContext.Provider value={settingsValues}>
    {children}
  </SettingsContext.Provider>
)
};

export default SettingsProvider;