const url = 'http://localhost:3000/trips'


export const fetchTrips = () => {

    return (dispatch) => {
        fetch(url)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'FETCHING_TRIPS', trips: responseJSON})
        })
    }

}

export const createTrips = (trip) => {
    const tripInfo = {trip: {
        listing_id: trip.listing_id,
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
        fetch(url, configObj)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'ADD_TRIPS', trip: responseJSON})
        })
    }
}

export const removeTrip = trip => {
   

    const configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }

    return (dispatch) =>{

        fetch(url+`/${trip.id}`, configObj)
        .then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({ type: 'REMOVE_TRIP', trip: responseJSON})
        })
   
    };
  };
  

  //action creators