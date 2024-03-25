import { useEffect, useRef } from 'react';
import asset from './ai.png';

function Overview() {

    const ref = useRef();
    const scrollAssetBehavior = (scroll) => {

        if (!ref.current) return;

        const tmp = 100 - scroll / ref.current.parentNode.offsetTop * 100;

        if (tmp > 40) {
            ref.current.previousElementSibling.style.width = tmp + '%';
        } else {

            ref.current.previousElementSibling.style.width = '40.333%';
        }
    }


    useEffect(() => {


        if (window.innerWidth >= 500) {
            scrollAssetBehavior(window.scrollY);
            window.addEventListener("scroll", function () {
                scrollAssetBehavior(window.scrollY);
            })
        }


        return () => {
            window.removeEventListener("scroll", scrollAssetBehavior)
        }



    }, [])


    return (
        <div className="py-20 md:py-48">
            <div className="container relative overflow-hidden md:overflow-visible flex justify-between items-center mx-auto px-5">

                <div style={{
                }} className="absolute opacity-50 spinAnimation">
                    <img src={asset} className='w-full blur-sm' alt="" />
                </div>

                <div ref={ref} className="p-5"></div>


                <div className="relative md:w-1/2 flex flex-col items-start">
                    <h2 className='protest-font py-2 border-b-4 text-5xl'>Overview</h2>
                    <p className='mt-5 text-slate-300'>Excels in text analysis, leveraging advanced algorithms to extract valuable insights from vast amounts of textual data. From sentiment analysis to language comprehension, we provide comprehensive solutions that drive informed decision-making and optimize business processes.</p>
                </div>

            </div>
        </div>

    )
}

export default Overview