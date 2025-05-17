import { PostsRenderBulk } from "../Components/PostsRenderBulk"
import { TopForBlogs } from "../Components/TopForBlogs"
import { AppBar } from "../Components/AppBar"
import { useBlogs } from "../hooks"

interface blogType {
    id : string ,
    title : string ,
    content : string , 
    published : boolean ,
    authorId : string ,
    createdAt : string ,
    authorName : string
}

export const Blogs = () => {
    const {loading ,name ,blogs} = useBlogs();
    
    if(loading){
        return (
            <div>Loading...</div>
        )
    }
    const date = (timeStamp : string) => {
        const date = new Date(timeStamp);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    } 
    return (
    <div>
        <AppBar authorName={name}></AppBar>
        <div className="ml-75 mr-75 mt-7">
            <TopForBlogs></TopForBlogs>
            {
                blogs.map((blog : blogType) => {
                    return <PostsRenderBulk blogId={blog.id} title={blog.title}  content = {blog.content} authorName={blog.authorName} date={date(blog.createdAt)} />
                })
            }
        </div>
    </div> )
}