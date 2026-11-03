import { useState } from "react";

function SignIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>  
            <h1>Sign In!!</h1>


            <form>
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