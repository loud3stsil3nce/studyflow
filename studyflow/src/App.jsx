import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home"
import AboutPage from "./pages/About"
import NoPage from "./pages/NoPage"
import PageLayout from "./Layouts/PageLayout"
import Productivity from "./pages/Productivity"
import Todo from "./pages/Todo"
import Canvas from "./pages/Sketch"
import './styles.css'
import AuthPage from "./pages/AuthPage"

export default function App(){
  return (
    <div>
      
      <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<AuthPage/>} />

          <Route path="/about" element={<AboutPage/>} />
          <Route path="/productivity" element={<Productivity/>} /> 
          <Route path="/todo" element={<Todo/>} />
          <Route path="/sketch" element={<Canvas/>} />
          <Route path="*" element={<NoPage/>} />
        

        </Routes>
        </PageLayout>
      </BrowserRouter>
      
    </div>
  )
}