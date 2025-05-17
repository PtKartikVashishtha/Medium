import bellIcon from '../assets/bell.svg'; 

interface appBarMinorProps {
    authorName : string 
}

export const AppBarMinor = (props : appBarMinorProps) => {
    return (
        <div className="flex justify-between items-center w-25">
            <img src={bellIcon} alt="Bell Icon" className="w-6 h-6 cursor-pointer " />
            <div className="h-9 w-9 rounded-full bg-gray-300 text-white flex justify-center items-center text-xl 
            cursor-pointer hover:text-white hover:bg-black">
                {props.authorName[0]}
            </div>
        </div>
    )
}