function Option(props){
    return(
        <div className="option" key={`listing-${props.id}`}>
            <option>{props.location}</option>
        </div>
    )
}

export default Option