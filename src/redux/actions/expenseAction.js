const expenseAction = (data4)=>{
    console.log('data from component to action', data4)
    return{
        type : 'add_expense',
        payload:data4,
    }
}
export default expenseAction;