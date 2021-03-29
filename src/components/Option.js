function Option(props){
    return(
        <div className="option-drop-down">
            <option>Location</option>
            <option key={props.id} value={props.id}>{props.location}</option>
        </div>
    )
}

export default Option