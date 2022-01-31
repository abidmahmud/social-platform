const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({ email: '', password: '' });

const handleEmailChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEmail(value);
}

const handlePasswordChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setPassword(value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "1234") {
        // props.history.push('/');
    }
    else {
        if (email === '') setErrors({ email: 'This field must be required', password: '' });
        else if (password === "") setErrors({ email: '', password: 'This field must be required' });
        else setErrors({ email: '', password: 'Incorrect username or password' });
    }
}

<form>
    <div className="form-group">
        <label htmlFor="email">Email address</label>

        <Input error={errors.email} type="text" id="email" value={email} handleChange={handleEmailChange} />

    </div>

    <div className="form-group">
        <label htmlFor="password">Password</label>

        <Input error={errors.password} type="password" id="password" value={password} handleChange={handlePasswordChange} />

    </div>

    <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Submit
    </button>
</form>