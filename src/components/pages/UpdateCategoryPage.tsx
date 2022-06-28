import { Link } from 'react-router-dom';
import { UpdateCategoryForm } from '../category';

export function UpdateCategoryPage() {
    return (
        <div className="category-form-container">
            <div className="nav-link">
                <Link to={'/Categories'}>Categories</Link>
            </div>
            <UpdateCategoryForm />
        </div>
    );
}