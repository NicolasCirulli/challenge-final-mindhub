import React,{useState,useRef} from "react";
import '../styles/admin.css'
import { BsPencilSquare,BsFillBackspaceFill,BsFillArrowRightSquareFill } from "react-icons/bs";
import {updateUser,deleteUser} from '../helpers/querys'

function CardAdmin({user}) {
    
    const [data,setData] = useState(user)
    const [placeholder,setPlaceholder] = useState('probando')
    const [render,setRender] = useState(false)
    const [field, setField] = useState(null)

    const input = useRef()


    const handleInput = (placeholder,query ) =>{
        setPlaceholder(placeholder)
        setRender(true)
        setField(query)
    }
    const update = ()=>{
        const body ={
            [field] : input.current.value
        }
        
        updateUser(data._id,body)
            .then(res => {
                setData(res.response.respuesta)
                reset()
            })
            .catch(err => console.log(err))
    }

    const reset = ()=>{
        setRender(false)
        setField(null)
        setPlaceholder('')
    }

  return (
   
      <div className="card-user-admin">
          <div className="card-user-admin-img">
            <img src={data.image} alt='userImage'className="user-admin-img"/>
            <button className="card-user-admin-icon" onClick={()=> handleInput('New image', 'image')}>
                <BsPencilSquare />
             </button>
          </div>
          <div className="card-user-admin-fields">
             <p>Name: {data.firstName} </p>
             <button className="card-user-admin-icon" onClick={()=> handleInput('New name','firstName')}>
                <BsPencilSquare />
             </button>
          </div>
          <div className="card-user-admin-fields">
            <p>Username: {data.userName} </p>
            <button className="card-user-admin-icon" onClick={()=> handleInput('New username', 'userName')}>
                <BsPencilSquare />
             </button>
          </div>
          <div className="card-user-admin-fields">
            <p>Mail: {data.mail} </p>
            <button className="card-user-admin-icon" onClick={()=> handleInput('New email', 'mail')}>
                <BsPencilSquare />
             </button>
          </div>
          
          {render && 
          <div className="card-user-admin-fields">
            <input type='text' placeholder={placeholder} ref={input} />
            <button className="input-icon" onClick={update}>
                <BsFillArrowRightSquareFill/>
            </button>
            <button className="btn-close-adm" onClick={reset}>X</button>
          </div>
          }
          <button className="card-user-admin-delete" onClick={()=>deleteUser(user._id)}>Delete Account</button>
      </div>
    
  );
}

export default CardAdmin;
