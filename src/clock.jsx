import React, {useState} from "react";
import Timer from "./timer";

function Clock() {
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