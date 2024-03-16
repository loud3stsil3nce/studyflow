import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import useSignUpWithEmailAndPassword from "../hooks/useSignUpWithEmailAndPassword";







    const Signup = () => {

        const [inputs, setInputs] = useState({
            email:'',
            password:'',
            confirmPassword:''
        });

        const { loading, error, signup } = useSignUpWithEmailAndPassword
    
    return (<>
            <input className="unBox" placeholder="email" type='email' value={inputs.email} 
            onChange={(e) => setInputs({...inputs,email: e.target.value})}></input>
    
            <input className="pwBox" placeholder="password" type='password' value={inputs.password} 
            onChange={(e) => setInputs({...inputs,password: e.target.value})}></input>
    
            <input className="pwBox" placeholder="confirm password" type='password' value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}></input>
            <div>
                {error && (
                    <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                        <AlertIcon fontSize={12}/>
                        {error.message}
                    </Alert>
                )}
            </div>
            <Button className="submit signIn" 
            isLoading={loading}
            onClick={() => signup(inputs)}>Sign Up</Button>
    </>)

}


export default Signup