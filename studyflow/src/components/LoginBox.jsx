
import {useState} from 'react';



export default function LoginBox() {
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });

    const handleAuth = () => {
        console.log("inputs", inputs);
    }

    return (<div className="loginbox">
<>
        <form className="loginform">
        <div className="boxContainer">
            <h1>Login</h1>
            <input className="unBox" placeholder="email" type='email' value={inputs.email} 
            onChange={(e) => setInputs({...inputs,email:e.target.value})}></input>
           
            <input className="pwBox" placeholder="password" type='password' value={inputs.password} 
            onChange={(e) => setInputs({...inputs,password:e.target.value})}></input>


            <button className="submit signIn" onClick={handleAuth}>Sign In</button>
            <h1>Make an Account</h1>
            <li className="registerlink"><a href="/register">Register</a></li>  

        </div>
        </form>
</>
</div>
    )
}