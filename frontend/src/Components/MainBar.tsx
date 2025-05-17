import { useNavigate } from "react-router-dom"
import { AppBarMinor } from "./AppBarMinor"

interface mainBarprops {
    authorname : string
    onClick : () => void
}
export const MainBar = (props : mainBarprops) => {
    const navigate = useNavigate() ;
    return (
        <div className="flex justify-between border-b-2 border-transparent pb-2 mr-5 ml-10">
            <div className="flex justify-start mt-4">
                <div className="text-4xl font-black font-serif cursor-pointer" onClick={() => {
                    navigate("/blogs")
                }}>Medium</div>
                <div className="flex justify-start mt-2 itmes-center">
                    <div className="text-shadow-xs text-black ml-6  text-md font-display">Draft in {props.authorname.split(" ")[0]}</div>
                    <div className="ml-8 text-md font-display text-gray-500 text-shadow-xs cursor-pointer hover:text-black">Saved</div>
                </div>
            </div>
            <div className="flex justify-start mt-4 items-center mr-6 ">
                <button className="bg-green-700 text-white p-1 w-20 h-8 rounded-full mr-9 hover:bg-green-900 cursor-pointer" 
                onClick={props.onClick}>Publish</button>
                <AppBarMinor authorName={props.authorname}></AppBarMinor>
            </div>
        </div>
    )
}