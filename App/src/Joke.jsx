import { useState, useEffect } from 'react';

export const Joke = () => {
	const [joke, setJoke] = useState(null);
	const [error, setError] = useState(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const fetchJoke = async () => {
			try {
	            const response = await fetch('/api/joke');

			    if (!response.ok) throw new Error('Failed to fetch joke');
		
			    const data = await response.json();
			    setJoke(data);
		    } catch (err) {
				setError(err.message);
			}
		}

		fetchJoke();
	}, [])

	if (error) {
		console.error(error);
		return <div>error in retrieving joke</div>;
	}

	return (
		<>
			<h2>Joke</h2>
			<p>{ joke.setup }</p>
			<button onClick={ () => setOpen(!open) }>{open ? "Hide Answer" : "Show Answer"}</button>
			<div style={ { maxHeight : open ? '500px' : '0px' } }>
				<p>{ joke.punchline }</p>
			</div>
		</>
	)
}
