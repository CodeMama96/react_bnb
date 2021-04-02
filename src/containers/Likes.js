
import React, {Component} from 'react';

class Likes extends Component {

    state = {
        likes: 0
    }



    handleLike = () => {
        console.log('liked!')
     //when user clicks likes 
     this.setState((state) => ({likes: state.likes + 1})

     )

     //then change counter

    }
    

    render(){
        return(

            <div>

            <button onClick={this.handleLike}>Like = {this.state.likes}</button>

            </div>
        )
    }

}


export default Likes