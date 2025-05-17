import { SignIn } from "./pages/SignIn" ;
import { SignUp } from "./pages/SignUp";
import { Blog } from "./pages/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blogs } from "./pages/Blogs";
import { Create } from "./pages/Create";
import { RecoilRoot } from "recoil";


function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path = "/signin" element = {<SignIn></SignIn>}/>
          <Route path = "/signup" element = {<SignUp></SignUp>}/>
          <Route path = "/blog/:id" element = {<Blog></Blog>}/> 
          <Route path = "/blogs" element = {<Blogs></Blogs>}/>
          <Route path = "/create" element = {<Create/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
