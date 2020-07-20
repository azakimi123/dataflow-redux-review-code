//base url: https://joes-autos.herokuapp.com/api
import axios from 'axios';


const initialState = {
    cars: []
};

const GET_CARS = 'GET_CARS';


export function getCars() {
    const carArr = axios.get('https://joes-autos.herokuapp.com/api/vehicles')

    return {
        type: GET_CARS,
        payload: carArr
    }
}

export default function carReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_CARS + '_PENDING':
            return state;
        case GET_CARS + '_FULFILLED':
            console.log(payload)
            return {...state, cars: payload.data}
        case GET_CARS + '_REJECTED':
            return state;
        default: 
            return state;
    }
}