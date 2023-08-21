import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Button, Layout, Space, theme } from "antd"

import { FcGoogle } from "react-icons/fc";

const { Header } = Layout;
const Head: React.FC = (...props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (<Header style={{ padding: 0, background: colorBgContainer }} >
        <Space direction='horizontal' size={10}>
            <Button rel="noopener" target='_blank' href={"https://www.linkedin.com/in/bahadir-unal/"} icon={<AiOutlineLinkedin color='blue' size={25} />} />
            <Button rel="noopener" target='_blank' href={"https://github.com/bahadir-unal"} icon={<AiOutlineGithub size={25} />} />
            
        </Space>
    </Header>)
}


export default Head;