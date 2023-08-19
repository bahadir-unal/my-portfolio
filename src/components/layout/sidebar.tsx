
import { useState } from 'react';
import { MenuProps, MenuTheme } from 'antd';
import { AiOutlineHome, AiOutlineInsertRowBelow, AiTwotoneBuild, AiOutlineFilePdf, AiOutlineCopy, AiOutlineFolderOpen, AiOutlineFile } from "react-icons/ai";
import { TbBrandVercel } from "react-icons/tb";

import { Layout, Menu, Switch } from "antd"
import { Link } from 'react-router-dom';
const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="">Home</Link>, 'home', <AiOutlineHome />),
  // {
  //   type: 'divider',
  // },
  getItem(<Link to="/portfolio">Portfolyo</Link>, 'portfolio', <AiOutlineFilePdf />),
  getItem(<Link to="/certificate">Certificate</Link>, 'certificate', <AiOutlineFile />),


];


const Sidebar: React.FC = (...props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [current, setCurrent] = useState('home');




  const handleMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
  

      <Menu
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        selectedKeys={[current]}
        onClick={handleMenu}
        mode="inline"
        items={items}
      />

    </Sider>
  )
}


export default Sidebar;