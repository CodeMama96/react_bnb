

function Listing(props) {
        return(
           
            <div className="listing" key={`listing-${props.id}`}>
                <h3>{props.location} - ${props.price} per night</h3>
                <img height="300" width="400" key={props.id} src={props.image} alt={props.id} />
                <p>{props.description}</p>
            </div>
            
        )
        
}

//{this.props.travelPics.map((props, index) => 
//{<img height="300" width="400" crop= "fill" key={img.id} src={img.image} alt={img.id}/>)
export default Listing