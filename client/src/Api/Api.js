const deleteData = async _id =>{
    try{
        await axois.delete('/api');
        dispatchEvent({type: DELETE_USER, payload: _id})
    }catch(err){
        console.log(err)
    }
}   