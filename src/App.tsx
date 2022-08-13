import { Space } from "antd";
import Layout, { Content} from "antd/lib/layout/layout";
import "@styles/App.css";
import Greeting from "@layout/Greeting/Greeting";
import Footer from "@layout/DashboardFooter/DashboardFooter";
import Dashboard from "@layout/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Layout className="funnyColours" style={{ minHeight: "100vh" }}>
        <Space direction="vertical" size="large">
          <Greeting />
          <Content style={{ marginBottom: "8rem" }}>
            <Dashboard />
          </Content>
        </Space>
        <Footer/>
      </Layout>
        
    </div>
  );
};

export default App;
