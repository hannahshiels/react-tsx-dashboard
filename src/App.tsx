import { Affix, Button, Space } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "Styles/css/App.css";
import Greeting from "Layout/Greeting/Greeting";
import Text from "Constants/Text";
import Dashboard from "Layout/Dashboard/Dashboard";

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
        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            width: "100%",
          }}
        >
          {Text.FooterMessage}
        </Footer>
      </Layout>
        
    </div>
  );
};

export default App;
