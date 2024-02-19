import React, { useState, useContext } from 'react';
import BloggContext from '../Context/BlogContext.js';
// import Card from './Components/Card'; // Assuming Card component is defined
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {
  const [mainb, setMainb] = useState('');
  const nav=useNavigate();
  const { blogs, setblogs } = useContext(BloggContext);

  const handleOnChange = (e) => {
    setMainb(e.target.value);
  };

  const handleAdd = () => {
    if (mainb.trim()) { // Handle empty input case
      const newBlogs = [...blogs, mainb];
      setblogs(newBlogs);
      setMainb('');
      nav("/")
    } else {
      alert("plz put someThing as the blog")
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-2">
      <textarea
        name=""
        id="inputArea"
        cols="40"
        rows="10"
        onChange={handleOnChange}
        className="bg-slate-400 rounded border p-2"
        value={mainb} // Update text area on state change
      />
     <button onClick={handleAdd}>Add</button>
    </div>
  );
}
