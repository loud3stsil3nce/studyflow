import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react";
import useSignUpWithEmailAndPassword from "../hooks/useSignUpWithEmailAndPassword";
import React, {useEffect,useState} from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";






    function Signup() {

        const [email, setEmail] = useState('')
        const [password,setPassword]=useState('')

        const { loading, error, signup } = useSignUpWithEmailAndPassword
    
        async function submit(e){
            e.preventDefault();

            try{

                await axios.post("http://localhost:5177/RegisterPage", {
                    email,password
                })
                .then(res=>{
                    if(res.data="exist"){
                        alert("User already exists")
                    
                    }
                    else if(res.data="doesnotexist"){
                        history("/productivity",{state:{id:email}}) 
                        }
                })
                .catch(e=>{
                    alert("wrong details")
                    console.log(e)
                })
            } catch(e){
                console.log(e)

            }
        }


        return (
            <>
            <div className="authBox">
                <form className="box1" action="POST">
                
                    <input className="unBox" placeholder="email" type='email' name="" id="" 
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <input className="pwBox" placeholder="password" type='password' name="" id=""
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="submit" onClick={submit}/>
                {/*     <button className="submit sinUp" >Sign Up</button>   */}  
                
                </form>
                <br />
                <p> OR </p>
                <br />
                <Link to="/auth">Sign In</Link>
            </div>
                
                </>
        )

}


export default Signup