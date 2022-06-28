import { Link } from 'react-router-dom';
import { AddCategoryForm, CategoryList } from '../category';
import '../../css/category.css';
import { useEffect } from 'react';
import { getCategoriesAsync, resetCategoryState } from '../../redux/CategorySlice';
import { useDispatch } from 'react-redux';

export function CategoryPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            resetCategoryState()
        );
        dispatch(
            getCategoriesAsync()
        );
    });

    return (
        <div className='category-page'>
            <div className='category-form-container'>
                <div className='nav-link'>
                    <Link to={'/'} >Home</Link>
                </div>
                <h1>Categories</h1>
                <AddCategoryForm />
            </div>
            <div className='category-list-container'>
                <CategoryList />
            </div>
        </div>
    );
}