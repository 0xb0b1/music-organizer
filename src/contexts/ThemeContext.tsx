import { useState, useContext, createContext, ReactNode } from "react";

type ThemeContextData = {
  theme: string | undefined;
  changeTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    setTheme((state) => (state === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
