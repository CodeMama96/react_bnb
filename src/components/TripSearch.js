
function TripSearch(props){
console.log(props)
    return(
        <div className="trip-search" key={`trip-${props.id}`}>
            <p>{props.startDate} - {props.endDate} - Number of Guest: {props.guest}</p>
            
        </div>
    )
}

//will need this to be a seperate link
export default TripSearch