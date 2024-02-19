import React from 'react'
import Home from './Pages/Home'
import CreateBlog from './Pages/CreateBlog'
import EditBlogg from './Pages/EditBlogg';
import BlogComp from './Context/BlogComp';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <BlogComp>
            <Routes>
      <Route path='/create' element={<CreateBlog/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit' element={<EditBlogg/>}/>
      </Routes>
      </BlogComp>
    </Router>
  )
}
