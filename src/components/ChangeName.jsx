import { useState } from "react";

const Change = () => {
    const [username, setUsername] = useState("Unknown");

    const changeName = () => {
        setUsername("Naïké");
    }

    return (
        <>
            <h1>{username}</h1>
            <button onClick={changeName} className="py-0 my-0 mr-5 text-white bg-slate-600 hover:bg-slate-600 border-slate-900">Change Name</button>
        </>
    )
}

export default Change;