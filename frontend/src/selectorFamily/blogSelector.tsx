import axios from "axios";
import { selectorFamily } from "recoil";
import { BACKEND_URL } from "../config";

export const blogSelectorFamily = selectorFamily({
    key : "blogSelectorFamily" , 
    get : (id :string) => async ({ get }) => {
        const response = axios.get(`${BACKEND_URL}/api/v1/blog${id}`,{
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
        //@ts-ignore
        return response.data.data ;
    }
})

export const nameSelectorFamily = selectorFamily({
    key : "blogSelectorFamily" , 
    get : () => async ({get}) => {
        const response = axios.get(`${BACKEND_URL}/api/v1/user/details` , {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
        //@ts-ignore
        return response.data.data ;
    }
})

