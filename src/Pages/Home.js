import { Layout } from "antd";
import AppHeader from "../components/Header"
import New from "../components/New";
import AppFooter from "../components/Footer"

const { Header, Content, Footer } = Layout;

function Home() {

    return (
        <Layout className='container main-layout'>
            <Header className="layout-header">
                <AppHeader title="NORDIC" />
            </Header>
            <Content className="layout-content">
                <New />
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
        </Layout>
    );
}
export default Home;