import { useEffect, useState } from "react";

const Effect = () => {
    const [count, setCount] = useState(0);

    //1. Render for the first time
    //2. Anytime we do(side effect); 
    //3. useEffect is called conditionally. React Hooks must be called in the exact same order in every component render.
    useEffect(() => {
        console.log("useEffect");
        // Update the document title
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} className="py-0 my-0 mr-5 text-white bg-slate-600 hover:bg-slate-300 border-slate-900">Click</button>
        </>
    )
}

export default Effect;