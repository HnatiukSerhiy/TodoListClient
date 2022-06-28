import { AddTodoForm, CompleteTodoList, UnCompleteTodoList } from "../todo";
import Filter from '../Filter';
import DataSourceSelect from '../DataSourceSelect';
import '../../../src/css/home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync, resetTodoState } from '../../redux/TodoSlice';
import { getCategoriesAsync, resetCategoryState } from '../../redux/CategorySlice';
import { RootState } from '../../redux/store';

export function HomePage() {
    const dispatch = useDispatch();

    let filterValueId: string | null = useSelector((state: RootState) => state.filterValue.categoryFilterId);

    const dataProviderName = useSelector((state: RootState) => state.dataProvider.dataProviderName);

    useEffect(() => {
        filterValueId = filterValueId === '' ? null : filterValueId;

        dispatch(
            resetTodoState()
        );
        dispatch(
            getTodosAsync(filterValueId)
        );

        dispatch(
            resetCategoryState()
        );
        dispatch(
            getCategoriesAsync()
        );
    }, [dataProviderName, filterValueId]);

    return (
        <div className='home'>
            <header className='todo-form-container'>
                <h1>Todo List</h1>
                <AddTodoForm />
            </header>
            <main>
                <DataSourceSelect />
                <Filter />
                <UnCompleteTodoList />
                <CompleteTodoList />
            </main>
        </div>
    );
}