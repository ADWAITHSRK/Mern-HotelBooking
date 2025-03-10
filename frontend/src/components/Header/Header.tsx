import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu,Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons"

const Header = () => {
  const  isLoggedIn  = false
  const menu = (
    <Menu>
      {isLoggedIn ? (
        <>
          {" "}
          <Menu.Item key="my-bookings">
            <Link to="/my-bookings">My Bookings</Link>
          </Menu.Item>
          <Menu.Item key="my-hotels">
            <Link to="/my-hotels">My Hotels</Link>
          </Menu.Item>
          <Menu.Item key="sign-out">
            <Button><LogoutOutlined/></Button>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="sign-in">
            <Link to="sign-in">Sign In</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
  return (
    <div className="bg-blue-700 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
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
          <Dropdown overlay={menu} trigger={["click"]}>
            <MenuOutlined className="text-white text-2xl cursor-pointer" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
