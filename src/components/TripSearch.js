
function TripSearch(props){
console.log(props)
    return(
        <div className="trip-search" key={`trip-${props.id}`}>
            <p>{props.startDate} - {props.endDate}</p>
            <p>Number of Guest: {props.guest}</p>
          
        </div>
    )
}

export default TripSearch