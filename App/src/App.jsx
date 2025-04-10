import { Link } from 'react-router-dom';

function App() {
    return (
        <>
            <main>
                <h1>My First API</h1>
                <p>Welcome to my first API! This is a simple API that returns a random joke, can roll dice for you, and can provide you with a nice picture. Enjoy!</p>
                <ul>
                    <li>Visit <a href="/api/joke">/api/joke</a> for a funny <a href="/joke">joke</a></li>
                    <li>Visit <a href="/api/picture">/api/picture</a> to see a nice <a href="/picture">picture</a></li>
                    <li>Visit <a href="/api/rollDie">/api/rollDie</a> to roll <a href="/rollDie">a</a> die. (Try <a href="/api/rollDie?quantity=3">/api/rollDie?quantity=3</a> to roll <a href="/rollDie?quantity=3">multiple</a> dice!)</li>
                </ul>
            </main>
        </>
    )
}

    export default App
