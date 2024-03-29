import styled from 'styled-components';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SidebarContent = styled.div`
  display: inline-flex;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`

const SubMenu = ({item}: {item:any}) => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      <SidebarLink to={item.path ? item.path : '#'} onClick={item.subNav && showSubNav}>
          <SidebarContent>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </SidebarContent>
          <div>
            {item.subNav && subNav
              ? item.iconOpened 
              : item.subNav 
              ? item.iconClosed
              : null}
          </div>
      </SidebarLink>
      {subNav && item.subNav.map((item: any, index: number) => {
        return (
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}

export default SubMenu;