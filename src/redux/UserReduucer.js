export const  useReducer = (state = { currentUser: null}, action) => {
    
    switch(action.type){
        case 'LOGGED_IN_USER':
            return {
                currentUser : action.payload
            }
        case 'LOGOUT_USER':
            return {
                currentUser : action.payload
            }

        default:
            return state
    }
}