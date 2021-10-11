let usedArray=[];
let expense={
goods:"Potato",
expense:'0.00',
//expenseArray:[],
date:new Date(),
used:0,
usedArray:[],

}

function addExpenseReducer(initialState=expense,action){

          switch (action.type){
             case "add_expense":
              let expenseData= action.payload;

              console.log('data in addExpenseReducer',expenseData );
              let obectExpense={
                goods:expenseData.goods,
                expense:expenseData.expense,
                date:expenseData.date,
                //expenseArray:expenseData.expenseArray,
                used:expenseData.used,
                usedArray:[...usedArray,expenseData],
              }
              usedArray=[...usedArray,expenseData];
              return obectExpense;
             
             default:
               return initialState;
          }
  

}
export default addExpenseReducer;