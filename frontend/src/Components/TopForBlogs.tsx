import { useNavigate } from "react-router-dom";

export const TopForBlogs = () => {
    const navigate = useNavigate() ;
    return (
        <div className="mt-5 relative mb-10">
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-200 z-0"></div>
            <div className="flex justify-start relative z-10 font-normal text-md text-gray-600 opacity-95 ">
                <div className="flex items-center justify-center w-10 mr-4 font-thin text-3xl text-gray-400 opacity-95 
                hover:text-black cursor-pointer border-b-2 border-transparent hover:border-black pb-3"  onClick={() => {
                        navigate("/create") ;
                    }}>+</div>
                <div className="flex items-center pb-3 mr-6 border-b-2 border-black cursor-pointer text-black">
                   For you
                </div>
                <div className="flex items-center pb-3 mr-6 border-b-2 border-transparent hover:border-black cursor-pointer hover:text-black">
                    Following
                </div>
            </div>
        </div>
    )
}