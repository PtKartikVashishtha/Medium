interface TopHeadingProps {
    heading : string
}

export const TopHeading = (props : TopHeadingProps) => {
    return <div className="text-4xl font-bold text-black  ml-14 m-3 ">
        {props.heading}
    </div>
}