import React, {Component} from 'react';
import Option from '../components/Option'

class OptionContainer extends Component {

    optionDropDown(){
        <Option/>
        
        // return this.props.listings.map(opt =>
        //     <Option
        //         location={opt.location}
        //     />
        //     )

    }


    render(){

        return(
            <div className="option-container">
                {this.optionDropDown()}
            </div>

        )
    }

}
export default OptionContainer