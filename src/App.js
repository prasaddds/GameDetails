import Blog from "./components/Blog";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { colors } from "./styles/global";
import { main } from "./styles/homeStyles";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import { useState } from "react";

const App = () => {
  const [pending, setPending] = useState(false);
  return (
    <>
      <Layout>
        <Navbar />
        <hr style={{ marginTop: "3rem", color: colors.text }} />

        <Heading />

        <hr />

        <div style={main}>
          <Routes>
            <Route
              path="/"
              element={<Blog pending={pending} setPending={setPending} />}
            />
            <Route
              path="/create"
              element={<Create pending={pending} setPending={setPending} />}
            />
            <Route
              path="/:id"
              element={<Blog pending={pending} setPending={setPending} />}
            />
          </Routes>

          <List pending={pending} />
        </div>
      </Layout>
    </>
  );
};

export default App;