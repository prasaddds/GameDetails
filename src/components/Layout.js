import { layout } from "../styles/homeStyles";

const Layout = ({ children }) => {
  return <main style={layout}>{children}</main>;
};

export default Layout;