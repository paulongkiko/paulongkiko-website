import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paul Ongkiko</title>
      </Head>

      <main className="bg-white px-10">
        
        <section className="min-h-screen">
          <nav className=" py-10 mb-10 flex justify-between">
            <h1 className="text-2xl font-gotham">PAUL ONGKIKO</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
            </ul>
          </nav>
          <div>
            <img src="./eboardShoot2023-3.jpg" alt="Paul Ongkiko" className="mx-auto rounded-full w-60 h-60"></img>
          </div>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 font-gotham">About Me</h2>
            <h3 className="text-2xl py-2">Software Engineer and Photographer.</h3>
            <p className="text-md py-3 leading-8 mx-auto max-w-md">
              Undergraduate pursuing a BA in Computer Science at <span className="text-blue-700 font-bold">Saint Louis University</span>. Expected Graduation 2025.
            </p>
          </div>
          <div className="text-4xl py-2 flex justify-center gap-10">
            <a href="https://www.linkedin.com/in/paul-ongkiko-b340b4237/"><AiFillLinkedin /></a>
            <a href="https://github.com/paulongkiko"><AiFillGithub /></a>
            <a href="https://www.instagram.com/paulsviewfinder/"><AiFillInstagram /></a>
          </div>
        </section>
        <section>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 font-gotham">SWE Portfolio</h2>
            <div className="lg:flex gap-10">
            <div className="p-10 shadow-lg rounded-xl my-10 flex flex-col items-center min-w-min">
                <h3 className="text-2xl py-2">Spotify Search Engine</h3>
                <h2>Javascript, React</h2>
                <a>Github</a>
                <a>Live</a>
              </div>
              <div className="p-10 shadow-lg rounded-xl my-10 flex flex-col items-center min-w-min">
                <h3 className="text-2xl pb-2">Personal Website</h3>
                <h2>Java</h2>
                <a>Github</a>
              </div>
              <div className="p-10 shadow-lg rounded-xl my-10 flex flex-col items-center min-w-min">
                <h3 className="text-2xl py-2">Memory Card Game</h3>
                <a>Github</a>
                <h2>Javascript, React</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 font-gotham">Photography Portfolio</h2>
          </div>
          <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
            <img src="./christianGraduation-10.jpg" alt=""/>
            <img src="./IMG_3573.jpg" alt=""/>
            <img src="./IMG_5026.jpg" alt=""/>
            <img src="./IMG_6466.jpg" alt=""/>
            <img src="./IMG_6521.jpg" alt=""/>
            <img src="./IMG_6784.jpg" alt=""/>
            <img src="./Ongkiko_FP_4.jpg" alt=""/>
            <img src="./Ongkiko_P3_4.jpg" alt=""/>
            <img src="./Ongkiko_FP_5.jpg" alt=""/>
            <img src="./washuSoloshoot-1.jpg" alt=""/>
          </div>
          <div className="text-center pt-5 pb-10">
            <h3 className="text-3xl font-gotham pb-2">Gear and Software</h3>
            <h3 className="text-2xl pb-2">Cameras</h3>
            <ul className="pb-5">
              <li>Canon t7i - 50mm Prime f/1.8, 18-55mm f/3.5 - 5.6</li>
              <li>Canon Sure Shot Telemax</li>
              <li>Samsung Galaxy Z-Flip 4</li>
            </ul>
            <h3 className="text-2xl pb-2">Software</h3>
            <ul>
              <li>Lightroom</li>
              <li>Photoshop</li>
              <li>Bridge</li>
              <li>Premiere Pro</li>
              <li>CapCut</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
