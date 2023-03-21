import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetIcon from "./SidebarTweetIcon";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icons: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icons: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icons: FaUser,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icons}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SidebarTweetIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
