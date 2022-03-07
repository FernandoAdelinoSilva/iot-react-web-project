import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

type Places = Array<{ Name: string, Id: string }>;
type Place = { Name: string, Id: string };

const _setSubNavPlaces = (places: Places, path: string) => {
  var subNavPlaces: { title: string; path: string; icon: JSX.Element }[] = [];

  if(places && places[0]) {
    places.forEach((place: Place) => {
      subNavPlaces.push({
        title: place.Name,
        path: `/home/${path}/${place.Id}`,
        icon: <AiIcons.AiFillHome />,
      })
    });
  }

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
