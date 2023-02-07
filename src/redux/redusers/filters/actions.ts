import { ActionTypesEnum } from "../../type"

export type SortPayload={
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
    payload: number|null
}
export const setSort=(type:SortPayload):SetSortType=>({
    type: ActionTypesEnum.SET_SORT_BY,
    payload: type
})

export const setCategory=(index:number|null):SetCategoryType=>({
    type: ActionTypesEnum.SET_CATEGORY,
    payload: index
})