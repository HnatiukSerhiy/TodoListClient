import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategoryAsync } from '../../redux/CategorySlice';

export function AddCategoryForm() {
    const [state, setState] = useState({
        name: ''
    });

    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        dispatch(
            addCategoryAsync({
                id: Date.now().toString(),
                name: state.name
            })
        );
        
        setState({
            name: ''
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="name-container">
                <label>
                    <input required type="text" name="category-name"
                    id="category-name"
                    value={state.name}
                    onChange={(event) =>
                        setState({...state, name: event.target.value})}/>
                </label>
            </div>
            <div className="add-btn-container">
                <button type="submit">Add</button>
            </div>
        </form>
    );
}