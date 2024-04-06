import React, {useState} from 'react'
import styles from './Counter.module.css'

function Counter() {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    }
    const decrementCounter = () => {
        setCount(count - 1);
    }
    const resetCounter = () => {
        setCount(0);
    }

    return(
        <div className={styles.counterContainer}>
            <p className={styles.countDisplay}>{count}</p>
            <button className={styles.counterButton} onClick={decrementCounter}>Decrement</button>
            <button className={styles.counterButton} onClick={resetCounter}>Reset</button>
            <button className={styles.counterButton} onClick={incrementCounter}>Increment</button>
        </div>
    );

}

export default Counter