import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilter } from '../redux/FilterSlice';
import { RootState } from '../redux/store';

function Filter() {
    const categories = useSelector((state: RootState) => state.categories.categories);

    const [state, setState] = useState({
        category: ''
    });
    
    const dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(
            setFilter(state.category)
        );
    }

    return (
        <div className="filter-container">
            <form onSubmit={onSubmit} className="filter-form">
                <div className="categories-container">
                    <select id="category" name="category" value={state.category}
                    onChange={(event) => setState({category: event.currentTarget.value})} >
                        <option value="">None</option>
                        {
                            categories.map((category: any) =>
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="btn-container">
                    <button type="submit"></button>
                </div>
            </form>
            <div className="link-container">
                    <Link className="categories-link" to={'/Categories'}></Link>
            </div>
        </div>
    );
}

export default Filter;