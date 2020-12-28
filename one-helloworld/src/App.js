import React from "react";
import Button from "./Button";
import "./style.css";

const App = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Hello World!!</h1>
            <Button title="App Store"></Button>
            <Button title="Play Store"></Button>
            <Button />
            {/* <button className="button">App Store</button>
            <button className="button">Play Store</button> */}
        </div>
    );
}

export default App;
