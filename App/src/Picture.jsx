import { useState, useEffect } from 'react';

export const Picture = () => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch ('/api/picture');

                if (!response.ok) throw new Error('Failed to fetch picture');

                const data = await response.json();
                setImage(data);
            }
            catch (err) {
                setError(err.message);
            }
        }

        fetchImage();
    }, [])
    
    if (error) {
        console.error(error);
        return <div>error in retrieving image</div>;
    }

    return (
        <>
            <h2>Picture</h2>
            { image ? <img src={ image.src }></img> : <p>Loading...</p> }
        </>
    )
}