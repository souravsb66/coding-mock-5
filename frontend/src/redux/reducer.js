import { ADD_CONTACTS_REQUEST, ADD_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    contacts: []
}

export const reducer = (state=initialState, {type,payload}) => {
    switch(type) {
        case GET_CONTACTS_REQUEST:
            return {...state, isLoading: true};
        case GET_CONTACTS_FAILURE:
            return {...state, isLoading: false, isError: true};
        case GET_CONTACTS_SUCCESS:
            return {...state, isLoading: false, isError: false, contacts: [...payload]};
        case ADD_CONTACTS_REQUEST:
            return {...state, isLoading: true};
        case ADD_CONTACTS_SUCCESS:
            return {...state, isLoading: false, contacts: [...state.contacts, payload]};
        default:
            return {...state};
    }
}