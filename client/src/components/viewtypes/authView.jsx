import { useState} from 'react';
import api from '../../api.js';

export default function AuthView({curState, setCurState, curUser, setCurUser}) {
    switch(curState.spec) {
        case 'main':
            return <WelcomeAuth
                curUser={curUser}
                setCurUser={setCurUser}
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
                setCurUser={setCurUser}
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
        greeting = `Hey ${userName}, What would you like?`;
        curOptions = 
            <>
                <button id="welcome-login-btn" onClick={() => handleClick('logout')}>
                    Log Out
                </button>
            </>
    }
    else {
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

function Login({setCurUser, setCurState}) {
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
            //Set local token as the JWT
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

function Register({setCurState, setCurUser}) {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pw1, setPw1] = useState("");
    const [pw2, setPw2] = useState("");
    const [errors, setErrors] = useState({});

    async function handleSubmit() {
        const newErrors = {};

        const validEmail = /^\w+@\w+\.\w+/;
        //For dashes or space separations: 123-456-7890 or 123 456 7890
        const validPNumberWFormat = /^\d{3}[\-\s]\d{3}[\-\s]\d{4}$/;
        //For if they enter like 1234567890
        const validPNumberBasic = /^\d{10}$/;

        if (!first.trim()) {
            newErrors.first = "First Name required";
        }
        if (!last.trim()) {
            newErrors.last = "Last Name required";
        }
        if (!email.trim()) {
            newErrors.email = "Email required";
        }
        else if (!email.trim().match(validEmail)) {
            newErrors.email = "Invalid Email"
        }
        if (!pw1.trim() || !pw2.trim()) {
            newErrors.passwords = "Password fields required";
        }
        else if (pw1.trim() !== pw2.trim()) {
            newErrors.passwords = "Passwords do not match";
        }
        //Tested in both client/server
        if (phone) {
            if (!validPNumberWFormat.test(phone) && !validPNumberBasic.test(phone)) {
                newErrors.phone = "Invalid phone number";
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const regWorked = await api.post("/register", {
                fName: first,
                lName: last,
                email: email,
                phNumber: phone,
                pw: pw1
            });

            localStorage.setItem("token", regWorked.data.curToken);

            setCurUser(regWorked.data.user);
            setCurState({curView: 'main', spec: null});
        }
        catch (err) {
            setErrors({serverRequest: err.response?.data?.error || "Server not responding in: AuthView during register"});
        }
    }

    return (
        <div id="register-view">
            <h2>
                Register New User
            </h2>
            <h3>
                First name
                <span className="required">
                    *
                </span>
            </h3>
            <input 
                id="first-name"
                type="text"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
            />
            {errors.first && <p className="form-error">{errors.first}</p>}

            <h3>
                Last name
                <span className="required">
                    *
                </span>
            </h3>
            <input 
                id="last-name"
                type="text"
                value={last}
                onChange={(e) => setLast(e.target.value)}
            />
            {errors.last && <p className="form-error">{errors.last}</p>}

            <h3>
                Email
                <span className="required">
                    *
                </span>
            </h3>
            <input 
                id="user-email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="form-error">{errors.email}</p>}

            <h3>
                Phone #
                <span className="not-required">
                    *
                </span>
            </h3>
            <input 
                id="display-name"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength="13"
            />
            {errors.phone && <p className="form-error">{errors.phone}</p>}

            <h3>
                Password
                <span className="required">
                    *
                </span>
            </h3>
            <input 
                id="user-pw1"
                type="password"
                value={pw1}
                onChange={(e) => setPw1(e.target.value)}
            />

            <h3>
                Confirm Password
                <span className="required">
                    *
                </span>
            </h3>
            <input 
                id="user-pw2"
                type="password"
                value={pw2}
                onChange={(e) => setPw2(e.target.value)}
            />
            {errors.passwords && <p className="form-error">{errors.passwords}</p>}

            <button id="submit-register" onClick={() => handleSubmit()}>
                Submit
            </button>
            {errors.serverRequest && <p className="form-error">{errors.serverRequest}</p>}
        </div>
    )
}
