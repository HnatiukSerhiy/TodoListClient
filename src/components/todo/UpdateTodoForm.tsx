import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoAsync } from '../../redux/TodoSlice';
import { Link, useParams } from 'react-router-dom';
import { UpdateTodoType } from '../../types/TodoTypes';
import { RootState } from '../../redux/store';
import { CategoryType } from '../../types/CategoryTypes';

export function UpdateTodoForm() {
    const categories = useSelector((state: RootState) => state.categories.categories);

    const dispatch = useDispatch();

    const params = useParams(); 

    const todoIndex = useSelector((state: RootState) => state.todos.todos.findIndex((todo) => 
        todo.id === params.id));

    const todo = useSelector((state: RootState) => state.todos.todos[todoIndex]);

    const [state, setState] = useState<UpdateTodoType>({
        id: todo.id,
        description: todo.description,
        deadline: todo.deadline || '',
        categoryId: todo.categoryId || ''
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const deadlineValue = state.deadline === '' || state.deadline === undefined || state.deadline === null ? null :
            new Date(state.deadline).toISOString().split('T')[0];

        const categoryIdValue = state.categoryId === '' || state.categoryId === undefined ? null :
            state.categoryId;

        dispatch(
            updateTodoAsync({
                id: todo.id,
                description: state.description,
                deadline: deadlineValue,
                categoryId: categoryIdValue,
          })
        );

        alert("Changes saved!");
    }

    return (
        <div className='todo-form-container'>
            <div className='nav-link'>
                <Link to={'/'}>Home</Link>
            </div>
            <form onSubmit={onSubmit} className="todo-form">
                <div className="description-container">
                    <label>
                        <input required type="text" name="description"
                        value={state.description} 
                        onChange={(event) =>
                            setState({...state, description: event.target.value}) } />
                    </label>
                </div>
                <div className="deadline-container">
                    <label>
                        <input type="date" name="deadline" 
                        value={state.deadline?.toString()}
                        onChange={(event) =>
                            setState({...state, deadline: event.target.value}) } />
                    </label>
                </div>
                <div className="category-container">
                    <label>
                        <select value={state.categoryId?.toString()}
                        onChange={(event) =>
                            setState({...state, categoryId: event.target.value})}>
                            <option value="">none</option>
                                {
                                    categories.map((category: CategoryType) => {
                                        return <option key={category.id} value={category.id}>{category.name}</option>
                                    })
                                }
                        </select>
                    </label>
                </div>
                <div className="btn-container">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}