import React, { createContext, useContext, useEffect, useState } from "react";
import { loadSavedTheme, setTheme, Theme } from "util/frontend/themeManager";

interface IThemeContext {
  globalTheme: Theme;
  toggleGlobalTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("App must surrounded by ThemeProvider");
  }
  return context;
}

const ThemeProvider: React.FC = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState(Theme.DARK);

  function updateTheme(theme: Theme) {
    setGlobalTheme(theme);
    setTheme(theme);
  }

  const toggleGlobalTheme = () => {
    if (globalTheme === Theme.DARK) {
      updateTheme(Theme.LIGHT);
    } else {
      updateTheme(Theme.DARK);
    }
  };

  // On load: Set the save theme
  useEffect(() => {
    updateTheme(loadSavedTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ globalTheme, toggleGlobalTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
