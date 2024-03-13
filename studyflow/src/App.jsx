import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Home from "./pages/Home"
import AboutPage from "./pages/About"
import NoPage from "./pages/NoPage"
import PageLayout from "./Layouts/PageLayout"
import Productivity from "./pages/Productivity"
import Todo from "./pages/Todo"
import Canvas from "./pages/Sketch"
import './styles.css'

export default function App(){
  return (
    <div>
      
      <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
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