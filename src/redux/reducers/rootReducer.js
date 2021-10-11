import {combineReducers} from 'redux'
import addIncomeReducer from '../reducers/addIncomeReducer'
import addExpenseReducer from '../reducers/addExpenseReducer'

const rootReducer = combineReducers({
    
    addIncomeReducer,
    addExpenseReducer,
    
}) 
export default rootReducer;