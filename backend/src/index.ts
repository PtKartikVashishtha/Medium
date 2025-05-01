import { Hono } from 'hono' ;
import { PrismaClient } from '@prisma/client/edge/edge.js' ;
import { withAccelerate } from '@prisma/extension-accelerate' ;
import {sign , decode , verify} from "hono/jwt" ;

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string , 
    JWT_SECRET: string
  },
  Variables: {
    userId: string
  }
}>()

app.use('/api/v1/blog/*' , async (c , next) => {
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
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
}) ;

app.post('/api/v1/signup' , async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate()) ;
  const body = await c.req.json() ;
  try{

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
      data : {
        id : response.id ,
        name : response.name ,
        email : response.email 
      } , 
      token ,
    }) ;
  }
  catch(e){
    return c.json({
      message : "some error occurred"
    })
  }
}) ;

app.post('/api/v1/signin' , async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate()) ;

  const body = await c.req.json() ;
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

app.post('/api/v1/blog' , async (c) => {
  return c.json({
    message : "Post blog route" 
  }) ;
}) ;

app.put('/api/v1/blog' , async (c) => {
  return c.json({
    message : "Update blog route"
  }) ;
}) ;

app.get('/api/v1/blog/:id' , async (c) => {
  const id = c.req.param('id') ;
  return c.json({
    message : "get blog route" 
  }) ;
}) ;



export default app
