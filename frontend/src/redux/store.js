import { legacy_createStore } from "redux"
import { reducer } from "./reducer"

export const baseURL = "http://localhost:7701";
// export const baseURL = "https://coding-mock-2-be.onrender.com";

export const store = legacy_createStore(reducer);