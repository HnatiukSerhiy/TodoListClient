import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/TodoSlice';
import categoryReducer from '../redux/CategorySlice';
import dataProviderReducer from '../redux/DataProviderSlice';
import filterValueReducer from '../redux/FilterSlice';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { todoEpics } from '../epics/TodoEpics';
import { categoryEpics } from "../epics/CategoryEpics";
import { dataProviderEpics } from "../epics/DataProviderEpics";

export const rootEpic = combineEpics(todoEpics, categoryEpics, dataProviderEpics);
const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer:{
        todos: todoReducer,
        categories: categoryReducer,
        dataProvider: dataProviderReducer,
        filterValue: filterValueReducer
    },
    middleware: [
        epicMiddleware
    ]
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;