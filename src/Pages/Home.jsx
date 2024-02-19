import React,{useContext, useEffect} from 'react'
import Card from '../Components/Card'
import BloggContext from '../Context/BlogContext.js'
import { Link } from 'react-router-dom';
export default function Home() {
  const { blogs} = useContext(BloggContext);
  
  return (
    <div className="flex flex-col m-5">
      <h1 className="self-center text-lg underline">Your Blogs</h1>
      <Link to="/create">
        <button className="bg-sky-700 p-2 text-white mb-3 mx-12 self-center">
          Add Blog
        </button>
      </Link>
      <div className="bg-slate-300 rounded border grid grid-cols-3 grid-rows-3 p-4 gap-4">
        {blogs&&blogs.map((blog, index) => (
          <Card key={index} blogProp={blog} index={index}/>
        ))}
      </div>
    </div>
  );
}
