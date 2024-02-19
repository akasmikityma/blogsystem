import React,{useState} from 'react'
import BloggContext from './BlogContext.js'
export default function BlogComp({children}) {
   const [blogs, setblogs] = useState([]);

  return (
     <BloggContext.Provider value={{blogs,setblogs}}>
       {children}
     </BloggContext.Provider> 
  )
}
