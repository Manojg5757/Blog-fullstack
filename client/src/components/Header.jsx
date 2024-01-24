import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className=" cursor-pointer self-center whitespace-nowrap font-semibold text-sm sm:text-xl dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 rounded-xl text-white">
          Wandering
        </span>
        <span>Coders</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button color="gray" className="w-12 h-10 lg:hidden" pill>
        <AiOutlineSearch />
      </Button>
      <div className=" flex gap-2 md:order-2">
        <Button className="w-12 h-10 sm:inline hidden" color="gray" pill>
          <FaMoon />
        </Button>
        <Button className=" bg-gradient-to-r from-black-400 to-white-400">
          <Link to="/signin">Signin</Link>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link  active={path === '/about'} as={'div'}>
          <Link to="/about" >About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/contact'} as={'div'}>
          <Link to="/contact"  >Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
