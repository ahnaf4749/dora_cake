// import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/download-removebg-preview.png'
import './Navbar.css'
const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const menuitems = (

        <>
            <li className="text-white text-base font-semibold">
                <a href="/#about">About</a>
            </li>
            <li className="text-white text-base font-semibold">
                <a href="/#token">Tokenomics</a>
            </li>
            <li className="text-white text-base font-semibold">
                <a href="/#roadmap">Roadmap</a>
            </li>
            <li className="text-white text-base font-semibold ">
                <a href="/#chart">Chart<sub>(soon)</sub></a>
            </li>
        </>
    );

    return (
        <div className={colorChange ? 'navbar-bg' : 'bg-[#75B1D1]'}>
            <div className="drawer  mx-auto max-w-screen-xl ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar ">

                        <img className='lg:h-20 lg:w-20 h-12 w-12 mr-5' src={logo} />
                        <div className="flex-1 text-5xl font-bold text-white"><span className="text-[#CD6501]">$</span>DORA</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {menuitems}
                            </ul>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#75B1D1]">
                        {menuitems}
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Navbar;