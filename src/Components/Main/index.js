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
                <img src={process.env.PUBLIC_URL + "/perfil3.jpg"} alt="foto de perfil" className="lg:max-h-none max-h-[500px] h-full w-full object-cover"/>
              </div>
            </div>
            <div id="experience" className="flex flex-col my-14 gap-y-6">
              <p className="text-4xl font-bold mb-4">Experience</p>
                <Fade>
                <div className="flex flex-col lg:gap-x-8 lg:gap-y-4 gap-y-2">
                  <p className="text-3xl font-semibold"><img src={process.env.PUBLIC_URL + "/cyracom-logo.png"} className="h-10 w-18 inline mr-2" alt="Cyracom logo"/>
                  Customer service at Cyracom (2024 - Present)</p>
                  <p className="lg:text-2xl text-xl">As an interpreter and support specialist, my focus is on ensuring that customer inquiries and technical issues 
                    are addressed with accuracy and efficiency. This includes the ability to interpret and convey complex information clearly and concisely, as well 
                    as resolving issues in real-time to ensure customer satisfaction in various fields such as technology, healthcare, insurance, banking, and emergency 
                    services.</p>
                </div>
                </Fade>

                <Fade>
                <div className="flex flex-col lg:gap-x-8 lg:gap-y-4 gap-y-2">
                  <p className="text-3xl font-semibold"><img src={process.env.PUBLIC_URL + "/Gao-logo.jpg"} className="h-10 w-18 inline mr-2" alt="GAO logo"/>
                  Tech support and then team leader at GAO Tek Inc (2023 - 2024)</p>
                  <p className="lg:text-2xl text-xl"><b>Team leader:</b> By demonstrating my skills in technical support, I was promoted to Assistant Team Leader 
                  and shortly after I ascended to Team Leader. My responsibility involved carrying out administrative, supervision, development and training tasks. 
                  Soft skills such as leadership and decision-making were fundamental in performing this role. Additionally, since I worked with a team composed of 
                  members from different cultures, understanding how to operate in a multicultural environment and being adaptable were crucial aspects.
                  <br/><br/>
                  <b>Tech support:</b> I took an internship at the company GAO Tek Inc as tech support. Due to my experience in web development, my main job was to 
                  help develop different web pages that describe the different products that the company offers.</p>
                </div>
                </Fade>

                <Fade>
                <div className="flex flex-col lg:gap-x-8 lg:gap-y-4 gap-y-2">
                  <p className="text-3xl font-semibold"><img src={process.env.PUBLIC_URL + "/dimeltro-logo.png"} className="h-10 w-18 inline mr-2" alt="Dimeltro logo"/>
                  Development of a website for the company Dimeltro (2023)</p>
                  <p className="lg:text-2xl text-xl">A functional and attractive website was created and designed for the company Dimeltro S.A. that reflected the 
                    company's identity. The work spanned from the initial planning, involving constant communication with the client, to the implementation of key site 
                    functionalities</p>
                  <p className="lg:text-2xl text-xl"><b>Technologies:</b> React.js and tailwindcss.</p>
                  <p><a href="https://www.dimeltro.com/" className="lg:text-2xl text-xl text-gray-400 mb-2 hover:text-white">https://www.dimeltro.com/</a></p>
                </div>
                </Fade>

                <Fade>
                <div className="flex flex-col lg:gap-x-8 lg:gap-y-4 gap-y-2">
                  <p className="text-3xl font-semibold"><img src={process.env.PUBLIC_URL + "/ucr-logo.jpeg"} className="h-12 w-12 inline mr-2" alt="Gao logo"/>
                  teacher assitant at the University of Costa Rica (2023)</p>
                  <p className="lg:text-2xl text-xl">Roles performed:</p>
                    <ul className="lg:text-2xl text-xl list-item list-disc ml-6">
                      <li>Coordination of administrative tasks, facilitating the smooth operation of academic activities.</li>
                      <li>Tutoring and mentoring students, guiding them in their academic development.</li>
                      <li>Assisting students in communicating with the professor.</li>
                      <li>Evaluation and grading of exams and projects.</li>
                    </ul>
                </div>
                </Fade>

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
              <p className="text-4xl font-bold">Projects</p>
              <div className="flex flex-col gap-y-8 items-start">

                <div className="flex lg:flex-row flex-col w-full justify-between lg:items-start items-center gap-x-6 gap-y-8">
                  <Fade className="flex flex-col items-center gap-y-4 lg:w-[700px] w-full mx-6">
                    <div className="flex flex-col">
                      <p className="text-3xl font-semibold mb-4"><strong>Development of a website for the company Dimeltro (2023)</strong>.</p>
                      <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> React.js and tailwindcss.</p>
                      <a href="https://www.dimeltro.com/">
                        <img src={process.env.PUBLIC_URL + "/dimeltro.jpg"} alt="Dimeltro main page" className='lg:h-[500px] md:h-[350px] w-full
                        hover:opacity-30'/>
                      </a>
                    </div>
                  </Fade>
                
                  <Fade className="flex flex-col items-center gap-y-4 lg:w-[700px] w-full mx-6">
                    <div className="flex flex-col">
                      <p className="text-3xl font-semibold mb-4"><strong>Development of a personal website project: "El asado" (2023)</strong></p>
                      <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> Angular.js, tailwindcss and firebase.</p>
                      <a href="https://elasado.netlify.app/">
                        <img src={process.env.PUBLIC_URL + "/elAsado.jpg"} alt="El Asado main page" className='lg:h-[500px] md:h-[350px] w-full hover:opacity-30'/>
                      </a>
                    </div>
                  </Fade>
                </div>

                <div className="flex lg:flex-row flex-col w-full justify-between lg:items-start items-center gap-x-6 gap-y-8">
                  <Fade className="flex flex-col items-center gap-y-4 lg:w-[700px] w-full mx-6">
                  <div className="flex flex-col">
                    <p className="text-3xl font-semibold mb-4"><strong>University final work: Development of Kane Taxi app (backend team) (2023)</strong></p>
                    <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> Firebase, Node.js and React Native.</p>
                    <a href="https://play.google.com/store/apps/details?id=ucr.ci0156.cooperativademujerestaxistas.client">
                      <img src={process.env.PUBLIC_URL + "/kaneTaxi.jpg"} alt="Kane taxi in Google Play store" className='lg:h-[500px] md:h-[350px] w-full
                      hover:opacity-30'/>
                    </a>
                  </div>
                  </Fade>

                  <Fade className="flex flex-col items-center gap-y-4 lg:w-[700px] w-full mx-6">
                  <div className="flex flex-col">
                    <p className="text-3xl font-semibold mb-4"><strong>University project: Development of Arce Shopping app (2022)</strong></p>
                    <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> Firebase, Node.js and React Native.</p>
                    <a href="https://github.com/solvalle/ArceShopping">
                      <img src={process.env.PUBLIC_URL + "/arceShopping.jpg"} alt="Arce shopping login page (emulator)" 
                      className='lg:h-[500px] md:h-[350px] w-full hover:opacity-30'/>
                    </a>
                  </div>
                  </Fade>
                </div>

                <div className="flex lg:flex-row flex-col w-full justify-between lg:items-start items-center gap-x-6 gap-y-8">
                  <Fade className="flex flex-col items-center gap-y-4 lg:w-[700px] w-full mx-6">
                  <div className="flex flex-col">
                    <p className="text-3xl font-semibold mb-4"><strong>University project: Development of "Pizza Magma" website (2022)</strong></p>
                    <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> React.js and tailwind.</p>
                    <a href="https://pizzamagma.netlify.com">
                      <img src={process.env.PUBLIC_URL + "/pizzaMagma.jpg"} alt="Pizza Magma main page" className='lg:h-[500px] md:h-[350px] w-full 
                      hover:opacity-30'/>
                    </a>
                  </div>
                  </Fade>

                  <Fade className="flex flex-col items-center gap-y-4 lg:w-[700px] w-full mx-6">
                  <div className="flex flex-col">
                    <p className="text-3xl font-semibold mb-4"><strong>University project: Planetary Halley website (2021)</strong></p>
                    <p className="lg:text-2xl text-xl mb-4"><b>Technologies:</b> C#, .net and SQLServer.</p>
                    <a href="https://github.com/Bryan1150/PI-Inge-Bases-Grupo-3">
                      <img src={process.env.PUBLIC_URL + "/planetarioHalley.jpg"} alt="planetario Halley main page" className='lg:h-[500px] md:h-[350px] w-full 
                      hover:opacity-30'/>
                    </a>
                  </div>
                  </Fade>
                </div>

              </div>
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
                <a className="flex hover:text-[#d9e7f0]" href="https://www.linkedin.com/in/asdrubal-antonio-villegas-molina" id="linkedin">
                  <IoLogoLinkedin className="h-10 w-10"/>
                  <p className="self-end">www.linkedin.com/in/asdrubal-antonio-villegas-molina</p>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }