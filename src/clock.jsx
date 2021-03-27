import React, {useState} from "react";
import Timer from "./timer";

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

    console.log(secondHand);

    return (
        <div id = 'clock'>
            <Timer />
            <span id = 'hour' 
                style = {hourHand}>
            </span>
            <span id = 'minute' 
                style = {minuteHand}>
            </span>
            <span id = 'second'
                style = {secondHand}>
            </span>
        </div>
    );
}

export default Clock;


// let time = new Date().toLocaleTimeString().replace(/\D/g,'').split('').map(Number);

// let hour = time[0]*30+time[1]+time[2]*0.5;

// let minute = (time[1]*10+time[2])*6;

// let second = (time[3]*10+time[4])*6;

// const hourHand = {
//     transform: `rotateZ(${hour}deg)`
// };

// const minuteHand = {
//     transform: `rotateZ(${minute}deg)`
// };

// const secondHand = {
//     transform: `rotateZ(${second}deg)`
// };