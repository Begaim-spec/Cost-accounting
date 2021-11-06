export const addCost = (data) => {
    return {type: 'ADD_COST', payload: data}
}
export const clearAll = () => {
    return {type: 'CLEAR_ALL'}
}

export const clearItem = (index) => {
    return {type: 'CLEAR_ITEM', payload: index}
}
export const sortMoney = () => {
    return {type: 'SORT_MONEY'}
}