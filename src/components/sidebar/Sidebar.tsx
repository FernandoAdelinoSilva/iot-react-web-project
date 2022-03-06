import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import '../../styles/sidebar.scss';

import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { getSidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import { usePlaces } from '../../hooks/usePlaces';
import { Avatar, Box, Flex, Text, Link } from '@chakra-ui/react'

export const Sidebar = () => {
	const { places } = usePlaces();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const sideBarData = getSidebarData(places)
  const { user, signOutWithGoogle } = useAuth();

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <div className="nav-bar">
          <Link href='#' className="nav-icon">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Flex marginLeft={'auto'} marginRight={'2rem'}>
            <Avatar src={user.avatar} size={'sm'} />
            <Box ml='3' marginTop={0}>
              <Text fontWeight={'medium'} color={'white'}>
                {user.name}
              </Text>
              <Link color={'white'} href='/' onClick={signOutWithGoogle} >Log Out</Link>
            </Box>
          </Flex>
        </div>
        <nav className={sidebar ? 'nav-side-bar-active' : 'nav-side-bar'} >
          <nav className="nav-side-bar-wrap">
            <Link href='#' className="nav-icon">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {sideBarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </nav>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar