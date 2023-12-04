import { ADD_CONTACTS_REQUEST, ADD_CONTACTS_SUCCESS, DELETE_CONTACTS_REQUEST, DELETE_CONTACTS_SUCCESS, EDIT_CONTACTS_REQUEST, EDIT_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "./actionType"

export const getContactsRequest = () => {
    return ({type: GET_CONTACTS_REQUEST});
}

export const getContactsFailure = () => {
    return ({type: GET_CONTACTS_FAILURE})
}

export const getContactsSuccess = (payload) => {
    return ({type: GET_CONTACTS_SUCCESS, payload});
}

export const addContactRequest = () => {
    return ({type: ADD_CONTACTS_REQUEST});
}

export const addContactSuccess = (payload) => {
    return ({type: ADD_CONTACTS_SUCCESS, payload});
}

export const editContactRequest = () => {
    return ({type: EDIT_CONTACTS_REQUEST});
}

export const editContactSuccess = (payload) => {
    return ({type: EDIT_CONTACTS_SUCCESS, payload});
}

export const deleteContactRequest = () => {
    return ({type: DELETE_CONTACTS_REQUEST});
}

export const deleteContactSuccess = (payload) => {
    return ({type: DELETE_CONTACTS_SUCCESS, payload});
}