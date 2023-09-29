import React from "react";
import { one } from "../assets";
const about = () => {
  return (
    <section id="about">
      <div className=" my-24 mx-auto md:px-6 mb-24">
        <section className="mb-0 text-center md:text-left">
          <div className="block rounded-lg bg-white  shadow-2xl shadow-black/15 dark:shadow-black/50 dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src={one}
                  alt="Trendy Pants and Shoes"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                    About Us
                  </h2>
                  <p className="mb-4 font-semibold">Auto ecole</p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam.
                  </p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                    Ad, at blanditiis quaerat laborum officia incidunt
                    cupiditate dignissimos voluptates eius aliquid minus
                    praesentium! Perferendis et totam ipsum ex aut earum libero
                    accusamus voluptas quod numquam saepe, consequuntur nihil
                    quia tenetur consequatur. Quis, explicabo deserunt quasi
                    assumenda ea maiores nulla, et dolor saepe praesentium natus
                    error reiciendis voluptas iste. Esse, laudantium ipsum
                    animi, quos voluptatibus atque vero repellat sit eligendi
                    autem maiores quasi cum aperiam. Aperiam rerum culpa
                    accusantium, ducimus deserunt aliquid alias vitae quasi
                    corporis placeat vel maiores explicabo commodi!
                  </p>
                  <ul className="flex justify-center md:justify-start">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        className="w-5 text-primary dark:text-primary-400"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default about;
