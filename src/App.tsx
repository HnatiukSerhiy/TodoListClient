import { Routes, Route } from 'react-router-dom';
import { HomePage, UpdateTodoPage, UpdateCategoryPage, CategoryPage } from './components/pages';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/UpdateTodo/:id" element={<UpdateTodoPage />} />
            <Route path="/Categories" element={<CategoryPage />} />
            <Route path="/UpdateCategory/:id" element={<UpdateCategoryPage />} />
        </Routes>
    );
}

export default App;
