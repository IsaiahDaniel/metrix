import { NavLink } from "react-router-dom";

import "./SidebarItem.css";
import Badge from "../Badge/Badge";

type SideBarItem = {
    iconStyles?: any;
    Icon?: any;
    text?: string;
    to?: any;
    badgeNumber?: number;
}

const SidebarItem = ({ iconStyles, Icon, text, to, badgeNumber }: SideBarItem) => {
  return (
    <NavLink
      to={to}
      className="flex items-center justify-start px-14 py-5 sidebarNav"
    >
      {Icon && <Icon size="25" color="#000" className="mr-2" {...iconStyles} />}

      <span className="text-black mr-4">{text}</span>

      { badgeNumber && <Badge badgeNumber={badgeNumber} /> }
    </NavLink>
  );
};

export default SidebarItem;