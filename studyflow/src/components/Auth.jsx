
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import { Box } from '@chakra-ui/react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });


    return (
    
    <div className="loginbox">
<>
        <form className="loginform">
        <div className="boxContainer">

            {isLogin ? <Login /> : <Signup />}

            <h1>OR</h1>
            
            <div>
                <div>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                </div>
                <Box onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign up" : "Log in"}
                </Box>
            </div>

        </div>
        </form>
</>
</div>
    )
}

export default Auth;