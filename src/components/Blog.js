import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Blog = ({ pending, setPending }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8001/blogs/1")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [pending]);

  useEffect(() => {
    fetch(`http://localhost:8001/blogs/${id ? id : "1"}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, [id]);

  const deleteHandler = () => {
    fetch(`http://localhost:8001/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPending(!pending);
      navigate("/");
    });
  };

  return (
    <motion.div  
          initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
     className="blogContainer" style={{ maxWidth: "45%"}}>
      <motion.h1 
            initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
      >Title Of The Game : {blog.title}</motion.h1> <br/>


      <motion.p 
            initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
      >Platform: {blog.platform}</motion.p>  <br/>


      <motion.p 
            initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
      >Score: {blog.score}</motion.p><br/>


      <motion.p
            initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
      >Genre: {blog.genre}</motion.p><br/>


      {blog ? <motion.button onClick={deleteHandler}
            initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
      >Delete</motion.button> : "Loading"}


    </motion.div>
  );
};

export default Blog;
//npx json-server --watch data/db.json --port 8000