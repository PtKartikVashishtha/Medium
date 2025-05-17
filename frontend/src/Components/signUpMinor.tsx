import { Review } from "./review"

export const SignUpMinor = () => {
    return (
        <div className="bg-gray-100 content-center">
            <Review review="The customer service I received was exceptional. The support team went above and beyond to address my concerns."
                authorName="Jules Winnfield"
                designation="CEO, Acme Inc." />
        </div>
    )
}