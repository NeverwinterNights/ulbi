import React, {useState} from 'react';
import "./Counter.scss"

export const Counter =React.memo(() => {
    const [inc, setInc] = useState(0);
    const onInc = () => {

        setInc(inc+1)
    }
    return (
        <>
            <h1>{inc}</h1>
            <button onClick={onInc}>Increment</button>
        </>
    );
});

