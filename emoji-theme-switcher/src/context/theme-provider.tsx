import { createContext, ReactNode, useState } from "react"

type Theme = '😎' | '😴' | '🎉';

interface IThemeContextValue {
  theme: Theme,
  updateTheme: Function
}

export const ThemeContext = createContext<IThemeContextValue>({} as IThemeContextValue);

export default function ThemeProvider({children}: {children: ReactNode}){
  const [theme, setTheme] = useState<Theme>('😎');

  const themeContextValue: IThemeContextValue = {
    theme: theme,
    updateTheme: setTheme
  }

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>
}