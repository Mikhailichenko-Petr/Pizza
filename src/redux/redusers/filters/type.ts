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

export type SortBy={
    type:string,
    order:string
    name:string
}

export type FiltersReduserType={
    category:null|number,
    sortBy:SortBy,
    name?:string
}