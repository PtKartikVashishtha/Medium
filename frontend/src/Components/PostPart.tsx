interface PostParstProps {
    title: string;
    content: string;
    date: string;
}

export const PostPart = (props: PostParstProps) => {
    return (
        <div>
            <div className="text-5xl leading-14 font-bold font-display text-black mb-5">{props.title}</div>
            <div className="text-lg text-gray-700 opacity-80 mb-6">Posted on {props.date}</div>
            <div className="text-md text-gray-800 tracking-wider opacity-95">{props.content}</div>
        </div>
    )
}