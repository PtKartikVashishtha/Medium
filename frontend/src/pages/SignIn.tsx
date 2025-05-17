import { SignInMajor } from "../Components/signInMajor"
import { SignInMinor } from "../Components/signInMinor"

export const SignIn = () => {
    return <div className="lg:flex">
        <div className="h-full w-full flex items-center justify-center h-screen">
            <SignInMajor></SignInMajor>
        </div>
        <div className="h-full w-full flex items-center justify-center h-screen bg-gray-100 invisible lg:visible">
            <SignInMinor></SignInMinor>
        </div>
    </div>
}