import React, {useState} from "react";
import Timer from "./timer";
import Marks from "./marks";

function Clock() {
    const now = new Date().toLocaleTimeString().replace(/\D/g,'').split('').map(Number);

    const [hour, setHour] = useState(now);

    const [minute, setMinute] = useState(now);

    const [second, setSecond] = useState(now);

    setInterval(() => {
        let time = new Date().toLocaleTimeString().replace(/\D/g,'').split('').map(Number);
        
        switch (time.length){
            case 5:
                setHour(time[0]*30+(time[1]*10+time[2])*0.5);
                setMinute((time[1]*10+time[2])*6);
                setSecond((time[3]*10+time[4])*6);
                break;
            case 6:
                setHour(300+time[1]*30+(time[2]*10+time[3])*0.5);
                setMinute((time[2]*10+time[3])*6);
                setSecond((time[4]*10+time[5])*6);
        }
    }, 1000);

    const hourHand = {
        transform: `rotateZ(${hour}deg)`
    };

    const minuteHand = {
        transform: `rotateZ(${minute}deg)`
    };

    const secondHand = {
        transform: `rotateZ(${second}deg)`
    };

    return (
        <div id = 'clock'>
            <Marks />
            <Timer />
            <div id = 'hour' 
                style = {hourHand}>
            </div>
            <div id = 'minute' 
                style = {minuteHand}>
            </div>
            <div id = 'second'
                style = {secondHand}>
            </div>
        </div>
    );
}

export default Clock;