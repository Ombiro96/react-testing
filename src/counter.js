import { useState } from "react"

export default function Counter({initialCount}){
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => prev - 1);
    };
    const multiplication = () => {
        setCount((prev) => prev *2)
    }
    const restart = () => {
        setCount(0);
    }

    const switchSigns = () => {
        setCount((prev) => prev * -1);
    }
    return(
    <div>
    <h1>Count: <h3>{count}</h3> </h1>
    <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={multiplication}>Double</button>
        <button onClick={restart}>Reset</button>
        <button onClick={switchSigns}>Switch signs</button>
    </div>
    </div>
    )
}