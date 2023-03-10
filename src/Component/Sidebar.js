import React,{ useState } from 'react';
import { WindowsOutlined, TableOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import "../Css/Sidebar.css";


function Sidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const manuItem = [
        {
            path: "/",
            name: "dashboard",
            icon: <HomeOutlined />
        },
        {
            path: "/login",
            name: "login",
            icon: <WindowsOutlined />
        },
        {
            path: "/accepted",
            name: "accepted",
            icon: <WindowsOutlined />
        },
        {
            path: "/delivered",
            name: "delivered",
            icon: <WindowsOutlined />
        },
        {
            path: "/dispach",
            name: "dispach",
            icon: <WindowsOutlined />
        },
        {
            path: "/pendingTable",
            name: "pendingTable",
            icon: <TableOutlined />
        },
        {
            path: "/preparing",
            name: "preparing",
            icon: <WindowsOutlined />
        },
        {
            path: "/ready",
            name: "ready",
            icon: <WindowsOutlined />
        },
        {
            path: "/rejectedTable",
            name: "rejectedTable",
            icon: <WindowsOutlined />
        }
    ]
    return (
        <div className='container'>
            <div style={{width:isOpen ? "300px": "50px"}} className='sidebar'>
                <div className='top-section'>
                    <h1 style={{display:isOpen ? "block": "none"}} className='logo'>logo</h1>
                    <div style={{marginLeft:isOpen ? "50px": "0px"}} className='bars'>
                        <UnorderedListOutlined onClick={toggle}/>
                    </div>
                </div>
                {
                    manuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div  style={{display:isOpen ? "block": "none"}} className='link-text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar