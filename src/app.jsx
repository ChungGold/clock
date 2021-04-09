import Clock from "./clock";
import Alarm from "./alarm";


const App = () => {
    return (<div id = 'container'>
        <Alarm />
        <Clock />
    </div>);
}

export default App;