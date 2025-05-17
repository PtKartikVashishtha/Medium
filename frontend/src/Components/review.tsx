interface ReviewProps {
    review : string ,
    authorName : string ,
    designation : string
}

export const Review = (props : ReviewProps) => {
    return (
        <div className="bg-gray-100 max-w-xl">
            <div className="text-2xl font-bold tracking-wide mb-3">"{props.review}"</div>
            <div className="text-md font-semibold mb-1">{props.authorName}</div>
            <div className="text-sm mb-2 text-gray-400">{props.designation}</div>
        </div>
    )
}