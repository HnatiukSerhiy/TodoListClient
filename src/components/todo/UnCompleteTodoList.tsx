import { useSelector} from 'react-redux';
import { RootState } from '../../redux/store';
import { UnCompleteTodo } from '../todo';

export function UnCompleteTodoList() {
    const distantFuture = new Date(8640000000000000);

    const todos = useSelector((state: RootState) =>
        state.todos.todos.filter((todo) => todo.isDone === false)).map((todo) => {
            const deadline = todo.deadline !== null ? new Date(todo.deadline) : null;
            return {
                ...todo, 
                deadline: deadline
            }
        }).sort((firstTodo, secondTodo): any => {
            let firstDeadline = firstTodo.deadline ? firstTodo.deadline : distantFuture;
            let secondDeadline = secondTodo.deadline ? secondTodo.deadline : distantFuture;
            return firstDeadline.getTime() - secondDeadline.getTime();
        })
            

    return (
        <div className="un-complete-todos">
            <h2>Current Tasks</h2>
            <ul className='todo-list'>
                {
                    todos.map((todo: any) => (
                        <UnCompleteTodo key={todo.id} todo={todo} />
                    ))
                }
            </ul>
        </div>
    );
}