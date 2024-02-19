// import React,{useState} from 'react'
// import { Link,useLocation } from 'react-router-dom';

// export default function EditBlogg(props) {
//     const location =useLocation();
//     const saveBlog=()=>{
//         if (handleSave) {
//             handleSave(editedBlog); // Call handleSave if it's defined
//           }
        
//     }
//     const handleInput=(e)=>{
//         seteditedBlog(e.target.value);
//     }
//     return (
//     <div className="flex flex-col justify-center items-center m-2">
//       <textarea
//         name=""
//         id="inputArea"
//         cols="40"
//         rows="10"
//         onChange={handleInput}
//         className="bg-slate-400 rounded border p-2"
//         defaultValue={editedBlog}
//       />
//      {/* <button onClick={handleAdd}>Add</button> */}
//      <Link to='/'><button onClick={saveBlog}>add</button></Link>
//     </div>
//   )
// }
//blogs[index] change anbo setblogs to ek e thakbe >. blogs setblogs call korbo then handle Edit ()
import React,{useContext,useState} from 'react'
import BloggContext from '../Context/BlogContext.js'
import { useSearchParams,Link } from 'react-router-dom';
export default function EditBlogg() {
   const {blogs,setblogs}=useContext(BloggContext);
   const [searchPaa]=useSearchParams();
    const index=Number(searchPaa.get('index'));
   //ami array er hold pelam >>>
   const [changedText, setchangedText] = useState(blogs[index])
   
   const editerHandleChange=(e)=>{
      setchangedText(e.target.value);
   }
   const handleEdit=()=>{
    //blogs[index]=''; editedBLog ta assign korbo then home page e navigate korbo>>.
     blogs[index]='';
     blogs[index]=changedText;
     
   }
  return (
    <div className="flex flex-col justify-center items-center m-2">
       <textarea name="" id="" cols="30" rows="10"
       onChange={editerHandleChange}
       
       className="bg-slate-400 rounded border p-2"
       defaultValue={changedText}
       ></textarea>
       <Link to='/'><button onClick={handleEdit}>Save</button></Link>
    </div>
  )
}
