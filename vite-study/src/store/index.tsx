import { configureStore } from "@reduxjs/toolkit";
// 引入主题换肤store分库
import themeReducer from './slices/theme'

export interface IState {
    theme: string
}

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})