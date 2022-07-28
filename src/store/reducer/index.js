// import { GET_TEXT} from '../actions';
// const initialState = {
//     texts: [],
// }

// export default function reducer(state = initialState, action){
//     switch(action.type){
//         case GET_TEXT:
//             return{
//                 ...state,
//                 texts: action.payload,
//             }
//         default: return state;
//     }
// }

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const reduceSlice = createSlice({
    name: "text",

    initialState: {
        texts: [],
    },
    reducers: {
        setText:(state,action) => {
            
            state.texts =[ ...state.texts , action.payload];
        }
    },
});

export const { setText } = reduceSlice.actions;
export default reduceSlice.reducer;

export const getText = (texto) => (dispatch) => {
    axios.get(`https://api-palabra.herokuapp.com/iecho?text=${texto}`)
    .then((c)=>{
        console.log("c", c.data);
        dispatch(setText(c.data));
     
    })
    .catch((err)=>{
        console.error(err);
    })
    
}