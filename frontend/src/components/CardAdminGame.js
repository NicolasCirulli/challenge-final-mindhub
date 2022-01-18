import React, { useState, useRef, useEffect } from "react";
import "../styles/admin.css";
import {
    BsPencilSquare,
    BsFillBackspaceFill,
    BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { updateGame, deleteGame } from "../helpers/querys";

function CardAdminGame({ item }) {
    const [data, setData] = useState(item);
    const [placeholder, setPlaceholder] = useState("test");
    const [render, setRender] = useState(false);
    const [field, setField] = useState(null);
    const [type, setType] = useState('text');
    const input = useRef();

    const handleInput = (placeholder, query,type) => {
        setType(type)
        setPlaceholder(placeholder);
        setRender(true);
        setField(query);
    };

    const reset = () => {
        setRender(false);
        setField(null);
        setPlaceholder("");
    };


    const update = () => {
        
        if(field === 'percentage'){
           
            const body = {
                offer : true,
                priceOffer : (data.price * ((100 - input.current.value)/100)).toFixed(2)
            }
            updateGame(item._id, { body }).then((res) => {
                reset();
                setData(res.response.respuesta)
                console.log(res);
            }).catch(res => console.log(res))
        }else{
            const body = {
                [field]: input.current.value,
                offer: false
            };
            
            updateGame(item._id, { body }).then((res) => {
                reset();
                setData(res.response.respuesta)
                
            }).catch(res => console.log(res))
        }
    };
    const removeOffer = ()=> {
        const body = {
            offer: false
        }
        updateGame(item._id, {body}).then((res) => {
            setData(res.response.respuesta)
        }).catch(res => console.log(res))
        }

    const removeGame = () => {
        deleteGame(item._id).then(res => {console.log(res)}).catch(res => console.log(res))
    }

    return (
        <div className="card-user-admin">
            <div className="card-user-admin-img">
                <img
                    src={data.background_image}
                    alt="userImage"
                    className="user-admin-img-games"
                />
            </div>
            <div className="card-user-admin-fields">
                <p className="text-center">Name: {data.name} </p>
            </div>
            <div className="card-user-admin-fields">
                <p className="text-center">Price: $ {data.price} </p>
            </div>
            {data.offer && (
                <div className="card-user-admin-fields">
                    <p className="text-center">
                        Offer : $ {data.priceOffer}{" "}
                    </p>
                </div>
            )}
            <button className="btns-games" onClick={() => handleInput("New price", "price",'number')}>
                Update price
            </button>
           { !data.trailer && <button className="btns-games" onClick={() => handleInput("Url trailer", "trailer",'text')}>
                Add trailer
            </button>}

            <button className="btns-games" onClick={() => handleInput("Url screenshot", "screenshot",'text')}>
                Add screenshot
            </button>    
            
            {!data.creator_img &&<button onClick={() => handleInput("new creator image", "creator_img",'text')}>
                Add creator image
            </button> }
            <div>
                {data.offer ? (
                    <>
                        <button className="btns-games" onClick={()=> handleInput('New offer: percentage %', 'percentage','number')}>Update offer</button>
                        <button className="btns-games" onClick={removeOffer}>Remove offer</button>
                    </>
                ) : (
                    <button className="btns-games" onClick={()=> handleInput('New offer: percentage %', 'percentage','number')}>Add offer</button>
                )}
            </div>
            <button className="btns-games" onClick={removeGame} >Delete game</button>

            {render && (
                <div className="card-user-admin-fields">
                    <input
                        type={type}
                        placeholder={placeholder}
                        ref={input}
                    />
                    <button className="input-icon" onClick={update}>
                        <BsFillArrowRightSquareFill />
                    </button>
                    <button className="btn-close-adm" onClick={reset}>X</button>
                </div>
            )}
        </div>
    );
}

export default CardAdminGame;
