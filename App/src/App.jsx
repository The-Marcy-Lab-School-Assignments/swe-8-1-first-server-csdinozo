function App() {
    return (
        <>
            <main>
                <h1>My First API</h1>
                <p>Welcome to my first API! This is a simple API that returns a random joke, can roll dice for you, and can provide you with a nice picture. Enjoy!</p>
                <ul>
                    <li>Visit <a href="/joke">/joke</a> for a funny joke</li>
                    <li>Visit <a href="/picture">/picture</a> to see a nice picture</li>
                    <li>Visit <a href="/rollDie">/rollDie</a> to roll a die. (Try <a href="/rollDie?quantity=3">/rollDie?quantity=3</a> to roll multiple dice!)</li>
                </ul>
            </main>
        </>
    )
}

    export default App
