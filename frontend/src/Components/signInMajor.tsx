import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { SubHeading } from "./SubHeading"
import { TopHeading } from "./TopHeading"
import { useNavigate } from "react-router-dom"
import type { SignInInput} from "@kartikashishtha/zod-medium"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const SignInMajor = () => {
    const navigate = useNavigate() ;
    const [inputs , setInputs] = useState<SignInInput>({
        email : "" ,
        password : ""
    });
    const onClick = async () => {
        if(inputs.email == "" || inputs.password == ""){
            alert("please fill all the details") ;
            return ;
        }
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin` , inputs) ;
            const jwt = response.data.token ;
            localStorage.setItem("token" , jwt) ;
            navigate("/blogs") ;
        }
        catch(e){
            alert("Error in signing in") ;
        }
    }
    return (
        <div className="w-120 h-90 rounded-lg">
            <TopHeading heading = "Sign Into Account"/>
            <SubHeading title = "Don't have an Account?" buttontext="SignUp" navigateTo="/signup"></SubHeading>
            <InputBox title="Email" placeholder="m@example.com" type="text" onchange={(e)=>{
                setInputs({
                    ...inputs ,
                    email : e.target.value
                });
            }}></InputBox>
            <InputBox title="Password" placeholder="Enter Your Password" type="password" onchange={(e)=>{
                setInputs({
                    ...inputs ,
                    password : e.target.value
                })
            }}></InputBox>
            <Button text = "Sign In" onClick={onClick}></Button>
        </div>
    )
}