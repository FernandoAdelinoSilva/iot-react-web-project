import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

type Places = Array<{ Name: string, Id: string }>;
type Place = { Name: string, Id: string };

const _setSubNavPlaces = (places: Places) => {
  var subNavPlaces: { title: string; path: string; icon: JSX.Element }[] = [];

  places.forEach((place: Place) => {
    subNavPlaces.push({
      title: place.Name,
      path: `/home/places/${place.Id}`,
      icon: <AiIcons.AiFillHome />,
    })
  });

  return subNavPlaces;
};

export const getSidebarData = (places: Places) => {
  
  const SidebarData = [
    {
      title: 'Overview',
      path: '/home/overview',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: 'Users',
          path: '/home/overview/users',
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: 'Revenue',
          path: '/home/overview/revenue',
          icon: <IoIcons.IoIosPaper />,
        },
      ]
    },
    {
      title: 'Reports',
      path: '/home/reports',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: 'Reports 1',
          path: '/home/reports/reports1',
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: 'Reports 2',
          path: '/home/reports/reports2',
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: 'Reports 3',
          path: '/home/reports/reports3',
          icon: <IoIcons.IoIosPaper />,
        },
      ]
    },
    {
      title: 'Products',
      path: '/home/products',
      icon: <FaIcons.FaCartPlus />
    },
    {
      title: 'Team',
      path: '/home/team',
      icon: <IoIcons.IoMdPeople />
    },
    {
      title: 'Messages',
      path: '/home/messages',
      icon: <FaIcons.FaEnvelopeOpenText />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: 'Message 1',
          path: '/home/messages/message1',
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: 'Messages 2',
          path: '/home/messages/messages2',
          icon: <IoIcons.IoIosPaper />,
        }
      ]
    },
    {
      title: 'Places',
      path: '/home/places',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: _setSubNavPlaces(places)
    }
  ]

  return SidebarData;
};
