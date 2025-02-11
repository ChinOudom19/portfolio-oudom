import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu4Fill } from "react-icons/ri";
import { Link as ScrollLink } from 'react-scroll';
import Menu from '../data/Menu';
import Socials from '../data/Socials';

const Nav = ({ linkStyles, spy }) => {
  const [bgColor, setBgColor] = useState("bg-white");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const location = useLocation(false);
  const menuRef = useRef(null); // Ref to the mobile menu

  // Scroll Navbar
  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setBgColor(currentScrollY > 50 ? "bg-white/30 shadow-md backdrop-blur-sm" : "bg-white");
    };

    window.addEventListener('scroll', handleScroll);

    // Close the menu when clicking outside of the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.menu-icon')) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };

  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <section className={`w-full fixed top-0 py-3 xl:py-4 z-50 transition-all duration-300 ${bgColor}`}>
      <div className='flex container mx-auto justify-between items-center'>
        <Link to="/" className='font-primary text-2xl tracking-[4px]'>
          <span>Skin Care</span>
        </Link>
        <div className='hidden sm:flex gap-6'>
          {Menu.map((item, index) => (
            item.path.startsWith("#") ? (
              <ScrollLink
                key={index}
                to={item.path.substring(1)}
                smooth={true}
                spy={spy}
                activeClass="text-accetn font-bold"
                className={linkStyles}
              >
                {item.label}
              </ScrollLink>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={`${linkStyles} ${location.pathname === item.path ? "text-[#7edad2]" : ""} transition-colors duration-300`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
        <div className='hidden sm:flex gap-2 text-2xl'>
          {Socials.map((item, index) => (
            <Link to={item.path} key={index}><span className='hover:text-accent'>{item.icon}</span></Link>
          ))}
        </div>
        {/* Mobile Menu Icon */}
        <div className='text-xl font-bold hover:text-accent sm:hidden menu-icon' onClick={toggleMenu}>
          <RiMenu4Fill />
        </div>
      </div>
      {/* Mobile Menu - Visible when isMenuOpen is true */}
      <div
        ref={menuRef} // Attach the ref to the menu div
        className={`sm:hidden bg-white shadow-md absolute top-0 left-0 right-0 p-6 transform transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className='flex flex-col items-center gap-4'>
          {Menu.map((item, index) => (
            item.path.startsWith("#") ? (
              <ScrollLink
                key={index}
                to={item.path.substring(1)}
                smooth={true}
                spy={spy}
                activeClass="text-accent font-bold"
                className={linkStyles}
              >
                {item.label}
              </ScrollLink>
            ) : (
              <Link
                key={index}
                to={item.path}
                className={`${linkStyles} ${location.pathname === item.path ? "text-[#7edad2]" : ""} transition-colors duration-300`}
                onClick={toggleMenu} // Close the menu when clicked
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nav;