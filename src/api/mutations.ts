import performGraphQLRequest from './GraphQLRequest';
import {CreateTodoInputType, UpdateTodoInputType} from "../types/TodoTypes";
import {CreateCategoryInputType, UpdateCategoryInputType} from "../types/CategoryTypes";

const createTodoMutation = async(todo: CreateTodoInputType) => {
    const query: string = `
        mutation createTodo($todo: CreateTodoInputType!) {
            createTodo(todo: $todo) {
                id
                description
                deadline
                categoryId
                isDone
            }
        }`;

    const variables = {
        todo: todo
    }

    return await performGraphQLRequest(query, variables);
}

const updateTodoMutation = async(todo: UpdateTodoInputType) => {
    const query: string = `
        mutation updateTodo ($todo: UpdateTodoInputType!) {
            updateTodo(todo: $todo) {
                id
                description
                deadline
                categoryId
                isDone
            }
        }`;

    const variables = {
        todo: todo
    }

    return await performGraphQLRequest(query, variables);
}

const solveTodoMutation = async(id: string) => {
    const query: string = `
        mutation solveTodo ($id: String) {
            solveTodo(id: $id)
        }`;

    const variables = {
        id: id
    }

    return await performGraphQLRequest(query, variables);
}

const deleteTodoMutation = async(id: string) => {
    const query: string = `
        mutation deleteTodo ($id: String!) {
            deleteTodo(id: $id)
        }`

    const variables = {
        id: id
    }

    return await performGraphQLRequest(query, variables);
}

const createCategoryMutation = async(category: CreateCategoryInputType) => {
    const query: string = `
        mutation createCategory ($category: CreateCategoryInputType!) {
            createCategory(category: $category) {
                id
                name
            }
        }`

    const variables = {
        category: category
    }

    return await performGraphQLRequest(query, variables);
}

const updateCategoryMutation = async(category: UpdateCategoryInputType) => {
    const query: string = `
        mutation updateCategory ($category: UpdateCategoryInputType!) {
            updateCategory(category: $category) {
                id
                name
            }
        }`;

    const variables = {
        category: category
    }

    return await performGraphQLRequest(query, variables);
}

const deleteCategoryMutation = async(id: string) => {
    const query: string = `
        mutation deleteCategory ($id: String!) {
            deleteCategory(id: $id)
        }`;

    const variables = {
        id: id
    }

    return await performGraphQLRequest(query, variables);
}

const changeDataProviderMutation = async(dataSource: string) => {
    const query: string = `
        mutation changeDataProvider ($dataSource: String!) {
            changeDataProvider(dataSource: $dataSource)
        }`;

    const variables = {
        dataSource: dataSource
    }

    return await performGraphQLRequest(query, variables);
}

export {
    createTodoMutation,
    updateTodoMutation,
    solveTodoMutation,
    deleteTodoMutation,
    createCategoryMutation,
    updateCategoryMutation,
    deleteCategoryMutation,
    changeDataProviderMutation
}