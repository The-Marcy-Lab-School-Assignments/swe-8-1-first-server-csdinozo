import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Dice = () => {
    const { quantity } = useParams();
    const [rolls, setRolls] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRolls = async () => {
            try {
                const validQuantity = !isNaN(Number(quantity)) && Number(quantity) > 0 ? Number(quantity) : 1;

                const response = await fetch(`/api/rollDice?quantity=${validQuantity}`);
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
                {rolls ? rolls.map((r, i) => <li key={i}>Roll {i + 1}: {r}</li>) : <p>Rolling...</p>}
            </ul>
        </>
    );
};
