const deleteData = async id =>{
    try{
        await axois.delete('/api');
        dispatchEvent({type: DELETE_USER, payload: id})
    }catch(err){
        console.log(err)
    }
}   