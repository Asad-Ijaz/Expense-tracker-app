// let incomeArray=['javed','wajid'];
//let incomeArray=[];

let user1=[];
let income={
month:"apple",
salary:"0.00",
//incomeArray:[],
date:new Date(),
income:0,
user1:[],
id:0,


}


//const data={user:[]}



// function addIncomeReducer(initialState=income, Action){
  function addIncomeReducer(initialState=income, Action){
  //const[incomeArray,setIncomeArray]= useState([]);
//console.log(user1);

  initialState = {...initialState};
  console.log('initialState',initialState);

  // const[incomeArray,setIncomeArray]= useState([]);
          switch (Action.type){
             case "add_Income":
               let data2= Action.payload;
               console.log('data in addIncomeReducer',data2 );
               let film ={
                         month:data2.month,
                         salary:data2.salary,
                        };
              // let incomeArra={incomeArray:incomeArra.concat(film)}
               let obectti={

                // incomeArray:data2.incomeArray,
                 month:data2.month,
                 salary:data2.salary,
                 //incomeArray:incomeArray.push(data2),
                //  incomeArray:[...incomeArray,data2],
                 income:data2.income,
                 id:data2.id,
                 //user1:[...user1, data2],
                 // user1:user1.concat(data2),
                //  user1:[...user1,data2],
                 
              //    //incomeArray:[...incomeArray,film],
              //   //  initialState,
                
              //   //  incomeArray:incomeArray.push('james'),
               
                user1:[...user1, data2],
                
                
                 }
                 
                 //data.user.push(data2);
                 user1=[...user1, data2]; 
                 //console.log(ur);
                //user1=[ user1.filter((item)=>( ur.find(item1=>(item.month == item1.month && item.salary == item1.salary))))];
                // console.log('data in reducer',user1);
               
                // console.log('indomeArray',incomeArray);
               return obectti;          
                
               
               
                //obectti;
               
              //  case "add_array":
              //  let data6= Action.payload;
              //  let arrayAction={
              //  month:data2.month,
              //  salary:data2.salary,
              //  incomeArray:data2.incomeArray,
              //  income:data2.income,
              //  }
              //  user1.push(data2);
              //  return arrayAction;
             default:
               return initialState;
          }
   

}
export default addIncomeReducer;