import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { IoSendOutline } from "react-icons/io5";
import { setDataToReceive, setTextSummarizeLoading, setTextSummarizeText } from '../../../redux/slices/APIs';
import langaugeDetetion from '../../../apis/langauge';


function LandDet() {

    const { topNavbarHeight } = useSelector(state => state.global);
    const { text } = useSelector(state => state.apis.textSummarize.dataToSend);
    const { loading, dataToReceive } = useSelector(state => state.apis.textSummarize);

    const dispatch = useDispatch();


    const handleTextChange = (e) => {


        dispatch(setTextSummarizeText(e.target.value));

        if (e.target.value === '') {
            e.target.nextElementSibling.nextElementSibling.classList.add("hidden");
            e.target.nextElementSibling.classList.remove("hidden");

            return;
        }

        e.target.nextElementSibling.nextElementSibling.classList.remove("hidden");
        e.target.nextElementSibling.classList.add("hidden");

        console.log(e.target);
    }


    const handleClick = async () => {
        dispatch(setTextSummarizeLoading(true));

        const tmp = await langaugeDetetion(text);

        dispatch(setTextSummarizeLoading(false));
        dispatch(setDataToReceive(tmp.response.language));


    }


    return (
        <div
            style={{
                paddingTop: topNavbarHeight + 'px'
            }}
            className='min-h-screen'>

            <div className=" container mx-auto my-10 px-5 md:px-0">
                <div className="flex">
                    <h2 className='px-10 py-4 opacity-80 rounded-full text-2xl md:text-4xl protest-font main-bg-color font-bold'>
                        Language Detector
                    </h2>
                </div>

                <div className="flex md:flex-nowrap flex-wrap gap-x-10 gap-y-5 mt-10">
                    <div className="w-full md:w-2/3 relative">
                        <textarea
                            onInput={handleTextChange}
                            cols="30" rows="12"
                            className='bg-gray-600 outline-none w-full rounded-lg p-5 '
                        ></textarea>
                        <span className='absolute top-0 left-0 m-5 text-gray-300'>/text goes here.../</span>

                        <div

                            onClick={handleClick}
                            className="hidden absolute bottom-0 right-0 m-4 hover:bg-opacity-10 rounded-full p-4 cursor-pointer hover:bg-gray-50">
                            <IoSendOutline size={25} />
                        </div>


                    </div>

                    <div className="w-full md:w-1/3 flex items-center justify-center">

                        {
                            loading ? <div className="">
                                loading....
                            </div> : <div className="text-4xl  main-bg-color main-bg-color-hover px-10 py-5 rounded-full">
                                <span>
                                    language is : <span className='uppercase'>{
                                        dataToReceive && dataToReceive
                                    }
                                    </span>

                                </span>

                            </div>
                        }



                    </div>


                </div>
            </div>


        </div>
    )
}

export default LandDet