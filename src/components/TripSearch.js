
function TripSearch(props){
    debugger
    return(
        <div className="search-items" key={`trip-${props.id}`}>
            <h2>{props.state_date}</h2>
            <h2>{props.end_date}</h2>
            <h2>{props.guest_num}</h2>
        </div>
    )
}

export default TripSearch