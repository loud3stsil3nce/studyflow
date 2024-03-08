export default function LoginBox() {
    return <div className="loginbox">
<>
        <form className="loginform">
        <div className="boxContainer">
            <h1>Login</h1>
            <input class="unBox" placeholder="username"></input>
            <input class="pwBox" placeholder="password"></input>
            <button className="submit signIn">Sign In</button>
            <h1>Make an Account</h1>
            <li class="registerlink"><a href="/register">Register</a></li>  

        </div>
        </form>
</>
</div>
}