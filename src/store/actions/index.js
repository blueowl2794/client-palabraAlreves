// import axios from 'axios';
// export const GET_TEXT = 'GET_TEXT';

// export function getText(texto) {
//     return function (dispatch) {
//         axios.get(`https://api-palabra.herokuapp.com/iecho?text=${texto}`)
//         .then((c)=>{
//             dispatch({
//                 type: GET_TEXT,
//                 payload: c.data
//             })
//         })
//         .catch((err)=>{
//             console.error(err);
//         })
//     }
// }