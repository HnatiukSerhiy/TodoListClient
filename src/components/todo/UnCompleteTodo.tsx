import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAsync, solveTodoAsync } from '../../redux/TodoSlice';
import { Link } from 'react-router-dom';
import { CategoryType } from '../../types/CategoryTypes';
import { RootState } from '../../redux/store';

export function UnCompleteTodo(props: any) {
    const categories = useSelector((state: RootState) => state.categories.categories);
    const categoryIndex = categories.findIndex((category: CategoryType) => category.id === props.todo.categoryId);
    const category = categories[categoryIndex];

    const dispatch = useDispatch();

    const handleSolveClick = () => {
        dispatch(
            solveTodoAsync(props.todo.id)
        );
    }

    const handleDeleteClick = () => {
        const isConfirm = window.confirm("Are you sure?");

        if (isConfirm) {
            dispatch(
                deleteTodoAsync(props.todo.id)
            );
        }
    }

    const handleNullCategory = () => {
        return category !== undefined ? category.name : null;
    }

    return (
        <li className='todo-item'>
            <div hidden aria-disabled>
                {props.todo.id}
            </div>
            <div className='description'>
                {props.todo.description}
            </div>
            <div className='deadline'>
                {props.todo.deadline.toISOString().split('T')[0]}
            </div>
            <div className='category'>
                {handleNullCategory()}   
            </div>
            <div className='solve-btn-container'>
                <button className='complete-btn' onClick={handleSolveClick}></button>
            </div>
            <div className='edit-link-container'>
                <Link className='edit-link' to={`/UpdateTodo/${props.todo.id}`}></Link>
            </div>
            <div className='delete-btn-container'>
                <button className='delete-btn' onClick={handleDeleteClick}></button>
            </div>
        </li>
    );
}