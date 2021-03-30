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
            let idx = state.trips.findIndex(p => p.id === action.trip.id)
        
            return { 
                ...state, 
                trips: [...state.trips.slice(0, idx), ...state.trips.slice(idx + 1)]
            }
        default:
            return state;
    }
}

export default tripsReducer;