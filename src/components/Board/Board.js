import React from "react";
import "./Board.css";
import friends from "../../force.json";
import ImageCard from "../ImageCard";


class Board extends React.Component {
    state = {
      count: 0,
      picks: []
    };

    handleIncrement = (img) => {
        this.state.picks.find(o => o === img) ? (
            this.setState({ count: 0 ,  picks: []})
        ) : (
            this.setState({ 
                count: this.state.count + 1,  
                picks:  this.state.picks.concat(img)})
        )
       console.log(this.state.picks)
      };
    
  render() {
return (

    <div>
    <p className="card-text">Click Count: {this.state.count}</p>
    <div className="board">
    { friends.map(element => (
     <ImageCard
        key={element.name}
        name={element.name}
        image={"./assets/img/" + element.image}
        handleIncrement={this.handleIncrement.bind(this, element)}
        />
        ))
    }
    </div>
  </div>
  );
}
}
export default Board;
