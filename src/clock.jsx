import React, {useState} from "react";
import Timer from "./timer";

function Clock() {
    // setInterval(() => {
    //     let time = new Date().toLocaleTimeString().replace(/\D/g,'').split('');

    //     switch (time.length) {
    //         case 5:
    //             setDeg({
    //                 hour: transform: `rotateZ('+(time[0])*30+(time[1]+time[2])*0.5+'deg)`,
    //                 minute: transform: `rotateZ('+(time[1]+time[2])*6+'deg)`,
    //                 second: transform: `rotateZ('+(time[3]+time[4])*6+'deg)`
    //             });
    //             break;
    //         case 6:
    //             setDeg({
    //                 const hour = { transform: `rotateZ('+(300)+(${time[1]})*30+(${time[2]}+${time[3]})*0.5+'deg')`}
    //                 minute: transform: `rotateZ('+(time[2]+time[3])*6+'deg)`,
    //                 second: transform: `rotateZ('+(time[4]+time[5])*6+'deg)`
    //             });
    //     }
    // }, 1000);

    // const arr = new Date().toLocaleTimeString().replace(/\D/g,'').split('');

    // const [deg, setDeg] = useState({
    //     hour: '',
    //     minute: '',
    //     second: ''
    // });

let time = new Date().toLocaleTimeString().replace(/\D/g,'').split('').map(Number);

let test = time[0]*30+time[1]+time[2]*0.5;

const hour = {
    transform: `rotateZ(${test}deg)`
};

const minute = {
    transform: `rotateZ(360deg)`
};

const second = {
    transform: `rotateZ(360deg)`
};

    return (
        <div id = 'clock'>
            <Timer />
            <span id = 'hour' 
                style = {hour}>
            </span>
            <span id = 'minute' 
                style = {minute}>
            </span>
            <span id = 'second'
                style = {second}>
            </span>
        </div>
    );
}

export default Clock;

