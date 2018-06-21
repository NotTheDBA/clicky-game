import React from "react";
import "./Board.css";
import friends from "../../force.json";
import ImageCard from "../ImageCard";


class Board extends React.Component {
    state = {
        level: 1,
        score: 0,
        best: 0,
        picks: []
    };

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    getElements = (age) => {
        return age.level <= this.state.level;
    }

    handleIncrement = (img) => {
        this.state.picks.find(o => o === img) ? (
            this.setState({ score: 0, level: 1, picks: [] })
        ) : (
                this.setState({
                    score: (this.state.score + 1) === (this.state.level + 1) * (this.state.level + 1) ? 0 : this.state.score + 1,
                    best: this.state.score + 1 > this.state.best ? this.state.score + 1 : this.state.best,
                    picks: (this.state.score + 1) === (this.state.level + 1) * (this.state.level + 1) ? [] : this.state.picks.concat(img),
                    level: (this.state.score + 1) === (this.state.level + 1) * (this.state.level + 1) ? this.state.level + 1 : this.state.level
                })
            )
    };

    render() {
        return (

            <div>
                <p className="card-text">Click score: {this.state.score} <br/>Best score: {this.state.best}</p>
                <div className={"board size-" + (this.state.level)}>
                    {this.shuffle(friends).filter(this.getElements).map(element => (
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
