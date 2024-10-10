import  { useState } from 'react';

const Login = () => {
    const [credentials, setCredentials] = useState({
        usernameOrEmail: '',
        password: '',
        rememberMe: false
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!credentials.usernameOrEmail) newErrors.usernameOrEmail = "Email or Username is required.";
        if (!credentials.password) newErrors.password = "Password is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        
        setTimeout(() => {
            alert('Login Successful!');
            setLoading(false);
            setCredentials({ usernameOrEmail: '', password: '', rememberMe: false });
        }, 2000);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCredentials({ ...credentials, [name]: type === 'checkbox' ? checked : value });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Login</h2>
            <div>
                <label htmlFor="usernameOrEmail">Email or Username:</label>
                <input type="text" name="usernameOrEmail" value={credentials.usernameOrEmail} onChange={handleChange} />
                {errors.usernameOrEmail && <span className="error">{errors.usernameOrEmail}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div>
                <label>
                    <input type="checkbox" name="rememberMe" checked={credentials.rememberMe} onChange={handleChange} />
                    Remember Me
                </label>
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
};

export default Login;
