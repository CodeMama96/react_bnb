import React, {Component} from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component{


    handleSubmit(event) {
        alert(this.props.value);
        event.preventDefault();
      }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    


    handleGuestChange(){

    }

    render(){
        console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your location:
                        
                        <select>
                            <option >Location</option>
                                {console.log(this.props)}
                                    {this.props.listings.map((list) => (
                                        <option key={list.id}>{list.location}</option>
                                    )
                                )
                                }
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                        <input type="date" placeholder="Start Date" onChange={this.handleStartDate}/>
                        <input type="date" placeholder="End Date" onChange={this.handleEndDate}/>
                        <input type="text" placeholder="Number of Guest" onChange={this.handleGuestChange}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      listings: state.listingsReducer.listings
    }
}
  


export default connect(mapStateToProps)(SearchBar)