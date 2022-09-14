export const setSort=({type,order})=>({
    type: 'SET_SORT_BY',
    payload: {type,order}
})

export const setCategory=(index)=>({
    type: 'SET_CATEGORY',
    payload: index
})