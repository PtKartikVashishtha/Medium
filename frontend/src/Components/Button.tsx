
interface buttonProps {
    text : string
    onClick : () => void
}

export const Button = (props : buttonProps) => {
    return (
        <button className="bg-black text-white font-medium p-2 rounded-lg text-center mt-5 ml-4 w-100 
        font-serif cursor-pointer hover:bg-gray-700" onClick={props.onClick}>
            {props.text}
        </button>
    )
}