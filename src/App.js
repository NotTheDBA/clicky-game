import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import friends from "./force.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Friends List</h1>
   { friends.map(element => (
      
    <ImageCard
      name={element.name}
      image={"./assets/img/" + element.image}
    />
    ))
  }
  </Wrapper>
);

export default App;
