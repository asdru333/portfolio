import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleNavbar = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const closeNavbar = () => {
        setIsOpenMenu(false)
    }
    
    let links = [
        {name:"ABOUT ME",link:"about-me"},
        {name:"EXPERIENCE",link:"experience"},
        {name:"EDUCATION",link:"education"},
        {name:"CERTIFICATES",link:"certificates"},
        {name:"PROJECTS",link:"projects"},
        {name:"CONTACT ME",link:"contact-me"},
    ];

    function scrollToId(id) {
        window.scrollTo(0, document.getElementById(id).offsetTop-105);
    }

    return (
        <div className='lg:flex 3xl:justify-center shadow-md w-full top-0 left-0 sticky z-[3] bg-[#d9e7f0] text-[#203447]'>
            <div className='lg:flex lg:justify-between items-center py-4 2xl:mx-48 xl:mx-32 md:mx-12 mx-2 text-lg font-semibold font-sans gap-2 w-full max-w-[2000px]'>
                {/* logo section */}
                <div className='font-bold cursor-pointer flex items-center lg:w-1/4 w-[125px]'>
                    <img onClick={() => {closeNavbar(); scrollToId("about-me")}} src={process.env.PUBLIC_URL + "/perfil-removebg2.png"} alt='Logo' className='lg:h-20 h-10'/>
                </div>
                {/* Menu icon */}
                <div onClick={toggleNavbar} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
                    {
                        isOpenMenu ? <XMarkIcon/> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <div className={`lg:flex justify-between lg:flex-row pl-2 lg:pl-0 lg:pb-0 pb-2 lg:pt-0 pt-4 lg:static lg:z-auto z-[-1] w-full left-0 absolute 
                transition-all duration-500 ease-in bg-[#d9e7f0] ${isOpenMenu ? 'flex flex-col' : 'hidden'}`}>
                {
                    links.map((link) => (
                        <div onClick={() => {closeNavbar(); scrollToId(link.link)}} className='block hover:text-white lg:mx-0 mx-4 my-2 cursor-pointer'>
                            {link.name}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;