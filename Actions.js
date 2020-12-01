import { createAction } from "redux-actions"
import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = "book.add"
export const REMOVE_BOOK = "book.remove"

export const addBook = createAction(ADD_BOOK, book => ({ ...book, uuid: uuidv4() }))
export const removeBook = createAction(REMOVE_BOOK, book => book)