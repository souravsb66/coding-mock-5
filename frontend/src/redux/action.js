import { ADD_CONTACTS_REQUEST, ADD_CONTACTS_SUCCESS, DELETE_CONTACTS_REQUEST, DELETE_CONTACTS_SUCCESS, EDIT_CONTACTS_REQUEST, EDIT_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from "./actionType"

const getContactsRequest = () => {
    return ({type: GET_CONTACTS_REQUEST});
}

const getContactsFailure = () => {
    return ({type: GET_CONTACTS_FAILURE})
}

const getContactsSuccess = () => {
    return ({type: GET_CONTACTS_SUCCESS});
}

const addContactRequest = () => {
    return ({type: ADD_CONTACTS_REQUEST});
}

const addContactSuccess = () => {
    return ({type: ADD_CONTACTS_SUCCESS});
}

const editContactRequest = () => {
    return ({type: EDIT_CONTACTS_REQUEST});
}

const editContactSuccess = () => {
    return ({type: EDIT_CONTACTS_SUCCESS});
}

const deleteContactRequest = () => {
    return ({type: DELETE_CONTACTS_REQUEST});
}

const deleteContactSuccess = () => {
    return ({type: DELETE_CONTACTS_SUCCESS});
}