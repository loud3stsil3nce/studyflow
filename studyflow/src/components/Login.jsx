import { Input, NumberInputStepper } from "@chakra-ui/react";
import { useState, useEffect } from "react";



const Login = () => {

        const [isLogin, setIsLogin] = useState(true);

        const [inputs, setInputs] = useState({
            email:'',
            password:'',

        });
    return (<>
            <form action="POST">
            <input className="unBox" placeholder="email" type='email' value={inputs.email} 
            onChange={(e) => setInputs({...inputs,email:e.target.value})}></input>
           
            <input className="pwBox" placeholder="password" type='password' value={inputs.password} 
            onChange={(e) => setInputs({...inputs,password:e.target.value})}></input>


            <button className="submit signIn" >SiGgn In</button>    
            </form>
    </>)

}


export default Login