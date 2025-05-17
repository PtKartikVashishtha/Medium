import { useNavigate } from "react-router-dom";

interface postsRenderBulkProps {
    blogId : string ,
    authorName : string ,
    date : string ,
    title : string ,
    content : string    
}

function countWords(str: string): number {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

export const PostsRenderBulk = (props : postsRenderBulkProps) => {
    const navigate = useNavigate() ;
    const onClick = () => {
        navigate("/blog/"+props.blogId) ;
    }
    let minutes = countWords(props.content) ;
    minutes = Math.ceil(minutes / 80) ; 
    return (
        <div className="pb-8 border-b-2 border-gray-200 mt-8">
            <div className="flex mb-2 items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 text-white flex justify-center items-center text-2xl hover:text-white hover:bg-black">
                    {props.authorName[0]}</div>
                <div className="font-md text-black ml-2 text-shadow-sm hover:text-gray-500">{props.authorName}</div>
                <div className="font-md text-gray-500 ml-3 hover:text-black">{props.date}</div>
            </div>
            <div className="cursor-pointer" onClick={onClick}>
                <div className="font-bold text-3xl max-w-200 mb-3">{props.title}</div>
                <div className="text-md text-gray-700 max-w-200 line-clamp-2 mb-5">{props.content}</div>
            </div>
            <div className="h-6 w-18 rounded-full bg-gray-200 opacity-80 text-black flex justify-center items-center text-xs hover:text-white hover:bg-black">
                {minutes} min Read</div>
        </div>
    )
}