
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const LoginBox = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });

    const handleAuth = () => {
        if (!inputs.email || !inputs.password) {
            alert("Please fill in all fields.");
            return;
        }

        navigate("/")
    }

    return (
    
    <div className="loginbox">
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

export default LoginBox;