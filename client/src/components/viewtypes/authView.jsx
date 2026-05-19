import { useState} from 'react';
import axios from 'axios';

export default function AuthView({curState, setCurState, curUser, setCurUser}) {
    switch(curState.spec) {
        case 'main':
            return <WelcomeAuth
                curUser={curUser}
                setCurState={setCurState}
                />
        case 'login':
            return <Login
                setCurUser={setCurUser}
                setCurState={setCurState}
                />
        case 'register':
            return <Register
                setCurState={setCurState}
                />
        default:
            throw new Error("Unkown subview in AuthView", curState.spec);
    }
}

function WelcomeAuth({curUser, setCurUser, setCurState}) {
    function handleClick(btn) {
        switch(btn) {
            case 'login':
                setCurState({curView: 'auth', spec: 'login'});
                break;
            case 'register':
                setCurState({curView: 'auth', spec: 'register'});
                break;
            case 'continue':
                setCurState({curView: 'main', spec: null});
                break;
            case 'logout':
                setCurUser(null);
                setCurState({curView: 'main', spec: null});
                break;
                //Do logout axios call
            default: 
                throw new Error("Unrecognized buttontype in WelcomeAuth");
        }
    }

    let greeting;
    let userName = curUser ? curUser.fName : 'Guest';
    let curOptions;
    if (curUser) {
        greeting = "Welcome! Get Started Saving Projects: ";
        curOptions = 
            <>
                <button id="welcome-login-btn" onClick={() => handleClick('login')}>
                    Login
                </button>
                <button id="welcome-register-btn" onClick={() => handleClick('register')}>
                    Register New
                </button>
            </>
    }
    else {
        greeting = `Hey ${userName}, We Missed You!`;
        curOptions = 
            <>
                <button id="welcome-login-btn" onClick={() => handleClick('logout')}>
                    Log Out
                </button>
            </>
    }
    return (
        <div id="welcome-auth">
            <h1 id="welcome-greeting">
                {greeting}
            </h1>
            <div id="welcome-options">
                {curOptions}
            </div>
            <h1>
                Or
            </h1>
            <button id="continue-as-btn" onClick={() => handleClick('continue')}>
                Continue as {userName}
            </button>
        </div>
    )
}

function Login({curUser, setCurUser, setCurState}) {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [errors, setErrors] = useState({});

    async function handleSubmit() {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email field required";
        }
        if (!pw.trim()) {
            newErrors.password = "Password field required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const loginWorked = await api.post("/login", {email, pw});
            localStorage.setItem("token", loginWorked.data.curToken);
            setCurUser(loginWorked.data.user);
            setCurState({curView: "main", spec: null});
        }
        catch (err) {
            setErrors({serverRequest: err.response?.data?.error || "Server not responding in AuthView during Login"});
        }
    }
    return (
        <div id="login-view">
            <h2>
                Login
            </h2>
            <input
                type="text"
                id="user-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
            />
            {errors.email && <p className="form-error">{errors.email}</p>}

            <input
                type="password"
                id="user-password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder="Password..."
            />
            {errors.password && <p className="form-error">{errors.password}</p>}

            <button id="submit-login" onClick={handleSubmit}>
                Submit
            </button>
            {errors.serverRequest && <p className="form-error">{errors.serverRequest}</p>}
        </div>
    )
}

function Register(setCurState) {

}