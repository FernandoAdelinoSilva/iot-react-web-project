import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import '../../styles/sidebar.scss';

export const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <div className="nav-bar">
          <Link to='#' className="nav-icon">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-side-bar-active' : 'nav-side-bar'} >
          <nav className="nav-side-bar-wrap">
            <Link to='#' className="nav-icon">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </nav>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar