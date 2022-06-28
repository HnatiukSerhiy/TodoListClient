import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType, UpdateTodoType, CreateTodoInputType, UpdateTodoInputType } from '../types/TodoTypes';
import { TodoState } from '../types/TodoTypes';

const initialState: TodoState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        pushTodos: (state, action: PayloadAction<TodoType[]>) => {
            for (let todo of action.payload) {
                state.todos.push(todo);
            }
        },

        addTodo: (state, action: PayloadAction<TodoType>) => {
            const newTodo = {
                id: action.payload.id,
                description: action.payload.description,
                deadline: action.payload.deadline,
                doneTime: null,
                categoryId: action.payload.categoryId,
                isDone: action.payload.isDone
            }
            
            state.todos.push(newTodo);
        },

        updateTodo: (state, action: PayloadAction<UpdateTodoType>) => {
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload.id
            );

            state.todos[index].description = action.payload.description;
            state.todos[index].deadline = action.payload.deadline;
            state.todos[index].categoryId = action.payload.categoryId;
        },

        solveTodo: (state, action: PayloadAction<String>) => {
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload
            );
            
            state.todos[index].doneTime = new Date(Date.now()).toISOString().split('T')[0];
            state.todos[index].isDone = true;
        },

        deleteTodo: (state, action: PayloadAction<String>) => {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        },

        resetTodoState: () => initialState
    }
});

export const {
    pushTodos,
    addTodo,
    updateTodo,
    solveTodo,
    deleteTodo,
    resetTodoState
} = todoSlice.actions;

export default todoSlice.reducer;

export const getTodosAsync = createAction<string | null>('todos/getTodosAsync');
export const addTodoAsync = createAction<CreateTodoInputType>('todos/addTodoAsync');
export const solveTodoAsync = createAction<string>('todos/solveTodoAsync');
export const deleteTodoAsync = createAction<string>('todos/deleteTodoAsync');
export const updateTodoAsync = createAction<UpdateTodoInputType>('todos/updateTodoAsync');