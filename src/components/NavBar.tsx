const NavBar = () => (
    <nav className="relative py-4 text-xl font-bold mb-10 md:mb-0 md:font-normal md:px-32 md:text-2xl xl:text-3xl">
        <div className="flex justify-center md:justify-between">
            <div className="md:space-x-20 md:flex md:items-center">
                <a className="flex justify-center hover:text-sky-800">
                    <svg className="block text-center h-24 mt-2 mb-10 fill-current text-black md:h-14 md:mt-0 md:mb-0 lg:h-20 xl:h-24 hover:text-sky-900" viewBox="6 -5 60 70" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.26,56H19.74A2.78,2.78,0,0,1,17,53.21V2.79A2.78,2.78,0,0,1,19.74,0H52.26A2.77,2.77,0,0,1,55,2.79V53.21A2.77,2.77,0,0,1,52.26,56ZM20.38,2.43A1.28,1.28,0,0,0,19.1,3.71V52.29a1.28,1.28,0,0,0,1.28,1.28H51.62a1.28,1.28,0,0,0,1.28-1.28V3.71a1.28,1.28,0,0,0-1.28-1.28Z"/>
                        <path d="M35.43,33.26h-12a.69.69,0,1,1,0-1.38h12a.69.69,0,0,1,0,1.38Z"/>
                        <path d="M38.62,21.25a3,3,0,0,0-3-3H26.18a3,3,0,0,0-3,3v4.58H38.62V21.25Z"/>
                        <path d="M34.93,13.15A4,4,0,1,1,30.88,9.1a4,4,0,0,1,4.05,4.05"/>
                        <rect width="30" height="16" x="21" y="36" rx="2" ry="2"/>
                        <path d="M49.89,14H43a.69.69,0,0,1,0-1.38h6.88a.69.69,0,0,1,0,1.38Z"/>
                        <path d="M49.89,16.64H43a.68.68,0,0,1-.68-.69.67.67,0,0,1,.68-.68h6.88a.68.68,0,0,1,.69.68A.69.69,0,0,1,49.89,16.64Z"/>
                    </svg>
                </a>
                <a className="px-5 py-3 hover:text-sky-800">Projects</a>
                <a className="px-5 py-3 hover:text-sky-800">Blog</a>
                <a className="px-5 py-3 hover:text-sky-800">Contact</a>
            </div>
        </div>
    </nav>
);

export default NavBar;