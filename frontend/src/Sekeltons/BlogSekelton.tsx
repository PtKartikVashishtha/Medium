import { useNavigate } from "react-router-dom";

export const BlogSkelton = () => {
    const navigate = useNavigate() ;
    return <div role="status" className="animate-plus">
        <div className="flex justify-between pb-1 border-b-2 border-gray-100"> 
            <div className="flex justify-start">
                <div className="text-4xl font-black font-serif mt-3 ml-6 cursor-pointer" onClick={() => {
                    navigate("/blogs")
                }}>Medium</div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500 ml-6 mt-2" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    <input className="ml-6 mt-3 h-9 p-1 pl-10 w-70 rounded-full bg-slate-100 text-black text-shadow-sm font-light" placeholder="Search..." type="text"></input>
                </div>
            </div>
            <div className="flex justify-end items-center mt-2 mr-5 ">
                <div className="flex cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square mr-2" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                    <div className="text-gray-600 text-shadow-sm font-lg mr-10 font-thin hover:text-black" onClick={() => {
                        navigate("/create") ;
                    }}>Write</div>
                </div>
                <AppBarMinor authorName={props.authorName}></AppBarMinor>
            </div>
        </div>
    </div>
}