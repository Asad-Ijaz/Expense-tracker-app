const incomeAction = (data)=>{
    console.log('data from component to action', data)
    return{
        type : 'add_Income',
        payload:data,
    }
}
export default incomeAction;