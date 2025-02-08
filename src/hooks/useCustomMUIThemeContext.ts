import { useContext } from "react"
import { customMUIThemeContext } from "../contexts/customMUIThemeContext"
import { Theme } from "@emotion/react"

export const useCustomMUIThemeContext = (): Theme => {
    const context = useContext(customMUIThemeContext)

    if (!context) {
        throw new Error("useCustomMUIThemeContext must be called inside a customMUIThemeProvider")
    }

    return context
}