let income = {
  month:"february",
  salary:"0.00",
  date:new Date().toLocaleString(),
  incomes: [],
  incomeTotal:0,
  mont:"january",
  expense:'0.00',
  expenseHistoryArray:[],
  expenseTotal:0,
  total:0,
 }
function addIncomeReducer(state = income, action) {
console.log('data in reducer',action);
 state = { ...state };
 console.log('initialState', state);

 switch (action.type) {

   case "add_Income":
     console.log('add_Income_type',action);
     let data = action.payload;
     let historyArrayData ={
       salary:data.salary,
       month:data.month,
       date:data.date,
       }
     state.month = data.month;
     state.salary = data.salary;
     state.incomes = state.incomes.concat(historyArrayData);
     state.total = parseInt(state.total)+parseInt(state.salary);

    return state;
    case "DELETE_INCOME":
     state.incomes.splice(action.payload,1);
     state.total=parseInt(state.total)-parseInt(action.amount);
     state.salary=action.amount;
     return state;
    case "add_expense":
      let expenseArrayData = {
      mont:action.payload.mont,
      expense:action.payload.expense,
      date:state.date,
      }
      state.expenseHistoryArray=state.expenseHistoryArray.concat(expenseArrayData);
      state.mont=action.payload.mont;
      state.expense= action.payload.expense;
      state.total = parseInt(state.total)-parseInt(state.expense);
      return state;
      case "DELETE_EXPENSE-ITEM":
     state.expenseHistoryArray.splice(action.payload,1);
     state.total=parseInt(state.total)+parseInt(action.expense);
     state.expense=action.expense;
     return state;
     case "clear_All_History":
       state.incomes=[];
       state.expenseHistoryArray=[];
   
   default:
     return state;
 }


 
}
export default addIncomeReducer;