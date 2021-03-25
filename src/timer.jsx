import React, {useState} from "react";

function Timer() {
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }, 1000);

    const now = new Date().toLocaleTimeString();

    const [clock, setTime] = useState(now);

    console.log(clock.split('').filter(Number));

    return (
        <div id = "timer">
            <h1 id = 'time'>{clock}</h1>
        </div>
    );
}

export default Timer;