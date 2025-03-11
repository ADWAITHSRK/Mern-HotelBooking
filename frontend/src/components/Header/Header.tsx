import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Button,MenuProps } from "antd";
import { LogoutOutlined } from "@ant-design/icons"

const Header = () => {
  const  isLoggedIn  = false
  const menuItems: MenuProps["items"] = isLoggedIn
  ? [
      {
        key: "my-bookings",
        label: <Link to="/my-bookings">My Bookings</Link>,
      },
      {
        key: "my-hotels",
        label: <Link to="/my-hotels">My Hotels</Link>,
      },
      {
        key: "sign-out",
        label: (
          <Button>
            <LogoutOutlined /> Sign Out
          </Button>
        ),
      },
    ]
  : [
      {
        key: "sign-in",
        label: <Link to="/sign-in">Sign In</Link>,
      },
    ];

  return (
    <div className="bg-blue-700 py-5 px-6 h-20">
      <div className="container mx-auto flex justify-between items-cente px-8">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Weekend.Com</Link>
        </span>
        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="text-white font-bold hover:text-gray-300"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="text-white font-bold hover:text-gray-300"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <Button><LogoutOutlined/></Button>
            </>
          ) : (
            <>
              {" "}
              <Link
                to="/sign-in"
                className="bg-white text-blue-600 px-2 py-1 rounded font-bold hover:bg-gray-100"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
        <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
      <MenuOutlined className="text-white text-2xl cursor-pointer" />
    </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
