export const fetchTrips = () => {
    
    return (dispatch) => {
        dispatch({type: 'FETCHING_TRIPS'})
        fetch('http://localhost:3000/trips')
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_TRIPS', trips: responseJSON})
        })
    }

}