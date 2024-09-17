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

// import CartSideBar from "../general/CartSideBar";
// import { getCookie } from "@/hooks/cookies";
import { usePathname, useRouter } from "next/navigation";
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
        <NavbarContent className="block sm:hidden" justify="start">
          <NavbarMenuToggle
            className="text-white h-[40px] w-[40px]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

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
                className="GeneralSans whitespace-nowrap text-sm font-medium text-white hover:text-[#fc4242] cursor-pointer"
              >
                {item.name}
              </Link>
              {item.subMenu && dropdownIndex === key && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg">
                  {item.subMenu.map((subItem, subKey) => (
                    <Link
                      key={subKey}
                      href={subItem.link}
                      className="GeneralSans  block px-4 py-3 text-sm font-medium text-black hover:text-[#fc4242] cursor-pointer"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </NavbarContent>

        <NavbarContent
          className={`${
            hide ? "hidden sm:block" : "flex  desktop-menu items-center"
          } `}
        >
          <NavbarBrand className="flex justify-center py-2xxx">
            <Link href="/">{/* <AcmeLogo className="table" /> */}</Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="flex items-center flex-row-reverse gap-4  ">
            <div className="relative cursor-pointer" onClick={handleCartClick}>
              <LiaShoppingBagSolid className="text-white md:text-[19px] cursor-pointer  " />

              {/* {numberOfItems > 0 && (
                <span className="absolute GeneralSans text-red-700 top-2 left-2 text-sm font-bold bg-white rounded-full w-4 h-4 flex justify-center items-center">
                  {numberOfItems}
                </span>
              )} */}
            </div>

            {/* {authorized ? ( */}
              <Link href="/user">
                <LuUser2 className="text-white" />
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
                className="GeneralSans w-full text-black hover:text-[#FC4242]"
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
