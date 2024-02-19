import React, { useContext } from 'react'
import EditBlogg from '../Pages/EditBlogg.jsx';
import { Link } from 'react-router-dom';
import BloggContext from '../Context/BlogContext.js'
export default function Card({ blogProp,index}) {
  const {blogs,setblogs}=useContext(BloggContext);
  const handleDelete=()=>{
    const newBlogs = blogs.filter((_, i) => i !== index);

    // Update the state using setBlogs (assuming correct implementation)
    setblogs(newBlogs);
  }
 
  return (
    <div className='bg-yellow-200 border flex justify-center items-center text-black rounded flex-col p-3'>
        <h1>Title</h1>
        <p>{blogProp}</p>
        <button onClick={handleDelete}>delete</button>
        <Link 
        to={{
          pathname:'/edit',
          search: `?index=${index}`,
        }}
        ><button>Edit</button>
        </Link>
    </div>
  )
}
