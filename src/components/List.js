import { useState, useEffect } from "react";
import { colors } from "../styles/global";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
function List({ pending }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [pending]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "2rem",
        maxWidth: "48%",
      }}
    >
      {blogs.map((blog) => {
        return (
          <Link
            key={blog.id}
            to={`/${blog.id}`}
            style={{
              display: "flex",
              alignItems: "flex-start",
              borderBottom: `1px solid ${colors.light}`,
              color: "black",
              textDecoration: "none",
            }}
          >
            <div
              className="imgBox"
              style={{
                display: "flex",
                alignItems: "center",
                width: "400px",
                height: "150px",
                backgroundImage: `url("${blog.img}")`,
                backgroundSize: "cover",
                marginBottom: "2rem",
                overflow: "hidden",
                marginRight: "1rem",
              }}
            ></div>
            <motion.div

initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "2rem",
                justifyContent: "center",
              }}
            >
              <h2>{blog.title}</h2> 
              <p>{blog.platform}</p>
              <p>{blog.score}</p>
              <p>{blog.genre}</p>
              <p>{blog.editors_choice}</p> 
              {/* <p>{blog.body.substring(0, 20)}</p> */}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}

export default List;