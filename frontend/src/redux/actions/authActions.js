import axios from "axios"


const usuarioActions = {
    newUser: ( {firstName, lastName, userName, mail, password, image, address } )=>{
        return async(dispatch)=>{
            try{

                const user = await axios.post('http://localhost:4000/api/user/signup',{firstName, lastName, userName, mail, password, image, address})
                if(user.data.success){
                    localStorage.setItem('token',user.data.res.token)
                    dispatch({type:'signIn', payload:{userName: user.data.res.userName, image:user.data.res.image, id: user.data.res.id}})
                    return user.data
                }
                return user.data
               

            }catch(err){console.log(err)}
           
        }
    },
    signIn:({mail,password}) =>{
        return async(dispatch)=>{
            try{
                const user = await axios.post('http://localhost:4000/api/user/signin',{mail,password})
                console.log(user)
                if(user.data.success){
                    localStorage.setItem('token',user.data.res.token)
                    dispatch({type:'signIn', payload:{userName: user.data.res.userName, image:user.data.res.image, id: user.data.res.id}})
                    return user.data
                }
                return user.data

            }catch(err){console.log(err)}
           
        }
    },
    signInWithToken:(token)=>{
        return async(dispatch) =>{
            try{
                const user = await axios.post('http://localhost:4000/api/verifyToken',{} ,{
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                console.log(user)
                user.data.success && dispatch({type:'signIn', payload:{userName: user.data.res.userName, image:user.data.res.image, id: user.data.res.id}})
                
            }catch(err){console.log(err)}
        }
    }
}

export default usuarioActions