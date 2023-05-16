import React from 'react';

export const SettingsContext = React.createContext();

function SettingProvider({ children }) {
  const [list, setList] = React.useState([]);
  const [incomplete, setIncomplete] = React.useState([]);
  const [defaultValues] = React.useState({
    difficulty: 4,
  });

  return (
    <SettingsContext.Provider value={{ list, incomplete, defaultValues }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingProvider;