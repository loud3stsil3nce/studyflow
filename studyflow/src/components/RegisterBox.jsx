
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const RegisterBox = () => {

    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });

    const handleAuth = () => {
        if (!inputs.email || !inputs.password || !inputs.confirmPassword ) {
            alert("Please fill in all fields.");
            return;
        }

        navigate("/")
    }

    return <div className="registerbox">
<>
        <form className="registerform">
            <div className="boxContainer">
                <h1>Register</h1>
                <input className="unBox" placeholder="email" type='email' value={inputs.email} 
            onChange={(e) => setInputs({...inputs,email:e.target.value})}></input>
                <input className="pwBox" placeholder="password" type='password' value={inputs.password} 
            onChange={(e) => setInputs({...inputs,password:e.target.value})}></input>
                <input className="pwBox" placeholder="confirm password" type='password' value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}></input>

                <button className="submit signIn" onClick={handleAuth}>Sign Up</button>
                <h1>Have an Account Already?</h1>
                    <a className="loginlink" href="/login">
                    Login
                    </a>
            </div>


        </form>
        </>
        </div>
        
    
       
}

export default RegisterBox