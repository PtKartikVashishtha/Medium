import { useNavigate } from "react-router-dom"

interface subHeadingProps {
    title : string ,
    buttontext : string 
    navigateTo : string
}

export const SubHeading = (props : subHeadingProps) => {
    const navigate = useNavigate() ;
    const goto = () =>{
        navigate(props.navigateTo) ;
    }
    return (
        <div className="ml-22 mt-2 mb-6 text-gray-600 text-lg flex">
            <div>{props.title}</div>
            <button className="underline cursor-pointer hover:text-gray-900 ml-1" onClick={goto}>{props.buttontext}</button>
        </div>
    )
}