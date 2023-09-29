import React, { useState, useEffect } from "react";
import { bg, bg2, bg3, logo } from "../assets";

const images = [bg, bg2, bg3]; // List of background images

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next image index to display
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImageIndex);
    }, 9000); //  seconds in milliseconds

    return () => {
      clearInterval(intervalId); // Clear interval when component unmounts
    };
  }, [currentImageIndex]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="hero">
      <section className="mb-0 h-[100%] ">
        <nav
          className="relative flex w-full flex-col items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start "
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-6">
            <div className="flex items-center">
              <button
                className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleMenu}
              >
                <span className="[&>svg]:w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <a className="text-primary dark:text-primary-400" href="#!">
                <img src={logo} alt="logo" className="w-[30px] h-[30px]" />
              </a>
            </div>

            <div
              className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContentY"
              data-te-collapse-item
            >
              <ul
                className="mr-auto lg:flex lg:flex-row"
                data-te-navbar-nav-ref
              >
                <li data-te-nav-item-ref>
                  <a
                    className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="#schedule"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    disabled
                  >
                    Schedule
                  </a>
                </li>
                <li data-te-nav-item-ref>
                  <a
                    className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="#team"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                  <a
                    className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                    href="#contact"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
              <button
                type="button"
                className={`${
                  isOpen ? "hidden" : "block"
                } mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"`}
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Login
              </button>
              <button
                type="button"
                className={`${
                  isOpen ? "hidden" : "block"
                } inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign up for free
              </button>
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden w-full `}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#hero"
                className="text-gray-700 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>

              <a
                href="#service"
                className="text-gray-700 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </a>
              <a
                href="#team  "
                className="text-gray-700 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div className=" relative">
          <div
            className=" py-24 px-6 text-center h-[100vh] overflow-hidden bg-no-repeat bg-cover bg-[20%]  "
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              zIndex: 1,
            }}
          >
            <div
              className="absolute inset-0 bg-black opacity-[50%] h-[100vh] bottom-0"
              style={{ zIndex: 1 }}
            ></div>
            <div className="relative z-10 ">
              <h1 className="mt-2 mb-16 text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
                Drive Confidently Choose Excellence <br />
                <span className="text-primary ">for Your Journey</span>
              </h1>
              <a
                className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-[0.4s] ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                className="border-2 border-white inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white transition duration-[0.5s] ease-in-out hover:border-white hover:text-white hover:bg-neutral-500 hover:bg-opacity-10 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
