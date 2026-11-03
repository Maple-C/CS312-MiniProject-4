import { useState } from "react";

function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>  
            <h1>Sign Up!!</h1>


            <form>
                <input 
                    type="text"
                    placeholder="Username"
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

                <button> Sign up!</button>
            </form>
        </>
    );  
}

export default SignUp;