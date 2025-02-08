import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, ReactNode } from "react";

interface Props {
    children: ReactNode
}

export const customMUIThemeContext = createContext<Theme | null>(null)

export const CustomMUIThemeProvider: React.FC<Props> = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#1aac83"
            }
        }
    })
    return (
        <customMUIThemeContext.Provider value={theme}>
            {children}
        </customMUIThemeContext.Provider>
    )
}

