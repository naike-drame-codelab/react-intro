import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment} className="py-0 my-0 mr-5 bg-slate-300 hover:bg-slate-600 border-slate-900">+</button>
            <button onClick={decrement} className="px-1 py-0 my-0 mr-5 bg-slate-300 hover:bg-slate-600 border-slate-900">-</button>
        </>
    )
}

export default Counter;