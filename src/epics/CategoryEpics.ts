import {combineEpics, ofType} from 'redux-observable';
import {mergeMap, from, map, catchError} from 'rxjs';
import { getCategoriesQuery } from '../api/queries';
import {addCategory, deleteCategory, pushCategories, updateCategory} from '../redux/CategorySlice';
import {createCategoryMutation, deleteCategoryMutation, updateCategoryMutation} from "../api/mutations";

const getCategoriesEpic = (action$: any) => {
    return action$.pipe(
        ofType('categories/getCategoriesAsync'),
            mergeMap(() => from(getCategoriesQuery()).pipe(
                map(response => pushCategories(response.data.categories)),
                catchError((error) => {
                    throw new Error(error)
                })
            )
        )
    )
}

const addCategoryEpic = (action$: any) => {
    return action$.pipe(
        ofType('categories/addCategoryAsync'),
            mergeMap((action: any) => from(createCategoryMutation(action.payload)).pipe(
                map(response => addCategory(response.data.createCategory)),
                catchError(error => {
                    throw new Error(error)
                })
            )
        )
    )
}

const updateCategoryEpic = (action$: any) => {
    return action$.pipe(
        ofType('categories/updateCategoryAsync'),
            mergeMap((action: any) => from(updateCategoryMutation(action.payload)).pipe(
                map((response) => updateCategory(response.data.updateCategory)),
                catchError(error => {
                    throw new Error(error)
                })
            )
        )
    )
}

const deleteCategoryEpic = (action$: any) => {
    return action$.pipe(
        ofType('categories/deleteCategoryAsync'),
            mergeMap((action: any) => from(deleteCategoryMutation(action.payload)).pipe(
                map((response) => deleteCategory(response.data.deleteCategory)),
                catchError(error => {
                    throw new Error(error)
                })
            )
        )
    )
}

export const categoryEpics = combineEpics(getCategoriesEpic, addCategoryEpic, updateCategoryEpic, deleteCategoryEpic);