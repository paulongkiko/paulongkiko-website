'use client'
import Head from "next/head";
import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { menu, logoInstagram, logoGithub, logoLinkedin } from 'ionicons/icons'


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const menuTop = isMenuOpen ? '9%' : '-100%';

  return (
    <div>
      <Head>
        <title>Paul Ongkiko</title>
      </Head>

      <main className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
        <header className="bg-white py-3">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <h1 className="text-2xl font-gotham cursor-pointer hover:text-[#a1bcea] duration-200">PAUL ONGKIKO</h1>
            <div className={`md:static absolute md:min-h-fit bg-white min-h-[60vh] left-0 top-[${menuTop}] md:w-auto w-full flex items-center px-5`}>
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                  <a className="hover:text-[#a1bcea] duration-200  " href="#">About Me</a>
                </li>
                <li>
                  <a className="hover:text-[#a1bcea] duration-200 " href="#">Skills</a>
                </li>
                <li>
                  <a className="hover:text-[#a1bcea] duration-200 " href="#">Projects</a>
                </li>
                <li>
                  <a className="hover:text-[#a1bcea] duration-200 " href="#">Photography</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] duration-200" >Resume</button>
              <IonIcon onClick={toggleMenu} icon={menu} className="text-3xl cursor-pointer md:hidden"/>
            </div>
          </nav>
        </header>
        
        <section className="py-3 m-20 flex flex-col md:flex-row md:items-center">
          <img src="./xvcki-7.jpg" alt="Paul Ongkiko" className="w-auto h-96 md:order-2 md:ml-auto rounded-full"/>
            <div className="text-white md:ml-4 md:mb-auto">
              <h1 className="font-gotham text-6xl">Hello, I&apos;m Paul Ongkiko</h1>
              <h1 className="font-gotham text-4xl">Developer and Photographer</h1>
              <p className="font-gotham text-lg"></p>
              <p className="font-gotham text-lg">I love chasing the aesthetic, whether through taking pictures, building outfits, or design.</p>
                <div className="flex flex-col gap-4 md:flex-row">
                  <a href="https://www.linkedin.com/in/paul-ongkiko-b340b4237/" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={logoLinkedin} className="cursor-pointer text-5xl hover:text-black duration-200" />
                  </a>
                  <a href="https://github.com/paulongkiko" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={logoGithub} className="cursor-pointer text-5xl hover:text-black duration-200" />
                  </a>
                  <a href="https://www.instagram.com/paulsviewfinder/" target="_blank" rel="noopener noreferrer">
                    <IonIcon icon={logoInstagram} className="cursor-pointer text-5xl hover:text-black duration-200" />
                  </a>
                </div>
            </div>
        </section>

        <section className="bg-gradient-to-t from-[#a6c1ee] to-[#fbc2eb]">
          <div className="bg-white py-3 mx-10 rounded-3xl">
            <div className="px-10 py-4">
              <h2 className=" font-gotham text-3xl">Skills</h2>
            </div>
          </div>
        </section>
        
        <section className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
          <div className="bg-white py-3 mx-10 rounded-3xl">
            <div className="px-10 py-4">
              <h2 className="font-gotham text-3xl">Projects</h2>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-t from-[#a6c1ee] to-[#fbc2eb]">
          <div className="bg-white py-3 mx-10 rounded-3xl">
            <div className="px-10 py-4">
              <h2 className="font-gotham text-3xl mb-5">Photography</h2>
              <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
                <img src="./xvcki-26.jpg" alt=""/>
                <img src="./whiteCoat-43.jpg" alt=""/>
                <img src="./Ongkiko_FP_4.jpg" alt=""/>
                <img src="./Ongkiko_P3_2.jpg" alt=""/>
                <img src="./washuSoloshoot-1.jpg" alt=""/>
                <img src="./IMG_3573.jpg" alt=""/>
                <img src="./IMG_5026.jpg" alt=""/>
                <img src="./Ongkiko_P3_4.jpg" alt=""/>
                <img src="./IMG_6466.jpg" alt=""/>
                <img src="./IMG_6521.jpg" alt=""/>
                <img src="./IMG_5105.jpg" alt=""/>
                <img src="./Ongkiko.A5.4.jpg" alt=""/>
                <img src="./IMG_6784.jpg" alt=""/>
                <img src="./Ongkiko_FP_5.jpg" alt=""/>
                <img src="./ChristianGraduation-10.jpg" alt=""/>
              </div>
            </div>
          </div>
          <h5 className="font-gotham flex items-center justify-center text-white">Designed by Paul Ongkiko</h5>
        </section>
        
      </main>
    </div>
  )
}
