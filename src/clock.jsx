import React, {useState} from "react";
import Timer from "./timer";

function Clock() {
//     setInterval(() => {
//         let time = new Date().toLocaleTimeString().replace(/\D/g,'').split('');

//         switch (time.length) {
//             case 5:
//                 setDeg({
//                     hour: 'transform: translateZ('+(time[0])*30+(time[1]+time[2])*0.5+'deg)',
//                     minute: 'transform: translateZ('+(time[1]+time[2])*6+'deg)',
//                     second: 'transform: translateZ('+(time[3]+time[4])*6+'deg)'
//                 });
//                 break;
//             case 6:
//                 setDeg({
//                     hour: 'transform: translateZ('+(300)+(time[1])*30+(time[2]+time[3])*0.5+'deg)',
//                     minute: 'transform: translateZ('+(time[2]+time[3])*6+'deg)',
//                     second: 'transform: translateZ('+(time[4]+time[5])*6+'deg)'
//                 });
//         }
//     }, 1000);

//     const arr = new Date().toLocaleTimeString().replace(/\D/g,'').split('');

//     const [deg, setDeg] = useState({
//         hour: '',
//         minute: '',
//         second: ''
//     });

const hour = {
    transform: `rotateZ(50deg)`
};

const minute = {
    transform: `rotateZ(45deg)`
};

const second = {
    transform: `rotateZ(60deg)`
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

