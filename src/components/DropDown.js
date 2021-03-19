
function DropDown(props){
    console.log(props)
        return(
            <div className="drop-down" >
               Pick your location:
          <select name='location'onChange={this.optionList}>
          <option value={props.location}>{props.location}</option>

                
                
          </select>
            </div>
        )
    }
    
    //will need this to be a seperate link
    export default DropDown