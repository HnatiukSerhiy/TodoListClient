import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateCategoryAsync } from '../../redux/CategorySlice';
import { RootState } from '../../redux/store';

export function UpdateCategoryForm() {
    const dispatch = useDispatch();

    const params = useParams();

    const categoryIndex = useSelector((state: RootState) => state.categories.categories.findIndex((category) => 
        category.id === params.id))
    const category = useSelector((state: RootState) => state.categories.categories[categoryIndex]);
    
    const [state, setState] = useState({
        name: category.name 
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(
            updateCategoryAsync({
                id: category.id,
                name: state.name
            })
        );

        alert("Changes Saved!");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='category-id' hidden>
                {category.id}
            </div>
            <div className='name-container'>
                <label>
                    <input required type="text" name="category-name" id="category-name"
                    value={state.name}
                    onChange={(event) => setState({...state, name: event.target.value})}/>
                </label>
            </div>
            <div className="save-btn-container">
                <button type="submit">Save</button>
            </div>
        </form>
    );
}