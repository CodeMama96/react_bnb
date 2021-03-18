

function Listing(props) {


    // travelList = () => {
        
    //     return this.props.travelPics.map(img => 
    //     <div>
    //     <p>{img.location}</p>
    //     <p>${img.price} per night </p>
    //     <img height="300" width="400" crop= "fill" key={img.id} src={img.image} alt={img.id} description={img.description}/>
    //     <p>{img.description}</p>
    //     </div>)
    // }
    
        return(
            <div class="listing" id={`listing-${props.id}`}>
                <p>{props.location}</p>
                <p>${props.price} per night </p>
                <img height="300" width="400" crop= "fill" key={props.id} src={props.image} alt={props.id} />
                <p>{props.description}</p>
            </div>
        )
        
}

//{this.props.travelPics.map((props, index) => 
//{<img height="300" width="400" crop= "fill" key={img.id} src={img.image} alt={img.id}/>)
export default Listing