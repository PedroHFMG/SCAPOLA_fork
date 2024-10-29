"use client";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-8 text-lg font-light text-black dark:text-white">
                Assessoria em Relações Públicas e Comunicação
              </h4>
              <h1 className="mb-5 pr-5 text-6xl font-medium text-black dark:text-white">
                Scapola Comunica                 
              </h1>          
              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Digite seu e-mail"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Comece aqui
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative">
                  <h4 className="text-5xl font-light text-black dark:text-white">
                    Uma marca é feita de histórias, <br/> vamos contar a sua?
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        href="https://wa.me/5531996955494"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
      </a>
    </>
  );
};

export default Hero;
