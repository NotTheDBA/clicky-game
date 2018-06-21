import React from "react";
import "./Board.css";
import friends from "../../force.json";
import ImageCard from "../ImageCard";


class Board extends React.Component {
    state = {
        score: 0,
        best: 0,
        picks: []
    };

    handleIncrement = (img) => {
        this.state.picks.find(o => o === img) ? (
            this.setState({ score: 0, picks: [] })
        ) : (
                this.setState({
                    score: this.state.score + 1,
                    best: this.state.score + 1 > this.state.best ? this.state.score + 1 : this.state.best,
                    picks: this.state.picks.concat(img)
                })
            )
        console.log(this.state.picks)
    };

    render() {
        return (

            <div>
                <p className="card-text">Click score: {this.state.score} | Best score: {this.state.best}</p>
                <div className="board">
                    {friends.map(element => (
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
