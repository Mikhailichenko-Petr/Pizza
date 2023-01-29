import { ActionTypesEnum } from "../type"

type SortPayload={
    name:string,
    order:string,
    type:string
}

export type SetSortType={
    type: ActionTypesEnum.SET_SORT_BY
    payload: SortPayload
}
export type SetCategoryType={
    type: ActionTypesEnum.SET_CATEGORY
    payload: number
}
export const setSort=(type:SortPayload):SetSortType=>({
    type: ActionTypesEnum.SET_SORT_BY,
    payload: type
})

export const setCategory=(index:number):SetCategoryType=>({
    type: ActionTypesEnum.SET_CATEGORY,
    payload: index
})