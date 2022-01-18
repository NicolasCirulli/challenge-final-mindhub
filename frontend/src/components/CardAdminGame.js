import React,{useState,useRef,useEffect} from "react";
import '../styles/admin.css'
import { BsPencilSquare,BsFillBackspaceFill,BsFillArrowRightSquareFill } from "react-icons/bs";
import {updateGame,deleteGame} from '../helpers/querys'


function CardAdminGame({item}) {
    const [data,setData] = useState(item)
    const [placeholder,setPlaceholder] = useState('test')
    const [render,setRender] = useState(false)
    const [field, setField] = useState(null)

    const input = useRef()

  

    const handleInput = (placeholder,query ) =>{
        setPlaceholder(placeholder)
        setRender(true)
        setField(query)
    }

    const reset = ()=>{
        setRender(false)
        setField(null)
        setPlaceholder('')
    }

    console.log(data)

    const update = () =>{
        
        const body = {
            [field] : input.current.value
        }

        updateGame("61dda941383308dc789b6e52",{body})
            .then(res => {
                
                
                const auxGame = {
                    data: res.response.respuesta.data[0],
                    price: res.response.respuesta.price,
                    _id: res.response.respuesta._id,
                }
                reset()
                setData(auxGame);
            })
    }
    
    
    
    
    

  return (
   
          
      <div className="card-user-admin">

          <div className="card-user-admin-img">
            <img src={data.background_image } alt='userImage'className="user-admin-img"/>
          </div>
          <div className="card-user-admin-fields">
             <p className="text-center">Name: {data.name} </p>
          </div>
          <div className="card-user-admin-fields">
             <p className="text-center">Price: $ {data.price} </p>
          </div>
          {data.offer && 
            <div className="card-user-admin-fields">
                <p className="text-center">Offer : $ {data.priceOffer.price} </p>
            </div>
          }
          <button onClick={()=>handleInput('New price','price')}>Actualizar precio</button>
          <div>
              {
                  data.offer 
                  ? <>
                        <button>Update offer</button>
                        <button>Remove offer</button>
                    </>
                  : <button>Add offer</button>
                }
          </div>
          <button>Delete game</button>
          
          {render && 
          <div className="card-user-admin-fields">
            <input type='number' placeholder={placeholder} ref={input}/>
            <button className="input-icon" onClick={update}>
                <BsFillArrowRightSquareFill/>
            </button>
            <button onClick={reset}>X</button>
          </div>
          }
      </div>
          
    
  );
}


export default CardAdminGame
