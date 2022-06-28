import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    dataProviderName: 'sql'
}

const dataProviderSlice = createSlice({
    name: 'dataProvider',
    initialState,
    reducers: {
        changeDataProvider: (state, action: PayloadAction<string>) => {
            state.dataProviderName = action.payload;
        },

        resetDataProviderState: () => initialState
    }
});

export const { changeDataProvider, resetDataProviderState } = dataProviderSlice.actions;
export default dataProviderSlice.reducer;

export const changeDataProviderAsync = createAction<string>('dataProvider/changeDataProviderAsync');