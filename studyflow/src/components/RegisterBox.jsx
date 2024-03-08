import { Link } from "react-router-dom"

export default function RegisterBox() {
    return <div className="registerbox">
<>
        <form className="registerform">
            <div class="boxContainer">
                <h1>Register</h1>
                <input class="unBox" placeholder="username"></input>
                <input class="pwBox" placeholder="password"></input>
                <input class="pwBox" placeholder="confirm password"></input>

                <button className="submit signIn">Sign Up</button>
                <h1>Have an Account Already?</h1>
                    <a class="loginlink" href="/login">
                    Login
                    </a>
            </div>


        </form>
        </>
        </div>
        
    
       
}