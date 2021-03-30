function Option(props){
    return(
    
            <option value={props.value} placeholder="Location"> {props.location}</option>
        
    )
}

export default Option