import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { CompleteTodo } from './CompleteTodo';

export function CompleteTodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos.filter((todo) => todo.isDone === true));

    return (
        <div className='complete-todos'>
            <h2>Done Tasks</h2>
            <ul className='todo-list'>
                {
                    todos.map((todo: any) => (
                        <CompleteTodo key={todo.id} todo={todo} />
                    ))
                }
            </ul>
        </div>
    );
}