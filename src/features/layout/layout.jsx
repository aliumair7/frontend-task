import { Layout } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const GlobalLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Header className="app-header" style={{ color: "#E5E5E5" }}>
          <Link to="/list-tasks">Task List</Link>
          <Link to="/create-task">Add Task</Link>

          <Link to="/bulk-delete">Bulk Delete Tasks</Link>
        </Header>
        <Layout>{children}</Layout>
        <Footer style={{ textAlign: "center" }}>
          {" "}
          Task App ©2023 Created by Ali Umair
        </Footer>
      </Layout>
    </>
  );
};

export default GlobalLayout;
