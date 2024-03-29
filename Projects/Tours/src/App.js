import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const fetchTours = async () => {
		setIsLoading(true);

		try {
			const resp = await fetch(url);
			const tours = await resp.json();
			setIsLoading(false);
			setTours(tours);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
		<main>
			<Tours />
		</main>
	);
}

export default App;
