import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAsync} from '../../redux/TodoSlice';
import { CategoryType } from '../../types/CategoryTypes';
import { RootState } from '../../redux/store';

export function CompleteTodo(props: any) {
    const categories = useSelector((state: RootState) => state.categories.categories);
    const categoryIndex = categories.findIndex((category: CategoryType) => category.id === props.todo.categoryId);
    const category = categories[categoryIndex];
    
    const dispatch = useDispatch();

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
            <div hidden>
                {props.todo.id}
            </div>
            <div className="description">
                {props.todo.description}
            </div>
            <div className="done-time">
                {props.todo.doneTime}
            </div>
            <div className="category">
                {handleNullCategory()}
            </div>
            <div className='delete-btn-container'>
                <button className='delete-btn' onClick={handleDeleteClick}></button>
            </div>
        </li>
    );
}