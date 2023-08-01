import { images, icons } from "../../../constants/";
import SidebarItem from "./SidebarItem";

import { TbLogout2 } from "react-icons/tb";


const Sidebar = () => {
  return (
    <aside className="w-[70%] md:w-[20%] min-h-screen bg-white shadow-lg text-white fixed top-0 bottom-0">
      <div className="p-5">
        <img src={images.Logo} alt="" />
      </div>

      <div className="py-10">
        <SidebarItem Icon={icons.RxDashboard} text="Dashboard" to="/" />
        <SidebarItem Icon={icons.HiOutlineShoppingBag} badgeNumber={30} text="Orders" to="/orders" />
        <SidebarItem Icon={icons.PiUsersLight} text="Customers" to="/Inventory" />
        <SidebarItem Icon={icons.HiOutlineFolder} text="Inventory" to="/Inventory" />
        <SidebarItem Icon={icons.BiConversation} text="Conversation" badgeNumber={16} to="/conversations" />
        <SidebarItem Icon={icons.FiSettings} text="Settings" to="/Settings" />
      </div>

      <div className="py-10">
        <div>
          <TbLogout2 />
          <p>Logout</p>
        </div>
      </div>


    </aside>
  );
};

export default Sidebar;
