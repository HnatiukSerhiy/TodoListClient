export type CategoryType = {
    id: string,
    name: string
}

export type CreateCategoryInputType = {
    id: string,
    name: string
}

export type UpdateCategoryInputType = {
    id: string,
    name: string
}

export type CreateCategoryType = {
    name: string
}

export type CategoryState = {
    categories: CategoryType[]
}

export type CreateCategoryInputVariableType = {
    category: CreateCategoryInputType
}

export type UpdateCategoryInputVariableType = {
    category: UpdateCategoryInputType
}
