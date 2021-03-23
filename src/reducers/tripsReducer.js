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
            default:
                return state;
    }
}

export default tripsReducer;