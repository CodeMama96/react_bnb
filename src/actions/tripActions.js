const url = 'http://localhost:3000/trips'


export const fetchTrips = () => {

    return (dispatch) => {
       // dispatch({type: 'FETCHING_TRIPS'})
        fetch(url)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
          //  debugger
            dispatch({ type: 'FETCHING_TRIPS', trips: responseJSON})
        })
    }

}

export const createTrips = (trip) => {
    const tripInfo = {trip: {

        start_date: trip.startDate,
        end_date: trip.endDate,
        guest_num: trip.guestNum
    }}
    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(tripInfo)
    }

    return (dispatch) => {

       //dispatch({type: 'FETCHING_TRIPS'})
        fetch(url, configObj)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_TRIPS', trip: responseJSON})
        })
    }
}