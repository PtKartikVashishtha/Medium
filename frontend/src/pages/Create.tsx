import { CreationBox } from "../Components/CreationBOx"
import { MainBar } from "../Components/MainBar"
import { usePostBlog } from "../hooks"

export const Create = () => {
    const { name, postBlog , loading } = usePostBlog();
    if(loading){
        return <div>
            Loading...
        </div>
    }
    return (
        <div>
            <MainBar authorname={name} onClick={postBlog}></MainBar>
            <div className="mt-20 ml-50">
                <CreationBox></CreationBox>
            </div>
        </div>
    )
}