export const login = (user) => async (dispatch) => {

    try {
        dispatch({
            type:'LOGGED_IN_USER',
            payload: user
        })
    } catch (error) {
        console.log(error)
    }
} 


export const Logout = () => (dispatch) => {

    try {
        dispatch({
            type:'LOGOUT_USER',
            payload: null
        })
    } catch (error) {
        console.log(error)
    } 
}