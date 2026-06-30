function Login() {
    return (
        <div>
            <h1> Login page</h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input className="w-50 h-5 p-5 placeholder:text-red-300 ring-2 ring-blue-500 rounded-full" type="text" id="username" name="username" placeholder="Enter your username"/>
            </div>
        </div>
    )
}

export default Login