import { atomFamily } from "recoil";

export const blogAtomFamily = atomFamily({
    key : "blogAtomfamily" ,
    default : {
        id : "" ,
        title : "" ,
        content : "" , 
        published : false ,
        authorId : "" ,
        createdAt : "" ,
        authorName : ""
    }
})