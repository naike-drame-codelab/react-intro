import { useState } from "react";

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${user.name}, ${user.email}, ${user.password}`);
    }

    return (
        <>  
            <h1>Form Demo</h1>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-40">
                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" className="border-2 border-slate-900" />
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" className="border-2 border-slate-900" />
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" className="border-2 border-slate-900" />
                <button type="submit" className="py-0 my-0 mr-5 text-white bg-slate-600 hover:bg-slate-300 border-slate-900">Submit</button>
            </form>
        </>
    )
}

export default Form;