import logo from '../../assets/download.png'
import './Navbar.css'
const Navbar = () => {

    const menuitems = (

        <>
            <li className="text-white text-base font-semibold">
                <a to="/consultetion">About</a>
            </li>
            <li className="text-white text-base font-semibold">
                <a to="/consultetion">Tokenomics</a>
            </li>
            <li className="text-white text-base font-semibold">
                <a to="/consultetion">Roadmap</a>
            </li>
            <li className="text-white text-base font-semibold ">
                <a to="/workshop/upcoming">Chart<sub>(soon)</sub></a>
            </li>
        </>
    );

    return (
        <div className="drawer  mx-auto max-w-screen-xl">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar ">

                    <img className='h-20 w-20' src={logo} />
                    <div className="flex-1 text-5xl font-bold text-white"><span className="text-[#CD6501]">$</span>DORA</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menuitems}
                        </ul>
                    </div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
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
    );
};

export default Navbar;