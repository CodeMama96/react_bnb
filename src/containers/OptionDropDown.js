import React, {Component} from 'react';
import Option from '../components/Option'

class OptionDropDown extends Component{

    dropDown(){
        let displayOptions = this.props.listings
        return displayOptions.map(item =>
            <Option
                key={item.id}
                location={item.location}
            />
            )
    }

    render(){
        return(
            <div className="options-container">
                {this.dropDown()}
            </div>
        )
    }

}

export default OptionDropDown