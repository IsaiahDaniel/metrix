import { AiOutlineMenu } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";

type HeaderProps = {}

const Header = () => {
  return (
    <header className="flex items-center justify-between shadow-md bg-white p-8">
      <div>
        <h2>Dashboard</h2>
      </div>

      <div className="block cursor-pointer md:hidden">
        <AiOutlineMenu size={35} />
      </div>

      <div className="md:flex items-center hidden">
        <GrNotification color="5570F1" size={22} />
      </div>
    </header>
  );
};

export default Header;
