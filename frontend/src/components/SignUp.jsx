import { useState } from "react";

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, SetName] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();
        await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: username,
                name: name,
                password: password
            })
        }); 

        setUsername("");
        setPassword("");
    }
    
    return (
        <>
            <h1>Sign Up!!</h1>  
            
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
                <input
                    type="text"
                    placeholder="Enter your name"   
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                />
                <br /> <br />
                <button> Sign up!</button>
            </form>
        </>
    );  
}

export default SignUp;