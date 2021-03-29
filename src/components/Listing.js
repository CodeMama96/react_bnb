function Listing(props) {
    return(
        <div className="listing">
            <h3>{props.location} - ${props.price} per night</h3>
            <img className="listing-image" height="300" width="400" key={props.id} src={props.image} alt={props.id} />
            <p>{props.description}</p>
        </div>  
    )     
}


export default Listing