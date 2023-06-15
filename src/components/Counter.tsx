import React, {useState} from 'react';
import styles from "./Counter.module.scss"

export const Counter =React.memo(() => {
    const [inc, setInc] = useState(0);
    const onInc = () => {

        setInc(inc+1)
    }
    return (
        <div className={styles.btn}>
            <h1>{inc}</h1>
            <button onClick={onInc}>Increment</button>
        </div>
    );
});

