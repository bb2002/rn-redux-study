import { handleActions } from "redux-actions"
import { ADD_BOOK, REMOVE_BOOK } from "../Actions"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    books: [
        {
            name: "데이트 어 라이브 1",
            author: "타치바나 코우시",
            uuid: uuidv4()
        }
    ]
}

const bookReducer = handleActions({
    [ADD_BOOK]: (state, action) => ({
        books: [
            ...state.books,
            action.payload
        ]
    }),
    [REMOVE_BOOK]: (state, action) => ({
        books: [
            ...state.books.filter(book => book.uuid !== action.payload.uuid)
        ]
    })
}, initialState)

export default bookReducer