import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useRecoilValue } from "recoil";
import { titleAtom } from "../atoms/titleAtom";
import { contentAtom } from "../atoms/contentAtom";
import { useNavigate } from "react-router-dom";


export const useBlog = (id : string) => {
    const [loading , setLoading] = useState(true) ;
    const [blog , setBlog] = useState({
        id : "" ,
        title : "" ,
        content : "" , 
        published : false ,
        authorId : "" ,
        createdAt : "" ,
        authorName : ""
    }) ;

    const [name , setName] = useState("") ;
    useEffect(() => {
        const fetchData = async () => {
            const [blog , name] = await Promise.all([
                axios.get(`${BACKEND_URL}/api/v1/blog/${id}` ,{
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("token")}`
                    }
                }) ,
                axios.get(`${BACKEND_URL}/api/v1/user/details` , {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("token")}`
                    }
                })
            ]);
            setBlog(blog.data.data) ;
            setName(name.data.name) ;
            setLoading(false) ;
        }
        fetchData() ;
    } , []) ;
    return {
        loading , 
        blog ,
        name
    }
}

export const useBlogs = () => {
    const [loading , setLoading] = useState(true) ;
    const [blogs , setBlogs] = useState([]) ;
    const [name , setName] = useState("") ;
    useEffect(() => {
        const dataFetching = async () => {
            const [blogs , name] = await Promise.all([
                axios.patch(`${BACKEND_URL}/api/v1/blog/bulk` ,{} , {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
                }) ,
                axios.get(`${BACKEND_URL}/api/v1/user/details` , {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("token")}`
                    }
                })
            ]) ;
            setBlogs(blogs.data.data) ;
            setName(name.data.name) ;
            setLoading(false) ;
        }
        dataFetching() ;
    } , []) ;
    return {
        loading ,
        blogs , 
        name 
    }
}

export const usePostBlog = () => {
    const title = useRecoilValue(titleAtom) ;
    const content = useRecoilValue(contentAtom) ;
    const [name , setName] = useState("") ;
    const [loading , setLoading] = useState(true) ;
    const navigate = useNavigate() ;
    useEffect(() => {
        const dataFecting = async () => {
            const [response] = await Promise.all([
                axios.get(`${BACKEND_URL}/api/v1/user/details` , {
                    headers : {
                        "Authorization" : `Bearer ${localStorage.getItem("token")}`
                    }
                })
            ]) ;
            setName(response.data.name) ;
            setLoading(false) ;
        }
        dataFecting() ;
    } , []) ;
    const postBlog = async () => {
        
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog` , {
            title , 
            content
        } , {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        }) ;
        alert(response.data.message) ;
        navigate("/blog/"+response.data.id) ;
    }
    return {
        name ,
        postBlog ,
        loading
    }
}