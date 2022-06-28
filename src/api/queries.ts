import performGraphQLRequest from './GraphQLRequest';

const getTodosQuery = async() => {
    const query: string = `
        query getTodos {
            todos {
                id
                description
                doneTime
                deadline
                categoryId
                isDone
            }
        }`;

    return await performGraphQLRequest(query, null);
}

const getCompleteTodosQuery = async(categoryId: string | null) => {
    const query: string = `
        query getCompleteTodos($categoryId: String) {
            completeTodos(categoryId: $categoryId) {
                id
                description
                doneTime
                categoryId
                isDone
            }
        }`;

    const variables = {
        categoryId: categoryId
    }

    return await performGraphQLRequest(query, variables);
}

const getUnCompleteTodosQuery = async(categoryId: string | null) => {
    const query: string = `
        query getUnCompleteTodos($categoryId: String) {
            unCompleteTodos(categoryId: $categoryId) {
                id
                description
                deadline
                categoryId
                isDone
            }
        }`;

    const variables = {
        categoryId: categoryId
    }

    return await performGraphQLRequest(query, variables);
}

const getTodoByIdQuery = async(id: number) => {
    const query: string = `
        query getTodoById($id: Int) {
            todo(id: $id) {
                id
                description
                deadline
                categoryId
                isDone
            }
        }`;

    return await performGraphQLRequest(query, id);
}

const getCategoriesQuery = async() => {
    const query: string = `
        query getCategories {
            categories {
                id
                name
            }
        }`;

    return await performGraphQLRequest(query, null);
}

const getCategoryByIdQuery = async(id: number) => {
    const query: string = `
        query getCategoryById($id: Int) {
            category(id: $id) {
                id
                name
            }
        }`;

    return await performGraphQLRequest(query, id);
}

export {
    getTodosQuery,
    getUnCompleteTodosQuery,
    getCompleteTodosQuery,
    getTodoByIdQuery,
    getCategoriesQuery,
    getCategoryByIdQuery,
}