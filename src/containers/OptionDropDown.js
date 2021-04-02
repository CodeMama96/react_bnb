import React, {Component} from 'react';
import Option from '../components/Option'

class OptionDropDown extends Component{


    dropDown(){
        let displayOptions = this.props.listings
        return displayOptions.map(item =>
            <Option
                key={item.id}
                value={item.id}
                location={item.location}
            />
            )
    }

    render(){
        
        return(
            
            <select className="trip-bar" name="listing_id" onChange={this.props.handleFormChange}>
                {this.dropDown()}
            </select>
                
        )
    }

}
// this.props. -- because it's a class component

export default OptionDropDown