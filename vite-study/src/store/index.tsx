import { configureStore } from "@reduxjs/toolkit";
// 引入主题换肤store分库
import themeReducer from './slices/theme'

export interface IUserConfig {
    colorPrimary: string,
    dark: boolean
}

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})