import { useRef } from 'react';


const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const usernameErrorRef = useRef();
    const passwordErrorRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

    
        usernameErrorRef.current.textContent = '';
        passwordErrorRef.current.textContent = '';

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        
        const usernameError = username.length < 3 ? "Username must be at least 3 characters." : '';
        const passwordError = password.length < 6 ? "Password must be at least 6 characters." : '';

        usernameErrorRef.current.textContent = usernameError;
        passwordErrorRef.current.textContent = passwordError;

        
        if (usernameError || passwordError) return;

        console.log('Username:', username);
        console.log('Password:', password);

        
        usernameRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    ref={usernameRef}
                    required
                    aria-describedby="username-error"
                />
                <span id="username-error" className="error" ref={usernameErrorRef}></span>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    ref={passwordRef}
                    required
                    aria-describedby="password-error"
                />
                <span id="password-error" className="error" ref={passwordErrorRef}></span>
            </div>
            <button type="submit" className="button">
                Log In
            </button>
        </form>
    );
}

export default Login;
