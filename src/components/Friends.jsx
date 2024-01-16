import { useState } from "react";

const Friends = () => {
    const [friends, setFriends] = useState(["Alex", "John", "Sarah"]);

    const addOne = () => {
        setFriends([...friends, "Naïké"]);
    }
    const removeOne = () => {
        setFriends(friends.filter((f) => f !== "Alex"));
    }
    const updateOne = () => {
        setFriends(friends.map((f) => f === "Sarah" ? "Sarah Williams" : f));
    }

    return (
        <>
            {friends.map((f) => (
            <li key={Math.random()}>{f}</li>
            ))}
            
            <button onClick={addOne} className="py-0 my-0 mr-5 text-white bg-slate-600 hover:bg-slate-600 border-slate-900">Add One</button>
            <button onClick={removeOne} className="py-0 my-0 mr-5 text-white bg-slate-600 hover:bg-slate-600 border-slate-900">Remove One</button>
            <button onClick={updateOne} className="py-0 my-0 mr-5 text-white bg-slate-600 hover:bg-slate-600 border-slate-900">Update One</button>
            
        </>
    )
}

export default Friends;


/*const username = user?.name ?? "Unknown";*/
