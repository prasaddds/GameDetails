import { useState } from "react";
import { colors } from "../styles/global";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Create = ({ pending, setPending }) => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [score, setScore] = useState("");
  const [genre, setGenre] = useState("");
  const [editors,setEditors]=useState("");
  const navigate = useNavigate();//for previous/history

  const submitHandler = (e) => {
    e.preventDefault();
    const newBlog = {
      title,//title:title
      platform,
      score,
      genre,
      editors
    };
    fetch("http://localhost:8001/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setPending(!pending);
      navigate("/");
    });
  };

  return (
    <div className="createContainer" style={{ width: "48%" }}>
      <motion.form 
            initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:2}}
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Platform</label>
        <textarea
          required
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <label>Score</label>
        <input
          type="text"
          required
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <label>Genre</label>
        <input
          type="text"
          required
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <label>Editors Choice</label>
        <input
          type="text"
          required
          value={editors}
          onChange={(e) => setEditors(e.target.value)}
        />
        <input
          type="submit"
          style={{
            cursor: "pointer",
            backgroundColor: colors.logo,
            color: colors.light,
          }}
        />
      </motion.form>
    </div>
  );
};

export default Create;