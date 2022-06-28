export type CreateTodoType = {
    description: string,
    deadline: string | undefined,
    categoryId: string | undefined
}

export type CreateTodoInputType = {
    id: string,
    description: string,
    deadline: string | null,
    categoryId: string | null,
    isDone: boolean
}

export type UpdateTodoInputType = {
    id: string,
    description: string,
    deadline: string | null,
    categoryId: string | null,
}

export type TodoType = {
    id: string,
    description: string,
    deadline: string | null,
    doneTime: string | null,
    categoryId: string | null,
    isDone: Boolean
}

export type UpdateTodoType = {
    id: string,
    description: string,
    deadline: string | null,
    categoryId: string | null
}

export type TodoState = {
    todos: TodoType[]
}

export type CreateTodoInputVariableType = {
    todo: CreateTodoInputType
}

export type UpdateTodoInputVariableType = {
    todo: UpdateTodoInputType
}

export type IdInputVariableType = {
    id: string
}

export type DataSourceInputVariableType = {
    dataSource: string
}