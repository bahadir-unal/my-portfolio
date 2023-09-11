import { Layout, theme } from "antd"
import { Route, Routes } from 'react-router-dom';

import Header from "./components/layout/header";
import Home from "./pages/home/home"
import Portfolio from "./pages/portfolio/portfolio"
import Sidebar from './components/layout/sidebar';

// import Certificate from "./pages/certificate/certificate"



const { Content } = Layout;

const App: React.FC = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (<Layout >
    <Sidebar />
    <Layout>
      <Header />
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 400,
          background: colorBgContainer,
        }}
      >
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/portfolio" Component={Portfolio}></Route>
          {/* <Route path="/certificate" Component={Certificate}></Route> */}
        </Routes>
      </Content>
    </Layout>
  </Layout>

  )
}


export default App;
