import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AnalyticsState {
  selectedRepositories: string[],
}

const initState: AnalyticsState = {
  selectedRepositories: [],
}

export const analyticsSlice = createSlice({
  name: 'Analytics',
  initialState: initState,
  reducers: {
    addRepo: (state, action: PayloadAction<string>) => {
      state.selectedRepositories = [...state.selectedRepositories, action.payload];
    },
    removeRepo: (state, action: PayloadAction<string>) => {
      console.log(state.selectedRepositories.filter(item => item !== action.payload))
      state.selectedRepositories = state.selectedRepositories.filter(item => item !== action.payload)
    },
  }
})

export default analyticsSlice.reducer;
export const {addRepo, removeRepo} = analyticsSlice.actions
