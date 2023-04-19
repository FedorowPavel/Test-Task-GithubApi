import {createTheme} from "@mui/material/styles";
import {BlogTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/styles";
import {ReactNode} from "react";

export type BlogProviderProps = {children: ReactNode}
export type ThemeProviderProps = {children: ReactNode, theme: BlogTheme}

function BlogThemeProvider({children}: BlogProviderProps) {
  const theme: BlogTheme = createTheme({
    bgColors: {
      regular: '#6066d0b3',
    }
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export {BlogThemeProvider}
