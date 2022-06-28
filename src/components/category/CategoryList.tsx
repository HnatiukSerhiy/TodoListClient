import { Category } from './Category';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export function CategoryList() {
    const categories = useSelector((state: RootState) => state.categories.categories);

    return (
        <ul className="categories-list">
            {
                categories.map((category: any) => {
                   return <Category key={category.id} id={category.id} name={category.name} />
                })
            }
        </ul>
    );
}