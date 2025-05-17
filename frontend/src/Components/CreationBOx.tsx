import { CreateInputBox } from "./CreateInputBox"
import { useSetRecoilState } from "recoil"
import { titleAtom } from "../atoms/titleAtom"
import { contentAtom } from "../atoms/contentAtom"

export const CreationBox = () => {
    const setTitle = useSetRecoilState(titleAtom) ;
    const setContent = useSetRecoilState(contentAtom) ;
    return (
        <div>
            <CreateInputBox text="5xl" Placeholder="Title" font="bold" onChange={(val : string) => {
                setTitle(val) ;
            }}></CreateInputBox>
            <div className="mb-6"></div>
            <div className="text-gray-700">
                <CreateInputBox text="lg" Placeholder="Tell Your Story..." font="normal" onChange={(val : string) => {
                setContent(val) ;
            }}></CreateInputBox>
            </div>
        </div>
    )
}
