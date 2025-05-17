interface AuthorPartProps {
    authorName: string;
    authorDescription: string;
}

export const AuthorPart = (props : AuthorPartProps) => {
    return (
        <div className="mr-15 mt-3">
            <div className="text-2xl text-gray-500 font-medium mb-4">Author</div>
            <div className="flex">
                <div className="content-center">
                    <div className="h-5 w-5 rounded-full bg-gray-200"></div>
                </div>
                <div className="ml-4">
                    <div className="text-3xl font-bold mb-2">{props.authorName}</div>
                    <div className="text-xl text-gray-500 opacity-90">{props.authorDescription}</div>
                </div>
            </div>
        </div>
    )
}