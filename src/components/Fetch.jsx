import { useEffect, useState } from "react";

const Fetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            if (data?.length) setData(data ?? []);
        }

        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold">Fetch Data</h1>
            <ul>
                {data.map((d) => (
                    <li key={d.id}>{d.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Fetch;