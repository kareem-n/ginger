import { FaQuestionCircle } from 'react-icons/fa'
import { FcCurrencyExchange, FcHome, FcWorkflow } from 'react-icons/fc'
import { HiUserGroup } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function NavLinks() {

    const { mobileSidebar, user } = useSelector(state => state.global);


    // console.log(x);


    return (
        <>
            <NavLink
                to={'/'}
                className={({ isActive }) =>
                    isActive ? mobileSidebar ? 'p-5 border-b main-bg-color text-white ' : 'px-5 py-2 rounded-full hover:text-gray-200 main-bg-color text-white ' + ' font-bold' : mobileSidebar ? 'p-5 border-b' : 'px-5 py-2 rounded-full text-gray-400 hover:text-gray-200' + ' font-bold '
                }
            >
                <div className="flex items-center">
                    <FcHome size={22} className="mr-3" />
                    Home
                </div>
            </NavLink>

            <NavLink
                to={user ? '/products' : '/register'}

                className={({ isActive }) =>
                    isActive ? mobileSidebar ? 'p-5 border-b main-bg-color text-white ' : 'px-5 py-2 rounded-full hover:text-gray-200 main-bg-color text-white ' + ' font-bold' : mobileSidebar ? 'p-5 border-b' : 'px-5 py-2 rounded-full text-gray-400 hover:text-gray-200' + ' font-bold '
                }
            >
                <div className="flex items-center">
                    <FcWorkflow size={22} className="mr-2" />
                    Products
                </div>

            </NavLink>

            <NavLink className={(mobileSidebar ? 'p-5 border-b' : 'px-5 py-2 rounded-full text-gray-400 hover:text-gray-200') + ' font-bold'}>
                <div className="flex items-center">
                    <FcCurrencyExchange size={22} className="mr-2" />
                    pricing
                </div>


            </NavLink>

            <NavLink className={(mobileSidebar ? 'p-5 border-b' : 'px-5 py-2 rounded-full text-gray-400 hover:text-gray-200') + ' font-bold'}>
                <div className="flex items-center">
                    <HiUserGroup size={22} className="mr-2" />
                    Features & Team
                </div>

            </NavLink>

            <NavLink
                to={'/error'}
                className={(mobileSidebar ? 'p-5 ' : 'px-5 py-2 rounded-full text-gray-400 hover:text-gray-200') + ' font-bold'}

            >
                <div className="flex items-center">
                    <FaQuestionCircle size={20} className="mr-3" />
                    FAQs
                </div>
            </NavLink>


        </>
    )
}

export default NavLinks