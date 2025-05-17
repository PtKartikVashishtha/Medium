import { useState } from "react"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { SubHeading } from "./SubHeading"
import { TopHeading } from "./TopHeading"
import type { SingUpInput } from "@kartikashishtha/zod-medium"
import axios from "axios" ;
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom" ;

export const SignUpMajor = () => {
    const navigate = useNavigate() ;
    const [inputs , setInputs] = useState<SingUpInput>({
        name : "" ,
        email : "" ,
        password : ""
    }) ;
    const onClick = async () => {
        if(inputs.name == "" || inputs.email == "" || inputs.password == ""){
            alert("please fill all the fields") ;
            return ;
        }
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup` , inputs) ;
            const jwt = response.data.token ;
            localStorage.setItem("token" , jwt) ;
            navigate("/blogs") ;
        }
        catch(e){
            alert("Error in signing up") ;
        }
    }
    return (
        <div className="w-120 h-110 rounded-lg">
            <TopHeading heading = "Create An Account"/>
            <SubHeading title = "Already have an Account?" buttontext="Login" navigateTo="/signin"></SubHeading>
            <InputBox title="Username" placeholder="Enter Your Username" type="text" onchange={(e) => {
                setInputs({
                    ...inputs ,
                    name : e.target.value
                })
            }}></InputBox>
            <InputBox title="Email" placeholder="m@example.com" type="text" onchange={(e) => {
                setInputs({
                    ...inputs ,
                    email : e.target.value
                })}}></InputBox>
            <InputBox title="Password" placeholder="Enter Your Password" type="password" onchange={(e) => {
                setInputs({
                    ...inputs ,
                    password : e.target.value
                })}}></InputBox>
            <Button text = "Sign Up" onClick={onClick}></Button>
        </div>
    )
}