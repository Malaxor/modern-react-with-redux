// state argument is not application state; only the state this function manages
function ActiveBook (state = null, action) {

    switch(action.type) {
        
        case 'BOOK_SELECTED':
        return action.payload
    }
    return state
}

export default ActiveBook;