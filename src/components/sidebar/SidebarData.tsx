import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

type Places = Array<{ Name: string, Id: string }>;
type Place = { Name: string, Id: string };

const _setSubNavPlaces = (places: Places, path: string) => {
  var subNavPlaces: { title: string; path: string; icon: JSX.Element }[] = [];

  places.forEach((place: Place) => {
    subNavPlaces.push({
      title: place.Name,
      path: `/home/${path}/${place.Id}`,
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
      title: 'Places',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: _setSubNavPlaces(places, 'places')
    },
    {
      title: 'Logs',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: _setSubNavPlaces(places, 'logs')
    }
  ]

  return SidebarData;
};
