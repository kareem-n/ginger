import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";
import NavLinks from "./NavLinks";

import { CiMenuBurger } from "react-icons/ci";
import MobileSideBar from "./MobileSideBar";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar, setTopNavbarHeight, setUser } from "../../redux/slices/GlobalStatesSlice";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrPowerShutdown } from "react-icons/gr";







function Navbar() {

    const navRef = useRef();

    const { mobileSidebar, user } = useSelector(state => state.global);


    const dispatch = useDispatch();



    const logout = () => {
        localStorage.removeItem("userAccessToken");
        dispatch(setUser(null));
    }



    const navBehviourScroll = (WScroll) => {

        if (!navRef.current) return;
        if (WScroll > 150) {
            navRef.current.classList.replace("bg-opacity-20", "bg-opacity-100");
        } else {
            navRef.current.classList.replace("bg-opacity-100", "bg-opacity-20");

        }
    }

    useEffect(() => {


        navBehviourScroll(window.scrollY);

        window.addEventListener("scroll", function () {
            navBehviourScroll(window.scrollY)
        })

        dispatch(setTopNavbarHeight(navRef.current.offsetHeight));

    }, [])


    useEffect(() => {



        if (mobileSidebar) {
            navRef.current.classList.add("bg-opacity-100");
        }


    }, [mobileSidebar])


    return (

        <>
            <div ref={navRef} className={`py-3 overflow-hidden transition-colors fixed top-0 w-full z-50 bg-black bg-opacity-20`}>

                <div className="container mx-auto flex items-center justify-between px-5 md:px-0">


                    <div className="flex items-center">


                        <div
                            onClick={() => dispatch(setMobileSidebar(!mobileSidebar))}
                            className="mr-2 md:hidden text-white">
                            {
                                mobileSidebar ? <HiOutlineMenuAlt1 size={20} /> : <CiMenuBurger size={20} />
                            }
                        </div>
                        <Link to={'/'} style={{
                            textShadow: '0 0 3px black',
                        }} className="theme-text-color text-2xl uppercase font-extrabold">
                            ginger
                        </Link>
                    </div>



                    <div className="text-gray-400 md:flex items-center gap-x-2 hidden">
                        <NavLinks />
                    </div>




                    {
                        user ? <div
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-600 cursor-pointer px-5 py-2 rounded-md flex items-center">

                            <GrPowerShutdown className="mr-2" />
                            logout

                        </div> : <div className="text-white md:flex items-center md:gap-x-2">

                            <Link to={'/register'} className="relative overflow-hidden px-8 py-2 border theme-border-color border-opacity-40 rounded-md registerBtnAnimationOnHover theme-text-color hover:text-white hover:border-transparent hidden md:block">
                                Join Us
                            </Link>
                        </div>
                    }

                </div>



            </div>


            {
                mobileSidebar && <div className="">
                    <MobileSideBar />
                </div>
            }

        </>

    )
}

export default Navbar