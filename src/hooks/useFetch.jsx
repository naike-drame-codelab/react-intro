import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.log("No data found", error);
			}
		};
		fetchData();
	}, [url]);

	return data;
};

export default useFetch;
