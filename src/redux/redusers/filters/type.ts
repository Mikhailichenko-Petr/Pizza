export type SortBy={
    type:string,
    order:string
}
export type FiltersReduserType={
    category:null|number,
    sortBy:SortBy,
    name?:string
}