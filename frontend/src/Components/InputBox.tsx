interface inputBoxProps {
    title : string ,
    placeholder : string ,
    type : string ,
    onchange : (e : React.ChangeEvent<HTMLInputElement>) => void ,
}
export const InputBox = (props : inputBoxProps) => {
    return (
        <div>
            <div className="text-md font-bold text-black font-sans font-semibold ml-5 mr-4 mb-3 mt-4">{props.title}</div>
            <input type = {props.type} placeholder = {props.placeholder} 
            className="border-solid rounded-lg border-sm border-gray-300 border-1 placeholder-gray-500 ml-4 p-2 text-md 
            font-normal font-serif w-100 pl-3 opacity-80" onChange={props.onchange}>
            </input>
        </div>
    )
} 