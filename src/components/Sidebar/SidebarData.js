import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";



export const SidebarData = [
  {
    title: "Overview",
    path: "/adminPage",
    // path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Users",
        path: "",
        // path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "",
        // path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Tables",
    // path: "/reports",
    path: "/adminPage",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Word",
        // path: "/reports/reports1",
        path: "/wordTable",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
        
      },
      {
        title: "Translate",
        // path: "/reports/reports2",
        path: "/ccc",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Achievement",
        // path: "/reports/reports3",
        path: "/ddd",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "",
    // path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Message 1",
        path: "",
        // path: "/messages/message1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Message 2",
        // path: "/messages/message2",
        path: "",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    // path: "/support",
    path: "",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];

