import React,{useState,useEffect} from 'react'
import { getAllUsers,updateUser,deleteUser,getAllGames} from '../helpers/querys'
import '../styles/admin.css'
import CardAdmin from '../components/CardAdmin'
function AdminPanel() {

    const [allUsers, setAllusers] = useState([])
    const [allGames, setAllgames] = useState([])
    const [render,setRender] = useState(true)

    useEffect(() => {
        getAllUsers()
        .then(res => setAllusers(res.response.res))
        .catch(err => console.log(err))

        getAllGames()
        .then(res => {
            setAllgames(res.response.res)
        })
        .catch(err => console.log(err))
    }, [])
    
    
    

    return (
        <div className="container about-us">
            <div className="container cont-welcome">
                <div className="welcome">
                   
               

                   <h1>admin</h1>


                    <div className='d-flex'>

                        <button className='btnAdmin' onClick={()=> setRender(true)}>
                            <span className='btnAdmin_text'>Users</span>
                        </button>

                        <button className='btnAdmin' onClick={()=> setRender(false)}>
                            <span className='btnAdmin_text'>Games</span>
                        </button>
                    </div>
                   {
                    render 
                    ? <p>Cantidad de usuarios registrados es: {allUsers.length}</p>
                    : <p>Cantidad de Juegos disponibles es: {allGames.length}</p>
                   }
                       <div className='d-flex'>
                   {
                       render && allUsers.map(user =>  <CardAdmin key={user._id} user={user}/>)
                   }
                   </div>
                </div>
            </div>
                

            <div>
                



            </div>
            
        </div>
    )
}

export default AdminPanel
