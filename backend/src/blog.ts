import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge/edge.js' ;
import { withAccelerate } from '@prisma/extension-accelerate' ;
import {sign , decode , verify} from "hono/jwt" ;

export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string , 
      JWT_SECRET: string
    },
    Variables: {
      userId: string
    }
}>() ;

blogRouter.use('/*' , async (c , next) => {
    let token = c.req.header('Authorization') ;
    if(!token || !(token.startsWith('Bearer '))) {
      return c.json({
        message : "not verified or token not attached"
      } , 400) ;
    }
    token = token.split(' ')[1] ;
    const isVerified = await verify(token , c.env.JWT_SECRET) ;
    if(!isVerified.id){
      return c.json({
        message : "You ain't verified"
      } , 403) ;
    }
    console.log(isVerified) ;
    c.set('userId' , JSON.stringify(isVerified.id));
    await next() ;
}) ;

blogRouter.post('/blog' , async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate()) ;
    try{
        const body = await c.req.json() ;
        const id = c.get('userId') ;
        const blogDetails = await prisma.posts.create({
            data : {
                title : body.title ,
                content : body.content ,
                authorId : id
            }
        }) ;
        console.log(blogDetails) ;
        return c.json({
          message : "blog posted successfully" ,
        }) ;
    }
    catch(e){
        return c.json({
            message : "Some error occurred"
        });
    }
}) ;
  
blogRouter.put('/blog' , async (c) => {
    try{
        const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate()) ;
        const body = await c.req.json() ;
        const updatedBogDetails = await prisma.posts.update({
            where : {
                id : body.id ,
            } , 
            data : {
                title : body.title ,
                content : body.content 
            }
        }) ;
        console.log(updatedBogDetails) ;
        return c.json({
          message : "Blog Updated successfully"
        }) ;
    }
    catch(e){
        return c.json({
            message : "Some error occurred"
        })
    }
}) ;
  
blogRouter.get('/blog/:id' , async (c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate()) ;
        const id = c.req.param('id') ;
        const blog = await prisma.posts.findFirst({
            where : {
                id : id
            }
        }) ;
        console.log(blog) ;
        return c.json({
            message : "blog fetched successfully" ,
            data : blog
        }) ;
    }
    catch(e){
        return c.json({
            message : "Some error occurred"
        }) ;
    }
}) ;

blogRouter.get("/blog/bulk" , async(c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate()) ;
        const blogs = await prisma.posts.findMany({}) ;
        console.log("fetched all blogs") ;
        return c.json({
            message : "fetched all blogs" ,
            data : blogs
        }) ;
    }
    catch(e){
        return c.json({
            message : "Some error occurred"

        })
    }
})