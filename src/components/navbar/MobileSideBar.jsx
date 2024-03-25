import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import NavLinks from './NavLinks';

function MobileSideBar() {

    const { topNavbarHeight, mobileSidebar } = useSelector(state => state.global);


    useEffect(() => {

        if (mobileSidebar) {
            document.body.style.overflow = 'hidden';
        }


        return () => {
            document.body.style.overflow = 'auto';
        }


    }, [])



    return (
        <div
            style={{
                paddingTop: topNavbarHeight + 'px',
            }}
            className='bg-black bg-opacity-80 inset-0 fixed z-40 slideInAnimation'>
            <div className="flex flex-col ">
                <NavLinks />

            </div>

        </div>
    )
}

export default MobileSideBar