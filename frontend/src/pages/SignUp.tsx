import { SignUpMajor } from "../Components/signUpMajor"
import { SignUpMinor } from "../Components/signUpMinor"

export const SignUp = () => {
    return <div className="lg:flex">
        <div className="h-full w-full">
            <div className="flex items-center justify-center h-screen"><SignUpMajor></SignUpMajor></div>
        </div>
        <div className="h-full w-full">
            <div className="flex items-center justify-center h-screen bg-gray-100 invisible lg:visible"><SignUpMinor></SignUpMinor></div>
        </div>
    </div>
}