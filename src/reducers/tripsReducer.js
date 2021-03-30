const tripsReducer = (state = {trips: []}, action) =>{

    switch(action.type){
        case 'FETCHING_TRIPS':
            return{
                ...state,
                trips: action.trips
            }

        case 'ADD_TRIPS':
            return {
                ...state,
                trips: [...state.trips , action.trip] //add new trip to end of trip array
            }

        case 'REMOVE_TRIP':
            let newTrips = [...state.trips];
            newTrips.splice(state.trips.indexOf(action.book), 1);
            return newTrips;
        
        default:
            return state;
    }
}

export default tripsReducer;