import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    categoryFilterId: ''
}

const filterSlice = createSlice({
    name: 'filterValue',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.categoryFilterId = action.payload;
        }
    }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;