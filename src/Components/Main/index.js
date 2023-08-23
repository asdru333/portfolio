import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import {IoLogoNodejs, IoLogoAngular, IoLogoWordpress, IoLogoPython, IoLogoGithub} from "react-icons/io";
import {IoLogoReact, IoLogoAndroid, IoLogoFirebase, IoLogoJavascript, IoLogoLinkedin} from "react-icons/io5"
import {TbBrandCSharp, TbSql, TbBrandMongodb, TbBrandTypescript, TbPhone, TbMailFilled} from "react-icons/tb"
import {FaJava} from "react-icons/fa"
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Main() {

    const [primary, setPrimary] = useState(false)

    const [secundary, setSecundary] = useState(false)

    const [universitary, setUniversitary] = useState(false)

    return (
        <div id="main" className="flex justify-center bg-[#203447]">
          <div className="justify-center bg-[#203447] py-4 2xl:mx-48 xl:mx-32 md:mx-12 mx-2 text-lg font-sans gap-2 w-full max-w-[2000px] text-white">
            <div id="about-me" className="flex lg:flex-row flex-col-reverse gap-x-8 min-h-[85vh]">
              <div className="lg:w-1/2 w-full text-justify">
                <p className="2xl:text-2xl xl:text-xl text-lg">Hi, my name is <b>Asdrúbal Villegas Molina</b>.<br/><br/> 
                I'm a junior developer who just graduated from the University of Costa Rica with a bachelor's degree in Computing with Various Emphasis.<br/><br/>
                My expertise lies in crafting captivating digital experiences through the creation of <b>web</b> and <b>mobile</b> applications. With a deep-rooted love for the digital 
                realm, I combine technical prowess with creative ingenuity to bring innovative ideas to life. Let's connect and explore the endless possibilities of the 
                digital frontier together.<br/><br/>
                Web developments skills (fullstack):<br/>
                <div className="flex flex-wrap gap-x-8 mt-2 items-center">
                  <IoLogoNodejs className="h-10 w-10"/> <IoLogoAngular className="h-10 w-10"/> <IoLogoReact className="h-10 w-10"/> <TbBrandCSharp className="h-10 w-10"/>
                  <IoLogoWordpress className="h-10 w-10"/>
                </div>
                <br/>
                Mobile developments skills:<br/>
                <div className="flex gap-x-8 mt-2 items-center">
                  <IoLogoAndroid className="h-10 w-10"/> <IoLogoReact className="h-10 w-10"/>
                </div>
                <br/>
                Databases:<br/>
                <div className="flex gap-x-8 mt-2 items-center">
                  <TbSql className="h-10 w-10"/> <TbBrandMongodb className="h-10 w-10"/> <IoLogoFirebase className="h-10 w-10"/>
                </div>
                <br/>
                Programming languajes:<br/>
                <div className="flex gap-x-8 mt-2 items-center">
                  <TbBrandCSharp className="h-10 w-10"/> <IoLogoJavascript className="h-10 w-10"/> <TbBrandTypescript className="h-10 w-10"/> 
                  <FaJava className="h-10 w-10"/>  <IoLogoPython className="h-10 w-10"/>
                </div>
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <img src={process.env.PUBLIC_URL + "/perfil2.jpg"} alt="foto de perfil" className="lg:max-h-none max-h-[500px] h-full w-full object-cover"/>
              </div>
            </div>
            <div id="education" className="flex flex-col my-14">
              <p className="text-4xl font-bold">Education</p>
              <div className="flex lg:flex-row flex-col lg:gap-x-8 lg:gap-y-0 gap-y-2 justify-between my-6">
                <div className="flex flex-col gap-y-4">
                  <button className={`rounded-xl py-2 px-4 text-3xl ${primary  ? 'bg-[#d9e7f0] text-[#203447]' : 'bg-white text-[#203447]'}`} 
                  onClick={() => setPrimary(!primary)}>primary education</button>
                  <div className={`flex flex-col justify-center ${primary  ? 'inline' : 'hidden'}`}>
                    <img src={process.env.PUBLIC_URL + "/kamuk_school.png"} alt="Kamuk School logo" className="self-center w-[200px] h-[180px]"/>
                    <p className="text-2xl my-4 text-center self-center"><b>Kamuk School</b> (2010-2012)<br/>San Jose, Costa Rica.</p>
                  </div>
                  <div className={`flex flex-col justify-center ${primary  ? 'inline' : 'hidden'}`}>
                    <img src={process.env.PUBLIC_URL + "/claret.png"} alt="Claret logo" className="self-center w-[200px] h-[180px]"/>
                    <p className="text-2xl my-4 text-center self-center"><b>Claret College</b> (2007-2010)<br/>Caracas, Venezuela.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4">
                  <button className={`rounded-xl py-2 px-4 text-3xl ${secundary  ? 'bg-[#d9e7f0] text-[#203447]' : 'bg-white text-[#203447]'}`} 
                  onClick={() => setSecundary(!secundary)}>secundary education</button>
                  <div className={`flex flex-col justify-center ${secundary  ? 'inline' : 'hidden'}`}>
                    <img src={process.env.PUBLIC_URL + "/kamuk_school.png"} alt="Kamuk School logo" className="self-center w-[200px] h-[180px]"/>
                    <p className="text-2xl my-4 text-center self-center"><b>Kamuk School</b> 
                    (2013-2017)<br/>San Jose, Costa Rica.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4">
                  <button className={`rounded-xl py-2 px-4 text-3xl ${universitary  ? 'bg-[#d9e7f0] text-[#203447]' : 'bg-white text-[#203447]'}`} 
                  onClick={() => setUniversitary(!universitary)}>universitary education</button>
                  <div className={`flex flex-col justify-center ${universitary  ? 'inline' : 'hidden'}`}>
                    <img src={process.env.PUBLIC_URL + "/ucr-logo.jpeg"} alt="UCR logo" className="self-center w-[200px] h-[180px]"/>
                    <p className="text-2xl my-4 text-center self-center"><b>University of Costa Rica</b> (2018-2023)<br/>
                    San Jose, Costa Rica.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="certificates" className="flex flex-col my-14 gap-y-12">
              <p className="text-4xl font-bold">Certificates</p>
              <div id="Aditional courses">
                <Fade>
                <p className="text-3xl font-semibold">Aditional courses</p>
                <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/pythonProgramacion.jpg"} alt="carrusel 1" className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/habilidadesBlandas.jpg"} alt="carrusel 2" className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/ciberseguridadFidelitas.jpg"} alt="carrusel 3" className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/CursoInglesB2.jpg"} alt="carrusel 4" className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/matem.jpg"} alt="carrusel 5" className='lg:h-[700px] h-[450px]'/>
                  </div>
                </Carousel>
                </Fade>
              </div>
              <div id="Recognitions and honorable mentions">
                <Fade>
                <p className="text-3xl font-semibold">Recognitions and honorable mentions</p>
                <Carousel showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true}>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/ucrMencion.jpg"} alt="carrusel 1" className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/TecAdmision.jpg"} alt="carrusel 2" className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/BachilerConExcelencia.jpg"} alt="carrusel 3" className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/kamusExcelenciaAcadémica.jpg"} alt='carrusel 4' className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/mejoresPrimeroPromediosCircuito.jpg"} alt='carrusel 5' className='lg:h-[700px] h-[450px]'/>
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/mejoresTerceroPromediosCircuito.jpg"} alt='carrusel 6' className='lg:h-[700px] h-[450px]'/>
                  </div>
                </Carousel>
                </Fade>
              </div>
            </div>
            <div id="projects" className="flex flex-col my-14 gap-y-12">
              <Fade>
              <p className="text-4xl font-bold">Projects</p>
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">Development of a website for the company Dimeltro (2023).</p>
                <p className="lg:text-2xl text-xl lg:mb-0 mb-4"><b>Technologies:</b> React.js and tailwindcss.</p>
                <p className="lg:text-2xl text-xl mb-4">Dimeltro contracted me to make a website of their company. This is an informative website that has: home page,
                about page, contact page, projects page and the services that the company offers</p>
                <a href="https://www.dimeltro.com/" className="lg:text-2xl text-xl text-gray-400 mb-2">https://www.dimeltro.com/</a>
                <a href="https://www.dimeltro.com/">
                  <img src={process.env.PUBLIC_URL + "/dimeltro.jpg"} alt="Dimeltro main page" className='lg:h-[800px] md:h-[400px] sm:h-[300px] w-full'/>
                </a>
              </div>
              </Fade>
              <Fade>
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">Development of a personal website project: "El asado" (2023)</p>
                <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> Angular.js, tailwindcss and firebase.</p>
                <p className="lg:text-2xl text-xl mb-4">This is a website of a fictional steak restarant known as "El Asado". This website was made to prove my abilities 
                with Angular and Firebase. This website is composed by different pages like: a home page, about page, contact page, login page (including registration 
                and recover password), menu and cart.</p>
                <a href="https://elasado.netlify.app/" className="lg:text-2xl text-xl text-gray-400 mb-2">https://elasado.netlify.app/</a>
                <a href="https://elasado.netlify.app/">
                  <img src={process.env.PUBLIC_URL + "/elAsado.jpg"} alt="El Asado main page" className='lg:h-[800px] md:h-[400px] sm:h-[300px] w-full'/>
                </a>
              </div>
              </Fade>
              <Fade>
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">University final work: Development of Kane Taxi app (backend team) (2023)</p>
                <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> Firebase, Node.js and React Native.</p>
                <p className="lg:text-2xl text-xl mb-4">This is my final project, where I had to work in a team (backend team) and communicate with others teams to develop an 
                app with a real client. This app is Kane Taxi, a cooperative of women taxi drivers.</p>
                <a href="https://play.google.com/store/apps/details?id=ucr.ci0156.cooperativademujerestaxistas.client" className="text-gray-400 lg:text-2xl text-xl mb-2">
                  Kane Taxi app</a>
                <a href="https://play.google.com/store/apps/details?id=ucr.ci0156.cooperativademujerestaxistas.client">
                  <img src={process.env.PUBLIC_URL + "/kaneTaxi.jpg"} alt="Kane taxi in Google Play store" className='lg:h-[800px] md:h-[400px] sm:h-[300px] w-full'/>
                </a>
              </div>
              </Fade>
              <Fade>
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">University project: Development of Arce Shopping app (2022)</p>
                <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> Firebase, Node.js and React Native.</p>
                <p className="lg:text-2xl text-xl mb-4">With the help of a work team of 3 members we managed to create a shopping app from the fictional company Arce Shopping. 
                In the app features we can find: login (including registration and recover password), shop, cart and user profile.</p>
                <a href="https://github.com/solvalle/ArceShopping" className="lg:text-2xl text-xl text-gray-400 mb-2">Github</a>
                <a href="https://github.com/solvalle/ArceShopping">
                  <img src={process.env.PUBLIC_URL + "/arceShopping.jpg"} alt="Arce shopping login page (emulator)" className='lg:h-[800px] md:h-[400px] sm:h-[300px] w-full'/>
                </a>
              </div>
              </Fade>
              <Fade>
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">University project: Development of "Pizza Magma" website (2022)</p>
                <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> React.js and tailwind.</p>
                <p className="lg:text-2xl text-xl mb-4">With the help of a classmate we managed to create a fictional pizzeria known as Pizza Magma. Several functions 
                were included such as: menu, option to create a personalized pizza, information pages about the pizzeria, login (including registration and recover password) 
                and a shopping cart</p>
                <a href="https://pizzamagma.netlify.com" className="lg:text-2xl text-xl text-gray-400 mb-2">https://pizzamagma.netlify.com</a>
                <a href="https://pizzamagma.netlify.com">
                  <img src={process.env.PUBLIC_URL + "/pizzaMagma.jpg"} alt="Pizza Magma main page" className='lg:h-[800px] md:h-[400px] sm:h-[300px] w-full'/>
                </a>
              </div>
              </Fade>
              <Fade>
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">University project: Planetary Halley (2021)</p>
                <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> C#, .net and SQLServer.</p>
                <p className="lg:text-2xl text-xl mb-4">With the help of a work team of 6 members we managed to create a web page of a fictitious planetarium 
                with the name: Halley Planetarium. Various functions aimed at users and others aimed at system officials were included. Among the general elements 
                that the page has are: news, activities, frequently asked questions, educational games and graphs for data analysis.</p>
                <a href="https://github.com/Bryan1150/PI-Inge-Bases-Grupo-3" className="lg:text-2xl text-xl text-gray-400 mb-2">github</a>
                <a href="https://github.com/Bryan1150/PI-Inge-Bases-Grupo-3">
                  <img src={process.env.PUBLIC_URL + "/planetarioHalley.jpg"} alt="planetario Halley main page" className='lg:h-[800px] md:h-[400px] sm:h-[300px] w-full'/>
                </a>
              </div>
              </Fade>
            </div>
            <div id="contact-me" className="flex flex-col mt-14 mb-4 gap-y-8">
              <p className="text-4xl font-bold">Contact me</p>
              <p className="lg:text-2xl text-xl">Are you interested in my job? you can contact me:</p>
              <div className="flex lg:flex-row flex-col lg:justify-between gap-y-5">
                <a href="tel:+506-70462055" id="number" className="flex hover:text-[#d9e7f0]">
                  <TbPhone className="h-10 w-10"/>
                  <p className="self-end">(506) 70462055</p>
                </a>
                <a href="mailTo:asdrubal.villegas.molina@hotmail.com" id="mail" className="flex hover:text-[#d9e7f0]">
                  <TbMailFilled className="h-10 w-10"/>
                  <p className="self-end">asdrubal.villegas.molina@hotmail.com</p>
                </a>
                <a className="flex hover:text-[#d9e7f0]" href="https://github.com/asdru333" id="github">
                  <IoLogoGithub className="h-10 w-10"/>
                  <p className="self-end">https://github.com/asdru333</p>
                </a>
                <a className="flex hover:text-[#d9e7f0]" href="www.linkedin.com/in/asdrubal-antonio-villegas-molina" id="github">
                  <IoLogoLinkedin className="h-10 w-10"/>
                  <p className="self-end">www.linkedin.com/in/asdrubal-antonio-villegas-molina</p>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }