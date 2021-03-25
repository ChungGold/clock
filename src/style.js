function present() {

    let z = '';

    setInterval(() => {
        let time = new Date().toLocaleTimeString();
        setTime(time);

        time.split('').filter(Number)
    
    }, 1000);
    
    const now = new Date().toLocaleTimeString();

    const [clock, setTime] = useState(now);
}

let hands = {
    translateZ: 
}

export {present, hands};