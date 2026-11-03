import { useState } from "react";

function SignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    async function handleSubmit(e) {

        e.preventDefault();

        const response = await fetch(
            "http://localhost:3000/signin", {
            method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: username,
                    password: password
                })
            }
        );

        const data = await response.json();

        console.log(data);

    }

    return (
        <>  
            <h1>Sign In!!</h1>


            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <br /> <br />

                <input 
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /> <br />

                <button> Sign in!</button>
            </form>
        </>
    );  
}

export default SignIn;