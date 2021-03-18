import { Component } from "react";


class TripSearch extends Component{
    handleSearchBar = (e) => {
        const search = e.target.value
        this.setState({search: search}) // will cause a rerender
    }
    render(){
        return(
            <div className="search-items">
            <input type="text" placeholder="Search By Location" onChange={this.handleSearchBar}/>
            <input type="date" placeholder="Start Date" />
            <input type="date" placeholder="End Date" />
            <input type="text" placeholder="# of Guest" />
           
           
            </div>
        )
    }
}

export default TripSearch