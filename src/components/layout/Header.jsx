"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

// import { AcmeLogo } from "./AcmeLogo";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
// import CartSideBar from "../general/CartSideBar";
// import { getCookie } from "@/hooks/cookies";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Logo2 } from "@/assets";
// import CustomAutocomplete from "../General/CustomAutocomplete";
// import CustomAutocomplete from "./SeacrhModal";
// import { API } from "@/api";
// import useItemStore from "@/store";

const Header = () => {
  const pathname = usePathname();
  const DeskTopMenuItem = [
    {
      name: "Snakes Box",
      link: "/snakes-box",
    },
    {
      name: "Current Giveaway!",
      link: "/current-giveaway!",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const additionalMenuItems = [
    {
      name: "Snakes Box",
      link: "/snakes-box",
    },
    {
      name: "Current Giveaway!",
      link: "/current-giveaway!",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const { reFetch, numberOfItems, setNumberOfItems } = useItemStore();
  const router = useRouter();
  // const authorized = getCookie("token") ? true : false;

  const handleCartClick = () => {
    if (authorized) {
      setIsCartOpen(true);
    } else {
      router.push("login");
    }
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  useEffect(() => {
    if (isMenuOpen) {
      window.scrollTo({
        top: 90,
        behavior: "smooth",
      });
    }
  }, [isMenuOpen]);

  const [hide, setHide] = useState(false);

  return (
    <>
      <Navbar
        position="sticky"
        maxWidth="full"
        isMenuOpen={isMenuOpen}
        isBlurred={true}
        onMenuOpenChange={setIsMenuOpen}
        className="flex justify-center items-center gap-3 custom-header"
      >
        <NavbarBrand className="flex justify-stat  ">
          <Link href="/">
            <Image
              src={Logo2}
              width={74}
              height={40}
              className="w-auto h-[75px]"
              unoptimized
            />
          </Link>
        </NavbarBrand>
        {/* <NavbarContent className="block sm:hidden" justify="start">
          <NavbarMenuToggle
            className="text-white h-[40px] w-[40px]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent> */}

        <NavbarContent className="hidden sm:flex   gap-4 desktop-menu-item uppercase !justify-between text-white text-base">
          {DeskTopMenuItem.map((item, key) => (
            <div
              key={key}
              className="relative py-6   "
              onMouseEnter={() => setDropdownIndex(key)}
              onMouseLeave={() => setDropdownIndex(null)}
            >
              <Link
                href={item.link}
                className="  whitespace-nowrap text-sm font-normal rubick text-white hover:text-[#ED1B24] cursor-pointer"
              >
                {item.name}
              </Link>
              {item.subMenu && dropdownIndex === key && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg">
                  {item.subMenu.map((subItem, subKey) => (
                    <Link
                      key={subKey}
                      href={subItem.link}
                      className="  rubick  block px-4 py-3 text-sm font-medium text-black hover:text-[#fc4242] cursor-pointer"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </NavbarContent>

        {/* <NavbarContent
            className={`${
              hide ? "hidden sm:block" : "flex  desktop-menu items-center"
            } `}
          ></NavbarContent> */}

        <NavbarContent justify="end">
          <NavbarItem className="flex items-center flex-row-reverse gap-4  ">
            <NavbarMenuToggle
              className="text-white h-[40px] w-[40px] block sm:hidden"
              justify="start"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
            <div className="relative cursor-pointer" onClick={handleCartClick}>
              {/* <LiaShoppingBagSolid className="text-white text-2xl md:text-3xl cursor-pointer  " /> */}
              <svg
                width="30"
                height="34"
                viewBox="0 0 30 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.42996 10.3928H4.13219L1.79553 28.6418C1.79553 30.0814 2.77515 31.2493 3.98128 31.2493H25.9968C27.2046 31.2493 28.1842 30.0814 28.1842 28.6418L25.8475 10.3911L8.42996 10.3928Z"
                  stroke="white"
                  stroke-width="1.49926"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.183 8.71452C10.183 5.40567 12.1943 2.72437 14.6753 2.72437C17.158 2.72437 19.1677 5.40567 19.1677 8.71452"
                  stroke="white"
                  stroke-width="1.49926"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {/* {numberOfItems > 0 && (
                <span className="absolute GeneralSans text-red-700 top-2 left-2 text-sm font-bold bg-white rounded-full w-4 h-4 flex justify-center items-center">
                  {numberOfItems}
                </span>
              )} */}
            </div>

            {/* {authorized ? ( */}
            <Link href="/user">
              {/* <LuUser2 className="text-white text-2xl md:text-3xl" /> */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.9265 26.8148L26.8055 26.2942C28.6276 25.2152 29.75 23.2211 29.75 21.063V12.9368C29.75 10.7788 28.6276 8.78465 26.8055 7.70563L19.9445 3.64252C18.1224 2.5635 15.8776 2.5635 14.0555 3.64252L7.19449 7.70563C5.37243 8.78465 4.25 10.7788 4.25 12.9368V21.063C4.25 23.2211 5.37243 25.2152 7.19449 26.2942L8.07352 26.8148M25.9265 26.8148L19.9445 30.3573C18.1224 31.4363 15.8776 31.4363 14.0555 30.3573L8.07352 26.8148M25.9265 26.8148C24.1444 23.6557 20.8142 21.5303 17 21.5303C13.1858 21.5303 9.85556 23.6557 8.07352 26.8148"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <circle
                  cx="4.25"
                  cy="4.25"
                  r="4.25"
                  transform="matrix(1 0 0 -1 12.75 17)"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <Link href="/user">
              {/* <CiSearch className="text-white text-2xl md:text-3xl" /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            {/* // ) : (
              <>
                  <Link href="/login">
                   <LuUser2 className="text-white" />
                 </Link>
               </>
             )} */}

            {/* <CustomAutocomplete setHide={setHide} /> */}
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="mob-br">
          {additionalMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="GeneralSans w-full text-black hover:text-[#ED1B24]"
                href={item.link}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {/* <CartSideBar isOpen={isCartOpen} onClose={handleCloseCart} /> */}
    </>
  );
};

export default Header;
