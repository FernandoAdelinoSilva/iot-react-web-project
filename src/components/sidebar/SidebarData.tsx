import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Overview',
    path: '/rooms/new/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users',
        path: '/rooms/new/overview/users',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Revenue',
        path: '/rooms/new/overview/revenue',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Reports',
    path: '/rooms/new/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports 1',
        path: '/rooms/new/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports 2',
        path: '/rooms/new/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Reports 3',
        path: '/rooms/new/reports/reports3',
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  },
  {
    title: 'Products',
    path: '/rooms/new/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Team',
    path: '/rooms/new/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/rooms/new/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Message 1',
        path: '/rooms/new/messages/message1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Messages 2',
        path: '/rooms/new/messages/messages2',
        icon: <IoIcons.IoIosPaper />,
      }
    ]
  },
  {
    title: 'Support',
    path: '/rooms/new/support',
    icon: <IoIcons.IoMdHelpCircle />,
  }
]