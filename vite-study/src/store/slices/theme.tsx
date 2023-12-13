import { globalConfig } from "../../globalConfig.tsx";
import { createSlice } from "@reduxjs/toolkit";
import { IUserConfig } from "../index.tsx";

const sessionTheme: IUserConfig = JSON.parse(window.localStorage.getItem(globalConfig.SESSION_LOGIN_THEME)!)

const initTheme = sessionTheme ? sessionTheme : globalConfig.initTheme

const initialState = {
    dark: initTheme.dark,
    colorPrimary: initTheme.colorPrimary
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDark: (state, action) => {
            state.dark = action.payload
            window.localStorage.setItem(globalConfig.SESSION_LOGIN_THEME, JSON.stringify(state))
        },
        setColorPrimary: (state, action) => {
            state.colorPrimary = action.payload
            window.localStorage.setItem(globalConfig.SESSION_LOGIN_THEME, JSON.stringify(state))
        }
    }
})

export const {setDark} = themeSlice.actions
export const {setColorPrimary} = themeSlice.actions

export default themeSlice.reducer
