import React, {useState} from "react";
import Timer from "./timer";

function Clock() {
    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        setTime(time);
        console.log(time);
    }, 1000);

    const now = new Date().toLocaleTimeString();

    const [clock, setTime] = useState(now);

    console.log(clock);

    return (
        <div id = 'clock'>
            <Timer />
            <span id = 'hour'></span>
            <span id = 'minute'></span>
            <span id = 'second'></span>
        </div>
    );
}

export default Clock;