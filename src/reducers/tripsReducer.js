const tripsReducer = (state = {trips: [], loading: false}, action) =>{

    switch(action.type){
        case 'FETCHING_TRIPS':
            return{
                ...state,
                trips:[...state.trips],
                loading: true

            }
        case 'ADD_TRIPS':
            return {
                ...state,
                trips: action.trips,
                loading: false
            }
            default:
                return state;
    }
}

export default tripsReducer;