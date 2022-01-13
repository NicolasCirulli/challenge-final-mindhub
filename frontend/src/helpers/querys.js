import axios from 'axios'

export const getAllUsers = async() => {
    try{
        const res = await axios.get('http://localhost:4000/api/users')
        if(res.success){
            return {success:true , error:null, response: res.data}
        }else{
            return {success:true , error:null, response: res.data}
        }
    }catch(err){
        return {success:false , error:err}
    }
}

export const updateUser = async(id,body) => {
    try{
        const res = await axios.put('http://localhost:4000/api/user/'+id,{...body})
        if(res.success){
            return {success:true , error:null, response: res.data}
        }else{
            return {success:true , error:null, response: res.data}
        }
    }catch(err){
        return {success:false , error:err}
    }
}
export const deleteUser = async(id,body) => {
    try{
        const res = await axios.delete('http://localhost:4000/api/user/'+id)
        if(res.success){
            return {success:true , error:null, response: res.data}
        }else{
            return {success:true , error:null, response: res.data}
        }
    }catch(err){
        return {success:false , error:err}
    }
}

export const getAllGames = async() => {
    try{
        const res = await axios.get('http://localhost:4000/api/allgames')
        if(res.success){
            return {success:true , error:null, response: res.data}
        }else{
            return {success:true , error:null, response: res.data}
        }
    }catch(err){
        return {success:false , error:err}
    }
}


// const res = await axios.put('http://localhost:4000/api/user/61df2517630106a0442b9cc4',{password:'12345678'})
// const res = await axios.delete('http://localhost:4000/api/user/61df23da630106a0442b9cb9')