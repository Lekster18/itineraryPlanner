const Login = () => {
  return (
    <div>
      <form action="">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="Username" required />
        </div>
        <div>
          <input type="text" placeholder="Password" required />
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
