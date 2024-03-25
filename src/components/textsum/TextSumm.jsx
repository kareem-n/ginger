import { useDispatch, useSelector } from 'react-redux'

import { MdMergeType, MdCallMissedOutgoing } from "react-icons/md";

import { FaRegPaste } from "react-icons/fa6";

import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { IoSend } from "react-icons/io5";
import { setDataToReceive, setTextSummarizeLoading, setTextSummarizeRange, setTextSummarizeText, setTextSummarizeType } from '../../redux/slices/APIs';
import textSummarization from '../../apis/TextSummrization';
import Output from './Output';
import { useRef } from 'react';

function TextSumm() {

    const textArea = useRef();

    const { range } = useSelector(state => state.apis.textSummarize.dataToSend);
    const { dataToSend } = useSelector(state => state.apis.textSummarize);

    const dispatch = useDispatch();


    const handleSendData = () => {
        dispatch(setTextSummarizeLoading(true));

        textSummarization(dataToSend).then(data => {
            dispatch(setDataToReceive(data));
            dispatch(setTextSummarizeLoading(false));

        });

    }



    const tmp = (element) => {

        if (element.value === '') {
            element.nextElementSibling.classList.remove("hidden");

            element.nextElementSibling.nextElementSibling.style.left = '';
            element.nextElementSibling.nextElementSibling.style.top = ''

            element.nextElementSibling.classList.remove("hidden");

            element.nextElementSibling.nextElementSibling.children[1].classList.remove('hidden');
            element.nextElementSibling.nextElementSibling.classList.replace('p-2', "py-3");
            element.parentNode.lastElementChild.classList.add("hidden")

            return
        }

        element.parentNode.lastElementChild.classList.remove("hidden");


        element.nextElementSibling.classList.add("hidden");

        element.nextElementSibling.nextElementSibling.children[1].classList.add('hidden');
        element.nextElementSibling.nextElementSibling.classList.replace('py-3', "p-2");

        element.nextElementSibling.nextElementSibling.style.left = '95%'
        element.nextElementSibling.nextElementSibling.style.top = '5%'


    }




    const handleChange = (e) => {
        dispatch(setTextSummarizeText(e.target.value))


        tmp(e.target)


    }

    const handleFocus = (e) => {
        e.target.nextElementSibling.classList.add("hidden");
    }

    const handleBlur = (e) => {

        if (e.target.value === '') {
            e.target.nextElementSibling.classList.remove("hidden");
        }

    }


    const { topNavbarHeight } = useSelector(state => state.global);
    return (
        <div
            style={{
                paddingTop: topNavbarHeight + 'px'
            }}
            className='min-h-screen'
        >



            <div className="container mx-auto py-10 px-5 md:px-0">
                <div className="flex">
                    <h2 className='text-4xl main-bg-color px-10 py-2 rounded-full protest-font'>text Summarization</h2>
                </div>

                <div className="mt-10 flex flex-wrap md:flex-nowrap items-center md:gap-x-10 gap-y-5 md:gap-y-0">
                    <div className="w-full md:w-3/5 bg-zinc-700 rounded-xl overflow-hidden">
                        <div className="bg-white text-gray-700 px-5 py-2 flex flex-wrap gap-y-5 items-center shadow-2xl">
                            <div className="flex items-center gap-x-2">
                                output type <MdMergeType size={24} />
                                <button
                                    onClick={(e) => {
                                        e.target.classList.add("main-bg-color", "main-bg-color-hover", "text-white");

                                        e.target.nextElementSibling.classList.remove("main-bg-color", "main-bg-color-hover");
                                        e.target.nextElementSibling.classList.replace("text-white", "text-black");

                                        dispatch(setTextSummarizeType(e.target.innerText.toLowerCase()))

                                    }}
                                    className='px-7 py-1 main-bg-color main-bg-color-hover rounded-full  hover:bg-gray-200 text-white'>
                                    Text
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.target.classList.add("main-bg-color", "main-bg-color-hover", "text-white");

                                        e.target.previousElementSibling.classList.remove("main-bg-color", "main-bg-color-hover");
                                        e.target.previousElementSibling.classList.replace("text-white", "text-black");

                                        dispatch(setTextSummarizeType(e.target.innerText.toLowerCase()))
                                    }}
                                    className='px-7 py-1 hover:bg-gray-200 rounded-full '>
                                    Bullets
                                </button>
                            </div>
                            <LiaGripLinesVerticalSolid className='hidden md:block' size={22} />
                            <div className="flex items-center md:ml-4">
                                Summarization Rate <MdCallMissedOutgoing className='mx-2' size={22} />

                                <input
                                    className='range-input'
                                    type="range"
                                    min={10}
                                    max={100}
                                    step={10}
                                    value={range}

                                    onChange={(e) => {

                                        dispatch(setTextSummarizeRange(e.target.value))
                                    }}
                                />

                                <span className='mx-2'>{range}</span>

                            </div>

                        </div>
                        <div className="relative">

                            <textarea
                                ref={textArea}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onInput={handleChange}
                                rows={12}
                                className='w-full relative z-10 bg-transparent block text-gray-200 outline-none p-5 pr-14 pb-10'
                            >
                            </textarea>

                            <span className='absolute top-0 m-5 text-gray-300'>/write text here to summarize.../</span>

                            <div
                                onClick={async () => {
                                    const text = await navigator.clipboard.readText()
                                    textArea.current.value = textArea.current.value + text;
                                    tmp(textArea.current);
                                }}

                                title='paste text' className="absolute transition-all main-bg-color cursor-pointer main-bg-color-hover rounded-lg z-10 top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center py-3" >
                                <div className=''>
                                    <FaRegPaste size={25} />
                                </div>
                                <p className='px-10'>
                                    paste text
                                </p>
                            </div>

                            <div
                                onClick={handleSendData}
                                className="hidden p-5 m-5 hover:bg-gray-300 rounded-full hover:bg-opacity-10 absolute bottom-0 z-50 right-0 cursor-pointer">
                                <IoSend size={25} />
                            </div>
                        </div>


                    </div>


                    <div className="w-full md:w-2/5">
                        <Output />
                    </div>


                </div>


            </div>



        </div>
    )
}

export default TextSumm