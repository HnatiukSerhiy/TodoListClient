import {combineEpics, ofType} from 'redux-observable';
import { catchError, from, map, mergeMap } from 'rxjs';
import { changeDataProviderMutation } from '../api/mutations';
import { changeDataProvider } from '../redux/DataProviderSlice';
import { getCompleteTodosQuery } from "../api/queries";

const changeDataProviderEpic = (action$: any) => {
    return action$.pipe(
        ofType('dataProvider/changeDataProviderAsync'),
            mergeMap((action: any) => from(changeDataProviderMutation(action.payload)).pipe(
                map(response => {
                    return changeDataProvider(response.data.changeDataProvider)
                }),
                catchError(error => {
                    throw new Error(error)
                })
            )
        )
    );
}

export const dataProviderEpics = combineEpics(changeDataProviderEpic);