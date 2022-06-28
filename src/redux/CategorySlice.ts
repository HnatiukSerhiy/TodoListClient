import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    CategoryType,
    CreateCategoryType,
    CategoryState,
    CreateCategoryInputType,
    UpdateCategoryInputType
} from '../types/CategoryTypes';

const initialState: CategoryState = {
    categories: []
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        pushCategories: (state, action: PayloadAction<CategoryType[]>) => {
            for (let category of action.payload) {
                state.categories.push(category);
            }
        },

        addCategory: (state, action: PayloadAction<CreateCategoryType>) => {
            const newCategory = {
                id: Date.now().toString(),
                name: action.payload.name
            }

            state.categories.push(newCategory)
        },

        updateCategory: (state, action: PayloadAction<CategoryType>) => {
            const index = state.categories.findIndex((category) => category.id === action.payload.id);

            state.categories[index].name = action.payload.name;
        },

        deleteCategory: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                categories: state.categories.filter((category) => category.id !== action.payload)
            }
        },

        resetCategoryState: () => initialState
    }
});

export const {
    pushCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    resetCategoryState
} = categorySlice.actions;

export default categorySlice.reducer;

export const getCategoriesAsync = createAction('categories/getCategoriesAsync');
export const addCategoryAsync = createAction<CreateCategoryInputType>('categories/addCategoryAsync');
export const updateCategoryAsync = createAction<UpdateCategoryInputType>('categories/updateCategoryAsync');
export const deleteCategoryAsync = createAction<string>('categories/deleteCategoryAsync');