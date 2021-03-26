import React, {useState} from "react";
import Timer from "./timer";

function Clock() {
    // setInterval(() => {
    //     let time = new Date().toLocaleTimeString().replace(/\D/g,'').split('');

    //     switch (time.length) {
    //         case 5:
    //             setDeg({
    //                 hour: 'transform: translateZ('+(time[0])*30+(time[1]+time[2])*0.5+'deg)',
    //                 minute: 'transform: translateZ('+(time[1]+time[2])*6+'deg)',
    //                 second: 'transform: translateZ('+(time[3]+time[4])*6+'deg)'
    //             });
    //             break;
    //         case 6:
    //             setDeg({
    //                 hour: 'transform: translateZ('+(300)+(time[1])*30+(time[2]+time[3])*0.5+'deg)',
    //                 minute: 'transform: translateZ('+(time[2]+time[3])*6+'deg)',
    //                 second: 'transform: translateZ('+(time[4]+time[5])*6+'deg)'
    //             });
    //     }
    // }, 1000);

    // const arr = new Date().toLocaleTimeString().replace(/\D/g,'').split('');

    // const [deg, setDeg] = useState({
    //     hour: '',
    //     minute: '',
    //     second: ''
    // });

    const styles = StyleSheet.create({
        hour: {
            backgroundColor: 'black',
            transformOrigin: 'bottom',
            width: '0.5rem',
            height: '15rem',
            marginBottom: '15rem'
        },
    
        minute: {
            backgroundColor: 'black',
            transformOrigin: 'bottom',
            width: '0.25rem',
            height: '20rem',
            marginBottom: '20rem'
        },
    
        second: {
            backgroundColor: 'black',
            transformOrigin: 'bottom',
            width: '0.125rem',
            height: '22rem',
            marginBottom: '22rem',
        }
    });

    return (
        <div id = 'clock'>
            <Timer />
            <View style={[styles.hour, {
                    transform: [{ rotateZ: "45deg" }]
                }]}>
            </View>
            <span id = 'minute' ></span>
            <span id = 'second' ></span>
        </div>
    );
}

export default Clock;

