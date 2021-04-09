import React from "react";
import Clock from "./clock";
import Alarm from "./alarm";


function App() {
    return (<div id = 'container'>
        <Alarm />
        <Clock />
    </div>);
}

export default App;