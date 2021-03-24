
import React from 'react'

export default function filterLocation(props){
    return(
        <div>
            <input type="text" placeholder="Search for Location" onChange={props.handleInputChange}/>
        </div>
    )

}