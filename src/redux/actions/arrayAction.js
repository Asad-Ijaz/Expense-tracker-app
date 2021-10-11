const arrayAction = (data)=>{
    console.log('data from component to action', data)
    return{
        type : 'add_array',
        payload:data,
    }
}
export default arrayAction;