export const fetchListings = () => {
    return (dispatch) => {
        dispatch({type: 'FETCHING_LISTINGS'})
        fetch('http://localhost:3000/listings')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_LISTINGS', listings: responseJSON})
        })
    }

}