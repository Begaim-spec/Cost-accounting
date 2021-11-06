const initialState = {
    tasks: [],
    initialAmount: 400,
    costs: 0,
    currentBalance: 400,
    sort: 'asc'
}

export const moneyReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_COST':
            if (action.payload.amount < state.currentBalance)
            return {...state, tasks: [...state.tasks, action.payload],
            currentBalance: state.currentBalance - action.payload.amount,
            costs: state.costs + +action.payload.amount
            }
            else{
                return {...state, tasks: [...state.tasks, action.payload]}
            }
        case 'CLEAR_ALL':
            return initialState
        case 'CLEAR_ITEM':
            const deletedItem = state.tasks[action.payload]
            return {...state,
                tasks: state.tasks.filter((el, idx) => idx !== action.payload),
                currentBalance: state.currentBalance + +deletedItem.amount,
                costs: state.costs - +deletedItem.amount
            }
        case 'SORT_MONEY' :
            state.tasks.sort((a, b) => {
                return state.sort === 'asc' ? a.amount - b.amount : b.amount - a.amount
            })
            return {...state, tasks: [...state.tasks], sort: state.sort === 'asc' ? 'desc' : 'asc'}
        default:
          return  state
    }
}