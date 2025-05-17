import { Post } from "../Components/Post"
import { AppBar } from "../Components/AppBar";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

function generateRandomDescription(): string {
    const roles = [
        "writer", "developer", "designer", "educator", "artist", "thinker", "explorer"
    ];

    const passions = [
        "share knowledge", "solve problems", "design experiences", "tell stories",
        "inspire others", "teach concepts", "build solutions", "spark creativity"
    ];

    const adjectives = [
        "passionate", "curious", "dedicated", "thoughtful", "creative", "driven"
    ];

    const impacts = [
        "make a difference", "ignite change", "empower minds", "connect people",
        "create impact", "build community"
    ];

    const templates = [
        "A {adj} {role} who loves to {passion} and {impact} through their work.",
        "{adj} about being a {role}, always striving to {passion} and {impact}.",
        "As a {adj} {role}, I aim to {passion} and {impact} with every project."
    ];

    const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    const template = pick(templates)
        .replace("{adj}", pick(adjectives))
        .replace("{role}", pick(roles))
        .replace("{passion}", pick(passions))
        .replace("{impact}", pick(impacts));

    return template;
}

const date = (timeStamp : string) => {
        const date = new Date(timeStamp);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
} 

export const Blog = () => {
    const {id} = useParams<{id:string}>();
    const {loading , blog , name} = useBlog(id || "") ;
    if(loading){
        return <div>
            Loading...
        </div>
    }
    return <div>
        <AppBar authorName={name}></AppBar>
        <Post title={blog.title} content={blog.content} authorDescription={generateRandomDescription()} authorName={blog.authorName}
            Date={date(blog.createdAt)} />
        <div className="mb-20"></div>
    </div>
}