import { Input, NumberInputStepper } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
        const history=useNavigate();
        const [isLogin, setIsLogin] = useState(true);

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        async function submit(e){
            e.preventDefault();

            try{

                await axios.post("http://localhost:5177/auth", {
                    email,password
                })
                .then(res=>{
                    if(res.data="exist"){
                    history("http://localhost:5177/productivity",{state:{id:email}})
                    }
                    else if(res.data="doesnotexist"){
                        alert("User not signed up")
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
           {/*  <button className="submit signIn" >Sign In</button>  */}   
        
        </form>
        <br />
        <p> OR </p>
        <br />
        <Link to="/RegisterPage">Sign Up</Link>
        </div>
            
            </>
    )

}


export default Login