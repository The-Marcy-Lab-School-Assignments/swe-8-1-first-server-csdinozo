import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Dice = () => {
    const [searchParams] = useSearchParams();
    const quantity = parseInt(searchParams.get('quantity')) || 1;
    const [rolls, setRolls] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRolls = async () => {
            try {
                const response = await fetch(`/api/rollDie?quantity=${quantity}`);
                if (!response.ok) throw new Error('Failed to roll dice');

                const data = await response.json();
                setRolls(data.rolls);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRolls();
    }, [quantity]);

    if (error) {
        console.error(error);
        return <div>Error in rolling dice: {error}</div>;
    }

    return (
        <>
            <h2>{Number(quantity) > 1 ? 'Dice Results' : 'Die Results'}</h2>
            <ul>
                {rolls ? rolls.map((r, i) => <li key={ i }>Roll { i + 1 }: { r }</li>) : <p>Rolling...</p>}
            </ul>
        </>
    );
};
