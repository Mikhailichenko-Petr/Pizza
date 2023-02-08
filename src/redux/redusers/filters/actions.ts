import { ActionTypesEnum } from "../../type"
import { SetCategoryType, SetSortType, SortPayload } from "./type"


export const setSort=(type:SortPayload):SetSortType=>({
    type: ActionTypesEnum.SET_SORT_BY,
    payload: type
})

export const setCategory=(index:number|null):SetCategoryType=>({
    type: ActionTypesEnum.SET_CATEGORY,
    payload: index
})