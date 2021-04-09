import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(
    <App />
, document.getElementById("root"));

let mark = document.getElementsByClassName('marks-area');

for (let i = 0; i < mark.length; i++) {
    mark[i].style.transform = `rotateZ(${i*7.5}deg)`;
    if (i === 0 || i % 4 === 0) {
        mark[i].firstElementChild.style.height = '75px';
        mark[i].firstElementChild.style.width = '5px';
    }
}

