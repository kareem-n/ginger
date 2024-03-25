

import { useEffect, useRef } from 'react';
import team_member from './team-4.jpg';

function Team() {


    const animation = useRef();
    const TeamCardsParent = useRef();


    const animationScroll = () => {

        if (animation.current.getBoundingClientRect().top < 400) {
            animation.current.classList.add("team-animation");
        }
    }

    function teamCardsMap(teamCards, targetToCheck) {

        teamCards = Array.from(teamCards);

        return teamCards.filter(card => card.contains(targetToCheck))[0]

    }


    function teamCardStyleOnMouseEnter(card) {

        card.classList.add("theme-border-color", "border-opacity-30");


        // console.log(card.lastElementChild);

        card.lastElementChild.style.top = '0';


    }
    function teamCardStyleOnMouseLeave(card) {

        card.classList.remove("theme-border-color", "border-opacity-30");

        card.lastElementChild.style.top = '90%';



    }


    const teamCardEffectOnMouseEnter = (e) => {
        const card = teamCardsMap(TeamCardsParent.current.children, e.target);

        teamCardStyleOnMouseEnter(card);
    }
    const teamCardEffectOnMouseLeave = (e) => {
        const card = teamCardsMap(TeamCardsParent.current.children, e.target);

        teamCardStyleOnMouseLeave(card);
    }


    useEffect(() => {

        animationScroll();
        window.addEventListener("scroll", animationScroll)


        return () => {
            window.removeEventListener("scroll", animationScroll)
        }

    }, [])



    return (
        <div className="bg-stone-950">
            <div className="container mx-auto my-24 py-20">
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl protest-font">Meet Our Team</h2>
                    <p className="text-center mt-5 text-gray-300">
                        Ginger boasts a diverse and skilled team of AI specialists, linguists,  and software engineers<br /> dedicated to pushing the boundaries of language technology.
                    </p>
                </div>

                <div ref={TeamCardsParent} className="flex items-center flex-wrap justify-center md:gap-x-10 gap-y-10 relative py-14 px-5 md:px-20">


                    {/* NEON EFFECT SLIDE TO LEFT THEN SHOW UP CARDS */}
                    <div onAnimationEnd={() => {
                        if (window.innerWidth < 500) {
                            animation.current.classList.add("hidden");
                        }
                    }}

                        ref={animation}

                        className="absolute bg-stone-950 w-full h-full z-20">
                        <div className="theme-gradient-bg rounded-full absolute top-0 right-0 h-full p-4">

                        </div>
                    </div>

                    {/* CARDS OF EACH TEAM MEMBER */}
                    <div
                        onMouseEnter={teamCardEffectOnMouseEnter}
                        onMouseLeave={teamCardEffectOnMouseLeave}

                        className="transition-all duration-300 -translate-y-8 team-member-item rounded-full overflow-hidden relative border border-transparent"
                    >
                        <img
                            className='h-full w-full object-cover'
                            src={team_member}
                            alt="" />

                        <div style={{
                            top: '90%'
                        }} className="transition-all duration-700 bg-black bg-opacity-70 flex items-end justify-center absolute overflow-hidden w-full h-full rounded-full p-1">
                            <div className="mb-10 mx-5 text-center">
                                SEO <br />kareem nasser
                            </div>
                        </div>
                    </div>
                    <div
                        onMouseEnter={teamCardEffectOnMouseEnter}
                        onMouseLeave={teamCardEffectOnMouseLeave}

                        className="transition-all duration-300 translate-y-8 team-member-item rounded-full overflow-hidden relative border border-transparent"
                    >
                        <img
                            className='h-full w-full object-cover'
                            src={team_member}
                            alt="" />

                        <div style={{
                            top: '90%'
                        }} className="transition-all duration-700 bg-black bg-opacity-70 flex items-end justify-center absolute overflow-hidden w-full h-full rounded-full p-1">
                            <div className="mb-10 mx-5 text-center">
                                SEO <br />kareem nasser
                            </div>
                        </div>
                    </div>
                    <div
                        onMouseEnter={teamCardEffectOnMouseEnter}
                        onMouseLeave={teamCardEffectOnMouseLeave}
                        className="transition-all duration-300 -translate-y-8 team-member-item rounded-full overflow-hidden relative border border-transparent"
                    >
                        <img
                            className='h-full w-full object-cover'
                            src={team_member}
                            alt="" />

                        <div style={{
                            top: '90%'
                        }} className="transition-all duration-700 bg-black bg-opacity-70 flex items-end justify-center absolute overflow-hidden w-full h-full rounded-full p-1">
                            <div className="mb-10 mx-5 text-center">
                                SEO <br />kareem nasser
                            </div>
                        </div>
                    </div>
                    <div
                        onMouseEnter={teamCardEffectOnMouseEnter}
                        onMouseLeave={teamCardEffectOnMouseLeave}
                        className="transition-all duration-300 translate-y-8 team-member-item rounded-full overflow-hidden relative border border-transparent"
                    >
                        <img
                            className='h-full w-full object-cover'
                            src={team_member}
                            alt="" />

                        <div style={{
                            top: '90%'
                        }} className="transition-all duration-700 bg-black bg-opacity-70 flex items-end justify-center absolute overflow-hidden w-full h-full rounded-full p-1">
                            <div className="mb-10 mx-5 text-center">
                                SEO <br />kareem nasser
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Team