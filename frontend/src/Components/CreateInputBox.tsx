import { useState } from "react"
import { Sticker } from "./Sticker";

interface CreateInputBoxProps {
    text : string ,
    Placeholder : string ,
    font : string ,
    onChange : (val : string) => void
}

export const CreateInputBox = (props : CreateInputBoxProps) => {
    const [hovering , setHovering] = useState(false) ;
    return (
        <div className="relative flex justify-start" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            {
                hovering ? <div className="mr-4 flex items-center"><Sticker></Sticker></div> : <div className="opacity-0 mr-4">
                <Sticker></Sticker></div>
            }
            <textarea rows={1} onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
            }} onChange={(e) => props.onChange(e.target.value)} 
            className={`text-${props.text} font-${props.font} placeholder-gray-400 placeholder:font-light
            font-display pl-3 pt-2 focus:outline-none focus:ring-0 hover:border-l-2 border-gray-400 resize-none overflow-hidden w-full mx-auto px-4 mr-80`} 
            placeholder={props.Placeholder}/>
        </div>
    )
}