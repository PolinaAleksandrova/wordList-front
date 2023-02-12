import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import {Link} from "react-router-dom";


export const SidebarData = [
  {
    title: "Overview",
    path: "/adminPage",

    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Users",
        path: "",

        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Roles",
        path: "",
    
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Tables",

    path: "/adminPage",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Word",
   
        path: "/wordTable",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
        
      },
      {
        title: "Translate",

        path: "/translateTable",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Achievement",
     
        path: "/achievementTable",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Courses",
    path: "",
    // path: "/courses",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Test",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Category",
    path: "/category",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Category 1",
        path: "",
  
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Category 2",
     
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

