//state
const initialState = {
    username: 'Hansome Squidward',
    hometown: 'Bikini Bottom'
}

const GET_USER = 'GET_USER';
const CLEAR_USER = 'CLEAR_USER';

//action creators
export function getUser(userObj) {
    return {
        type: GET_USER,
        payload: userObj
    }
}


export function clearUser(){
    return {
        type: CLEAR_USER,
        payload: {username: '', hometown: ''}
    }
}


//reducer function
export default function userReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type){
        case GET_USER: 
            return {...state, username: payload.username, hometown: payload.hometown}
        case CLEAR_USER: 
            return {...state, username: payload.username, hometown: payload.hometown}
        default: 
            return state;
    }
}