import React from "react";
import "./Board.css";
import friends from "../../force.json";
import ImageCard from "../ImageCard";


class Board extends React.Component {
    state = {
      count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
      };
    
  render() {
return (

    <div className="board">
    { friends.map(element => (
        <ImageCard
        name={element.name}
        image={"./assets/img/" + element.image}
        handleIncrement={this.handleIncrement}
        />
        ))
    }
  </div>
  );
}
}
export default Board;
