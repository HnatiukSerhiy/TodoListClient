import { addTodo, pushTodos, solveTodo, deleteTodo, updateTodo } from '../redux/TodoSlice';
import { combineEpics, ofType } from "redux-observable";
import { mergeMap, from, map, catchError } from "rxjs";
import { getCompleteTodosQuery, getUnCompleteTodosQuery } from "../api/queries";
import { createTodoMutation, deleteTodoMutation, solveTodoMutation, updateTodoMutation } from "../api/mutations";

const getCompleteTodosEpic = (action$: any) => {
    return action$.pipe(
        ofType('todos/getTodosAsync'),
            mergeMap((action: any) => from(getCompleteTodosQuery(action.payload)).pipe(
                map(response => pushTodos(response.data.completeTodos)),
                catchError((error) => {
                    throw new Error(error)
                })
            )
        )
    )
}

const getUnCompleteTodosEpic = (action$: any) => {
    return action$.pipe(
        ofType('todos/getTodosAsync'),
            mergeMap((action: any) => from(getUnCompleteTodosQuery(action.payload)).pipe(
                map(response => pushTodos(response.data.unCompleteTodos)),
                catchError((error) => {
                    throw new Error(error)
                })
            )
        )
    )
}

const addTodoEpic = (action$: any) => {
    return action$.pipe(
        ofType('todos/addTodoAsync'),
            mergeMap((action: any) => from(createTodoMutation(action.payload)).pipe(
                map(response => addTodo(response.data.createTodo)),
                catchError(error => {
                    throw new Error(error)
                })
            )
        )
    )
}

const deleteTodoEpic = (action$: any) => {
    return action$.pipe(
        ofType('todos/deleteTodoAsync'),
            mergeMap((action: any) => from(deleteTodoMutation(action.payload)).pipe(
                map(response => deleteTodo(response.data.deleteTodo)),
                catchError(error => {
                    throw new Error(error)
                })
            )
        )
    )
}

const solveTodoEpic = (action$: any) => {
    return action$.pipe(
        ofType('todos/solveTodoAsync'),
            mergeMap((action: any) => from(solveTodoMutation(action.payload)).pipe(
                map(response => solveTodo(response.data.solveTodo)),
                catchError(error => {
                    throw new Error(error)
                })
            )
        )
    )
}

const updateTodoEpic = (action$: any) => {
    return action$.pipe(
        ofType('todos/updateTodoAsync'),
            mergeMap((action: any) => from(updateTodoMutation(action.payload)).pipe(
                map(response => updateTodo(response.data.updateTodo)),
                catchError(error => {
                    throw new Error(error)
                })
            )
        )
    )
}

export const todoEpics = combineEpics(addTodoEpic, deleteTodoEpic, solveTodoEpic, updateTodoEpic,
    getCompleteTodosEpic, getUnCompleteTodosEpic);