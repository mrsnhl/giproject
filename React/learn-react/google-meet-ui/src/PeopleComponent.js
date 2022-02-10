import React from 'react';

function PeopleComponent(props) {

    let obj = props.obj;

    console.log(props);

    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState('lightblue');
    const [isMuted, setIsMuted] = React.useState(obj.isMuted);

    function changeCount () {
        if(count*count<5) {
        setCount(count+1)
        }
    }

    return (
        <div style={{ backgroundColor : color }}>
            <h1>{count}</h1>
            <h2>{isMuted?"Mute":"Unmute"}</h2>
        <div>{obj.name}</div>
        <div>{obj.email}</div>
        <div>{obj.isMuted?  <button onClick={changeCount}>Increase</button>:<button onClick={function() {setCount(count-1)}}>Decrease</button>
        }</div>

        <div>{isMuted?  <button onClick={function() {setIsMuted(false)}}>Unmute</button>:<button onClick={function() {setIsMuted(true)}}>Mute</button>
        }</div>

        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        </div>
    )
}

export default PeopleComponent;