import Link from "next/link";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { FaChevronDown, FaHamburger } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" z-50 text-white fixed w-full ">
      <div className=" w-full relative p-2 max-md:hidden">
        <div className="container max-w-7xl mx-auto px-4  ">
          <div className="flex justify-between w-full">
            <div className=" gap-6 flex">
              <div className="">
                <ul className="flex gap-5">
                  <li>
                    <a className="flex gap-3" href="tel:+21234567897">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone"
                        className="size-5 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                        />
                      </svg>
                      +2 123 4567 897
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex gap-3"
                      href="/cdn-cgi/l/email-protection#61080f070e210419000c110d044f020e0c"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        className="size-5 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                        />
                      </svg>
                      <span
                        className="__cf_email__"
                        data-cfemail="5930373f36193c21383429353c773a3634"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className=" flex gap-4">
                <a href="/">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    className="size-5 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                    />
                  </svg>
                </a>
                <a href="/">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="size-5 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </a>
                <a href="/">
                  {" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    className="size-5 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
                <a href="/">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    className="size-5 "
                    data-icon="linkedin"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div className=" bg-none flex items-center gap-1">
                <div className="lang">
                  <select name="lang" className="select bg-transparent">
                    <option className="option" value={1}>
                      ENG
                    </option>
                    <option className="option" value={2}>
                      RUS
                    </option>
                    <option className="option" value={3}>
                      ROM
                    </option>
                    <option className="option" value={4}>
                      FRA
                    </option>
                    <option className="option" value={5}>
                      ESP
                    </option>
                    <option className="option" value={6}>
                      POR
                    </option>
                  </select>
                </div>
                <div >
                  <select name="currency" className=" bg-transparent">
                    <option value={1}>USD</option>
                    <option value={2}>EUR</option>
                    <option value={3}>AUD</option>
                    <option value={4}>BRL</option>
                    <option value={5}>CAD</option>
                    <option value={6}>MXN</option>
                  </select>
                </div>
                <div className="account">
                  <a
                    href="/#"
                    className="flex gap-3 items-center leading-[-10px]"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right-to-bracket"
                      className="size-5 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                      />
                    </svg>
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="   ">
        <nav className="">
          <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
            <a className="" href="/">
              <img
                src="https://travelox.vercel.app/img/logo/logo.png"
                className="logo-display w-[200px] h-full"
                alt="thumb"
              />
            </a>

            <button className=" md:hidden">
              <BiMenu className="size-[20px]" />
            </button>

            <div className=" max-md:hidden flex   " id="main_nav">
              <ul className=" ms-auto gap-5 flex items-center mr-5 ">
                <NavItem name="Home" />
                <NavItem name="Destination" />
                <NavItem name="Tours" />
                <NavItem name="Pages" />
                <NavItem name="Blogs" />
                <li className="  text-[14px] flex items-center gap-2  uppercase ">
                  <div
                    className=" "
                    data-bs-toggle="dropdown"
                  >
                    CONTACT
                  </div>
                </li>
              </ul>
              <div className=" max-lg:hidden">
                <Link className="theme-btn flex items-center hover:opacity-80" href="/#">
                  BOOK NOW{" "}
                  <svg
                    aria-hidden="true"
                    className="size-5 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

const NavItem = ({ name }: { name: string }) => {
  return (
    <li className=" cursor-pointer dropdown  text-[14px] flex items-center gap-2  uppercase ">
      <div className=" ">
        {name}
      </div>
      <FaChevronDown />
    </li>
  );
};
