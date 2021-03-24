function OptionDropDown(props){
    return(
        <div>
        <option>Location</option>
        {props.listings.map((list) => (
            <option key={list.id} value={list.id}>{list.location}</option>
        )
        )
        }
    </div>
    )
}

export default OptionDropDown