import React, { useState } from 'react';
import { CreateTodoType } from '../../types/TodoTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAsync, getTodosAsync, resetTodoState } from '../../redux/TodoSlice';
import { CategoryType } from '../../types/CategoryTypes';
import { RootState } from "../../redux/store";
import { getCategoriesAsync, resetCategoryState } from "../../redux/CategorySlice";

export function AddTodoForm() {
    const categories = useSelector((state: RootState) => state.categories.categories);

    const [state, setState] = useState<CreateTodoType>({
        description: '',
        deadline: '',
        categoryId: '',
    });

    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const deadlineValue = state.deadline === '' || state.deadline === undefined ? null :
            new Date(state.deadline).toISOString().split('T')[0];

        const categoryIdValue = state.categoryId === '' || state.categoryId === undefined ? null :
            state.categoryId;

        dispatch(
            addTodoAsync({
                id: Date.now().toString(),
                description: state.description,
                deadline: deadlineValue,
                categoryId: categoryIdValue,
                isDone: false
            })
        );

        setState({
            description: '',
            deadline: '',
            categoryId: ''
        });
    }

    return (
        <form onSubmit={onSubmit} className="todo-form">
            <div className="description-container">
                <label>
                    <input required type="text" name="description"
                        id="description"
                        placeholder='Type new todo item here...'
                        value={state.description}
                        onChange={(event) =>
                            setState({...state, description: event.currentTarget.value})} />
                </label>
            </div>
            <div className="deadline-container">
                <label>
                    <input type="date" name="deadline"
                        id="deadline"
                        value={state.deadline}
                        onChange={(event) =>
                            setState({...state, deadline: event.currentTarget.value})} />
                </label>
            </div>
            <div className="category-container">
                <label>
                    <label>
                        <select id="category-name"
                            value={state.categoryId} 
                            onChange={(event) =>
                                setState({...state, categoryId: event.target.value})}>
                            <option value=''>None</option>
                            {
                                categories.map((category: CategoryType) => {
                                    return <option key={category.id} value={category.id}>{category.name}</option>
                                })
                            }
                        </select>
                    </label>
                </label>
            </div>
            <div className="btn-container">
                <button type="submit">Add Task</button>
            </div>
        </form>
    );
}