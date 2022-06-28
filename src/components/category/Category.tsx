import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCategoryAsync } from '../../redux/CategorySlice';

export function Category(props: any) {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        const isConfirm = window.confirm("Are you sure?");

        if (isConfirm) {
            dispatch(
                deleteCategoryAsync(props.id)
            );
        }
    }
    
    return (
        <li className='category-item'>
            <div hidden className='category-id'>
                {props.id}
            </div>
            <div className='category-name'>
                {props.name}
            </div>
            <div className='edit-link-container'>
                <Link className='edit-link' to={`/UpdateCategory/${props.id}`}></Link>
            </div>
            <div className='delete-btn-container'>
                <button className='delete-btn' onClick={handleDeleteClick}></button>
            </div>
        </li>
    );
}