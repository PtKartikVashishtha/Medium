import { AuthorPart } from "./AuthorPart"
import { PostPart } from "./PostPart"

interface postProps {
    title : string ,
    content : string ,
    authorName : string ,
    authorDescription : string ,
    Date : string 
}
export const Post = (props : postProps) => {
    return (
        <div className="grid grid-cols-3 mt-20 flex">
            <div className="col-span-2 ml-10">
                <PostPart title={props.title} content={props.content} date={props.Date} />
            </div>
            <div className="col-span-1 ml-3">
                <AuthorPart authorName={props.authorName} authorDescription={props.authorDescription} />
            </div>
        </div>
    )
}