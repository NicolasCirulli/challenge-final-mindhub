import axios from "axios";



const url = 'http://localhost:4000/api/'


const gamesActions = {
 getAllGames: ()=>{
     return async (dispatch) => {
        const res = await axios.get(url+"allgames");
        dispatch({type: 'ALL_GAMES', payload: res.data.res})
     }
 }
}
export default gamesActions;
