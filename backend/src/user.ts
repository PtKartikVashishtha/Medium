import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge/edge.js' ;
import { withAccelerate } from '@prisma/extension-accelerate' ;
import {sign , decode , verify} from "hono/jwt" ;
import { signInInput, SignInInput , singUpInput } from "@kartikashishtha/zod-medium"; 

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string , 
      JWT_SECRET: string
    },
    Variables: {
      userId: string
    }
  }>()

userRouter.post('/signup' , async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate()) ;
    const body = await c.req.json() ;
    try{
      const { success } = singUpInput.safeParse(body) ;
      if(!success){
        return c.json({
          message : "invalid input" 
        }) ;
      }
      const response = await prisma.user.create({
        data : {
          name : body.name ,
          email : body.email ,
          password : body.password 
        }
      }) ;
      const token = await sign({
        id : response.id
      } , c.env.JWT_SECRET) ;
      
      console.log(response) ;
      return c.json({
        message : "user created" ,
        token ,
      }) ;
    }
    catch(e){
      return c.json({
        message : "some error occurred"
      })
    }
  }) ;
  
  userRouter.post('/signin' , async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate()) ;
  
    const body = await c.req.json() ;
    const {success} = signInInput.safeParse(body) ;
    if(!success) {
      return c .json({
        message : "invalid input"
      }) ;
    }
    if('password' in body){ 
      const response = await prisma.user.findUnique({
        where : {
          email : body.email ,
        }
      }) ;
      if(response == null){
        return c.json({
          message : "user not found"
        })
      }
      else{
        const token = await sign({
          id : response.id
        } , c.env.JWT_SECRET) ;
        return c.json({
          message : "signed in" ,
          token 
        })
      }
    }
    else{
      return c.json({
        message : "please enter password"
      })
    }
  }) ;